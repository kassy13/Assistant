import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SiTicktick } from "react-icons/si";
import toast from "react-hot-toast";
import { MdError } from "react-icons/md";
import { useAuthStore } from "../../AuthStore/GlobalStates";
import { HiExclamationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
 
const AccountSource = ({ endModals }) => {
  const { token, setLoading } = useAuthStore();
  const [AccountLink, setAccountLink] = useState("");
  const [fileName, setFileName] = useState(null);
  const [count, setCount] = useState(null);
  const [type, setType] = useState("");

  // value error or empty
  const [AccountLinkError, setAccountLinkError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const navigate = useNavigate();

  const handleAccountLink = (e) => {
    if (e === "") {
      setAccountLinkError(true);
    } else {
      setAccountLink(e);
    }
  };

  const handleCount = (e) => {
    setCount(e);
  };

  const handleType = (e) => {
    if (e === "") {
      setTypeError(true);
    } else {
      setType(e);
    }
  };

  const handleFileName = (e) => {
    if (e !== "") {
      setFileName(e);
    }
  };

  //material ui theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5B657A",
      },
      bg: {
        main: "#091324",
      },
    },
  });

  const toastDownloaded = () => {
    return (
      <div className="flex items-center">
        <SiTicktick className="text-[green] mr-2" /> Your file of leads has been saved.
      </div>
    );
  };

  const toastFailed = () => {
    return (
      <div className="flex items-center">
        <MdError className="text-[red] mr-2" /> Something went wrong, try again.
      </div>
    );
  };

  const fetchLeads = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        account: AccountLink,
        type: type,
        name: fileName,
        ...(count !== null && { count }),
      };
      console.log(body);
      const response = await fetch(
        "https://api.networkx.ai/api/v1/get-account-leads",
        {
          method: "POST",
          headers: {
            Accept: "text/csv",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        const csvData = await response.text();
        console.log(csvData);

        // trigger the file download:
        // const blob = new Blob([csvData], { type: "text/csv" });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement("a");
        // a.href = url;
        // a.download = fileName || "leads.csv"; //file name
        // document.body.appendChild(a);
        // a.click();
        // document.body.removeChild(a);
        
        toast(toastDownloaded);
        endModals();
        navigate("/dashboard/dm-automation/leads");
      } else {
        const dataError = await response.text();
        console.log(dataError);
        toast(toastFailed);
        endModals();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center">
      <form
        onSubmit={fetchLeads}
        className="max-w-[700px] radient-shadow border-text border-[2px] w-full relative z-[99] bg-[#091324] p-12 py-[40px] rounded-[20px]"
      >
        <p className="font-medium text-center text-lg">Add Account Source</p>
        <div className="flex items-center">
          <div className="w-[30%] mb-2">
            <h2 className="text-xs">Name your file:</h2>
            <p className="text-xs text-dim">
              Choose a name for your leads file
            </p> 
          </div>
          <div className="border border-dim rounded-md p-4 py-1 my-3 w-[70%]">
            <input
              type="text"
              placeholder="Enter file name"
              className="text-dim placeholder-dim bg-transparent py-2 w-full outline-none text-xs"
              onChange={(e) => handleFileName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[30%] mb-2">
            <h2 className="text-xs flex items-center">
              Enter an account link:
            </h2>
            <p className="text-xs text-dim">
            Select an account which you'd like to scrape leads from
            </p>
          </div>
          <div className="border border-dim rounded-md p-4 py-1 my-3 w-[70%]">
            <input
              type="text"
              placeholder="Enter the account link"
              onChange={(e) => handleAccountLink(e.target.value)}
              className="text-dim placeholder-dim bg-transparent py-2 w-full outline-none text-xs"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[30%] mb-2">
            <h2 className="text-xs flex items-center">
              Select a lead source:
            </h2>
            <p className="text-xs text-dim">
            Choose the type of audience you'd like to scrape leads from
            </p>
          </div>
          <ThemeProvider theme={theme}>
            <FormControl className="w-[70%]">
              <Select
                onChange={(e) => handleType(e.target.value)}
                value={type}
                sx={{
                  height: "46px",
                  fontSize: "13px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                   borderColor: "primary.main",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "primary.main",
                  },
                  "& .MuiSelect-select": {
                    color: "primary.main",
                  },
                }}
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"followers"}>Followers</MenuItem>
                <MenuItem value={"following"}>Following</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
        <div className="flex items-center">
          <div className="w-[30%] mb-2">
            <h2 className="text-xs">Amount of leads to scrape:</h2>
            <p className="text-xs text-dim">
              Choose the total amount of leads you want to scrape
            </p>
          </div>
          <div className="border border-dim rounded-md p-4 py-1 my-3 w-[70%]">
            <input
              type="number"
              placeholder="Amount of leads to scrape (leave blank to scrape all available)"
              className="text-dim placeholder-dim bg-transparent py-2 w-full outline-none text-xs"
              onChange={(e) => handleCount(e.target.value)}
            />
          </div>
        </div>
        <button
          disabled={AccountLinkError || typeError || !AccountLink || !type}
          className="rounded-md bg-secondary w-full text-text font-semibold p-6 py-3 mt-2 hover:bg-opacity-70"
        >
          Export Leads
        </button>
        <FaX
          onClick={endModals}
          className="absolute top-8 right-8 cursor-pointer hover:opacity-65"
        />
      </form>
      <div
        className="absolute inset-0 rounded h-[100%] w-full z-[9] flex items-center justify-center cursor-pointer backdrop-blur-md"
        style={{ backdropFilter: "blur(5px)" }}
      />
    </div>
  );
};

export default AccountSource;
