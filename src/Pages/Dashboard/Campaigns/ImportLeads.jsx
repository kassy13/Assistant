import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import excel from "../../../assets/excelLogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import useFunctionStore from "../../../store/FunctionStore";
import { useDetailsStore } from "../../../AuthStore/GlobalStates";
import uploadIcon from "../../../assets/icons/UploadIcon.png";

const ImportLeads = ({ setStepIndex }) => {
  const { fetchCampaigns } = useFunctionStore();
  const { campaigns } = useDetailsStore();
  const data = useLocation();
  const navigate = useNavigate();
  const importLeads = JSON.parse(window.localStorage.getItem("importLeads"));
  const [fileName, setFilename] = useState(importLeads?.fileName || "");

  const [fileNameError, setFileNameError] = useState(false);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [dashboardDataId, setDashboardDataId] = useState();
  const [loadingCamp, setLoadingCamp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetchCampaigns(setDashboardDataId, setLoadingCamp);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (
      selectedFile.type === "text/csv" ||
      selectedFile.name.endsWith(".csv")
    ) {
      setUploadedFile(selectedFile);
    } else {
      setFileError(true);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      file: [".csv"],
    },
    maxFiles: 1,
  });

  const validateName = (e) => {
    const usedName = campaigns.find(
      (campaign) => campaign.name.toLowerCase() === e.toLowerCase()
    );
    console.log({ usedName });

    if (usedName) {
      setFileNameError(true);
      setErrorMessage("Campaign Name is already in use");
    } else {
      setFileNameError(false);
      setErrorMessage("");
    }
    if (e.length < 1) {
      setFileNameError(true);
    }
  };

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const handleSaveData = async () => {
    let campaignData;

    if (data.state) {
      campaignData = {
        lead_id: data.state.lead_id,
        fileName,
        leadName: data.state.lead_name,
      };
    } else if (uploadedFile && !fileNameError) {
      const base64File = await fileToBase64(uploadedFile);
      campaignData = {
        base64File,
        fileName,
        originalFileName: uploadedFile.name,
      };
    } else if (importLeads?.base64File) {
      campaignData = {
        base64File: importLeads.base64File,
        fileName: fileName || importLeads.fileName,
        originalFileName: importLeads.originalFileName,
      };
    } else if (importLeads?.leadName) {
      campaignData = {
        fileName,
        leadName: importLeads.leadName,
        lead_id: importLeads.lead_id,
      };
    } else {
      console.error("No file uploaded or saved leads found!");
      return;
    }
    window.localStorage.setItem("importLeads", JSON.stringify(campaignData));
    setStepIndex(1);
    navigate(location.pathname, { replace: true, state: null });
  };

  const isDisabled = !(
    (uploadedFile ||
      importLeads?.base64File ||
      data.state?.lead_id ||
      importLeads?.lead_id) &&
    fileName.trim() !== ""
  );

  const borderColor = fileError ? "border-[red]" : "border-[#E1EAFD]";
  const leadName =
    data.state?.lead_name ||
    uploadedFile?.fileName ||
    importLeads?.leadName ||
    importLeads?.originalFileName;

  return (
    <div className="max-w-[500px] h-[70%]  radient-shadow border-text border-[1px] w-full relative z-[99] bg-[#091324] p-6 py-[30px] rounded-3xl">
      <div className="max-w-[400px] h-full mx-auto text-text flex flex-col items-center justify-center">
        <h1 className="font-normal py-1 mr-auto">Name Your Campaign</h1>
        <p className="text-xs text-[red] mr-auto pb-1">{errorMessage}</p>
        <div
          className={`border-[#E1EAFD] w-full border-[1px] rounded-lg p-2 px-4 ${
            fileNameError && "border-[red]"
          }`}
        >
          <input
            onChange={(e) => {
              validateName(e.target.value);
              setFilename(e.target.value);
            }}
            value={fileName}
            onBlur={(e) => validateName(e.target.value)}
            className="border-none w-full outline-none bg-transparent text-sm"
            placeholder="Enter campaign name…"
          />
        </div>

        <div
          {...(!data.state ? { ...getRootProps() } : {})}
          className={`flex flex-col h-full w-full my-4 ${
            data.state || (importLeads?.lead_id && "opacity-45")
          }`}
        >
          <button
            type="button"
            className={`flex flex-col justify-center items-center mx-auto bg-[#091324] border ${borderColor} 
                  ${
                    data.state ? "cursor-auto opacity-70" : "cursor-pointer"
                  } rounded-lg w-full h-full min-h-[100px]`}
          >
            <input
              {...getInputProps()}
              id="csvFile"
              name="csvFile"
              className="hidden"
            />
            <div className="flex flex-col relative justify-center items-center py-2 h-full">
              {isDragActive ? (
                <p>Drop the file here ...</p>
              ) : (
                <span className="flex flex-col items-center text-center">
                  <p className="text-sm">
                    Upload your CSV file to import leads
                  </p>
                  <img src={uploadIcon} className="text-5xl w-[85px] my-6" />
                  <p className="text-sm">
                    Select a CSV file to import <br /> or Drag & Drop your CSV
                    file here
                  </p>
                  {uploadedFile?.name && (
                    <div className="p-1 px-2 w-full text-xs mt-4 flex items-center justify-center rounded border mr-auto">
                      <img
                        src={excel}
                        className="w-[30px] mr-2"
                        loading="lazy"
                        alt="Excel icon"
                      />
                      <h2>{uploadedFile.name}</h2>
                    </div>
                  )}
                  {!uploadedFile?.name && (importLeads || leadName) && (
                    <div className="p-1 px-2 w-full text-xs mt-4 flex items-center justify-center rounded border mr-auto">
                      <img
                        src={excel}
                        className="w-[30px] mr-2"
                        loading="lazy"
                        alt="Excel icon"
                      />
                      <h2>{leadName}</h2>
                    </div>
                  )}
                </span>
              )}
            </div>
          </button>
        </div>
        <button
          onClick={handleSaveData}
          disabled={isDisabled}
          className=" w-[100%] justify-center p-2 text-white bg-secondary px-8 rounded-md font-light disabled:text-text disabled:bg-opacity-65 hover:bg-opacity-70"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ImportLeads;
