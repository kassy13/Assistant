import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthStore/AuthProvider";
import toast from "react-hot-toast";
import SelectAccount from "../../components/SelectAccount";
import { useDropzone } from "react-dropzone";
import excel from "../../assets/excelLogo.png";
import { useAuthStore, useDetailsStore } from "../../AuthStore/GlobalStates";

const CampaignSetup = () => {
  const { token, user, setLoading} = useAuthStore();
  const {getActiveAccountId, accounts } = useDetailsStore()
  const [selectMenu, setSelectMenu] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [mustFollow, setMustFollow] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  //error states
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const checkBoxRef = useRef(null);
  const navigate = useNavigate();

  let { state } = useLocation();
  const stateValue = state || false

  useEffect(() => {
    if (!token || !user) {
      navigate("/signin");
    } else if (token && !user.active_plan) {
      navigate("/dm-automation/pricing");
      toast("Please Subscribe to access our services!");
    }
  }, [token, user, navigate]);

  const handleMessage = (e) => {
    if (e.trim().length < 3) {
      setMessageError(true);
    } else {
      setMessage(e);
      setMessageError(false);
    }
  };

  const handleName = (e) => {
    if (e.trim().length < 3) {
      setNameError(true);
    } else {
      setName(e);
      setNameError(false);
    }
  };

  const CheckBox = () => {
    if (checkBoxRef.current) {
      checkBoxRef.current.click();
    }
  };

  const StartCampaign = async (e) => {
    e.preventDefault();
    setLoading(true);
    const x_id = getActiveAccountId();

    // Create FormData object
    const formData = new FormData();

    formData.append("x_id", x_id);
    formData.append("message", message);
    formData.append("name", name);
    formData.append("must_follow", mustFollow ? 1 : 0);

    if(stateValue){
      formData.append("lead_id", state.lead_id);
    }else if(!state && uploadedFile) {
      formData.append("source", uploadedFile);
    }
    const fileAvailable = state?.lead_id || uploadedFile 
    if (!nameError && !messageError && accounts.length > 0 && fileAvailable) {
      try {
        const response = await fetch(
          "https://api.networkx.ai/api/v1/start-campaign",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        if (response.ok) {
          const success = await response.json();
          toast(success.status);
          navigate("/dashboard/dm-automation/campaign");
        } else {
          toast("Automation Failed");
          const error = await response.text();
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

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

  const elementRef = useRef(null);
  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setSelectMenu(false);
    }
  };
  const accountValid = accounts.length > 0;

  return (
    <div
      onClick={handleClickOutside}
      className="flex flex-col justify-center items-center w-full "
    >
      <form
        onSubmit={StartCampaign}
        className="flex flex-col items-center mx-auto w-full justify-center px-2 text-dim max-w-[600px] lt:px-4"
      >
        <div className="relative w-full my-2 z-[97]" ref={elementRef}>
          <label>Select Account</label>
          <SelectAccount
            style={"p-0"}
            selectMenu={selectMenu}
            setSelectMenu={setSelectMenu} 
          />
        </div>
        <span
          className={`w-full ${
            !accountValid ? "opacity-40" : "opacity-[100%]"
          } relative z-[9]`}
          style={{
            pointerEvents: accountValid ? "auto" : "none",
            cursor: accountValid ? "auto" : "default",
          }}
        >
          <div className="flex flex-col w-full my-2">
            <label className="mb-2 text-sm">Campaign Name</label>
            <div
              className={`bg-[#091324] p-4 border ${
                nameError ? "border-[red]" : "border-dim "
              } rounded-lg  w-full`}
            >
              <input
                onChange={(e) => handleName(e.target.value)}
                onFocus={(e) => handleName(e.target.value)}
                placeholder="Name the campaign"
                className="w-full outline-none placeholder:text-dim placeholder:text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col w-full my-2">
            <label className="mb-2 text-sm">Compose your message</label>
            <div
              className={`bg-[#091324] p-4 border ${
                messageError ? "border-[red]" : "border-dim "
              } rounded-lg  w-full h-[100px]`}
            >
              <textarea
                onChange={(e) => handleMessage(e.target.value)}
                onFocus={(e) => handleMessage(e.target.value)}
                placeholder="Enter your campaign message"
                className="h-full w-full outline-none placeholder:text-dim placeholder:text-sm bg-transparent"
              ></textarea>
            </div>
          </div>
          {!state && (
            <div {...getRootProps()} className="flex flex-col w-full my-2">
              <label className="mb-2 text-sm" htmlFor="csvFile">
                Upload a CSV file with your leads
              </label>
              <button
                type="button"
                className={`flex flex-col justify-center items-center mx-auto bg-[#091324] p-2 border ${
                  fileError ? "border-[red]" : "border-dim"
                }  rounded-lg w-full h-auto min-h-[100px]`}
              >
                {uploadedFile?.name && (
                  <div className="p-1 px-2 text-xs flex items-center rounded border-[1px] mr-auto">
                    <img src={excel} className="w-[30px]" />
                    <h2>{uploadedFile?.name}</h2>
                  </div>
                )}
                <input {...getInputProps()} id="csvFile" name="csvFile" />
                <div className="flex justify-center items-center h-full">
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <span className="flex flex-col items-center">
                      <MdOutlineFileUpload className="text-2xl" />
                      <p className="mb-2">Upload or drag and drop a CSV file</p>
                    </span>
                  )}
                </div>
              </button>
            </div>
          )}
          {state && (
            <>
            <h1 className="text-xs mb-1">Selected Leads</h1>
            <div className="p-2 px-4 text-xs flex items-center rounded border-[1px] mr-auto">
              <img src={excel} className="w-[30px]" />
              <h2 className="ml-2">{state.lead_name}</h2>
            </div>
            </>
          )}
          <div className="custom-check w-full flex items-center my-2 justify-start">
            <input
              ref={checkBoxRef}
              onChange={(e) => setMustFollow(e.target.checked)}
              className="hidden"
              type="checkbox"
              id="EnableFollowup"
            />
            <div
              onClick={CheckBox}
              className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked rounded-full h-full w-full bg-transparent"></div>
            </div>
            <label htmlFor="EnableFollowup" className="text-sm ml-2">
              Enable follow before DMing
            </label>
          </div>
          <div className="flex w-full my-2">
            <Link
              to="/dashboard/campaign"
              className="rounded-lg bg-[#253860] text-dim font-semibold p-6 py-2 mr-2 hover:bg-opacity-80"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={
                (!uploadedFile && !state?.lead_id) || 
                nameError || 
                messageError || 
                !name || 
                !message
              }
              className="rounded-lg bg-secondary text-text font-semibold p-6 py-2 disabled:bg-[#15203869] disabled:text-opacity-55 hover:bg-opacity-70"
            >
              Proceed
            </button>
          </div>
        </span>
      </form>
    </div>
  );
};

export default CampaignSetup;
