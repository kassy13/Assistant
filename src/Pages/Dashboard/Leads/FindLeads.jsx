import React, { useEffect, useState } from "react";
import spinner from "../../../assets/Spinner.svg";
import addLead from "../../../assets/images/addLead.png";
import { FaDownload, FaPlus, FaStopwatch, FaUser } from "react-icons/fa";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore, useDetailsStore } from "../../../AuthStore/GlobalStates";
import { FaAngleRight, FaCircleCheck } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import comments from "../../../assets/icons/comments.svg";
import Pagination from "./Pagination";
import DelateModal from "../../../components/Modal/DelateModal";

const FindLeads = () => {
  const { token, user } = useAuthStore();
  const { leads, setLeads } = useDetailsStore();
  const [leadItem, setLeadItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [singLoading, setSingLoading] = useState(false);
  const [actionLoader, setactionLoader] = useState({
    download: false,
    delete: false,
  });

  const [deleteModal, setDeleteModal] = useState(false);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  // setting the pagination index
  const indexoflastpost = currentPage * postPerPage;
  const indexoffirstpost = indexoflastpost - postPerPage;
  const currentItems = leadItem?.leads.data.slice(
    indexoffirstpost,
    indexoflastpost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user) {
      navigate("/signin");
    } else if (token && !user.active_plan) {
      navigate("/dashboard/pricing");
      toast("Please Subscribe to access our services!");
    }
  }, [token, user, navigate]);

  useEffect(() => {
    if (leads.length > 0) {
      getLeadsItem(leads[leads.length - 1].id);
    }
  }, [leads]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.networkx.ai/api/v1/leads", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      });
      if (response.ok) {
        const leadsData = await response.json();
        setLeads(leadsData.leads);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getLeadsItem = async (id) => {
    setSingLoading(true);
    try {
      const response = await fetch(
        `https://api.networkx.ai/api/v1/leads/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        }
      );
      if (response.ok) {
        const leadsData = await response.json();
        setLeadItem(leadsData);
        console.log(leadItem.leads);
      } else {
        const errorData = await response.text();
        console.log(errorData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSingLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const displayDate = (time) => {
    const date = new Date(time);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const constDay = day > 9 ? day : `${0}${day}`;
    const constMonth = month > 9 ? month : `${0}${month}`;
    return `${constMonth}/${constDay}/${year}`;
  };

  function formatNumber(num) {
    if (num < 1000) return num?.toString();
    const units = ["k", "M"];
    const unitIndex = Math.min(
      Math.floor(Math.log10(num) / 3) - 1,
      units.length - 1
    );
    const scaledNum = num / Math.pow(1000, unitIndex + 1);
    return `${scaledNum.toFixed(1).replace(/\.0$/, "")}${units[unitIndex]}`;
  }

  const formatTimestamp = (timestamp, type) => {
    const date = new Date(timestamp);

    const options =
      type === "time"
        ? { hour: "numeric", minute: "numeric", hour12: true }
        : { month: "2-digit", day: "2-digit", year: "numeric" };

    return date.toLocaleString("en-US", options);
  };

  const convertToCSV = (data) => {
    const header = "username\n";
    const rows = data.map((item) => item.username).join("\n");
    return header + rows;
  };

  const downloadCSV = () => {
    setactionLoader({ ...actionLoader, download: true });

    setTimeout(() => {
      const csvData = convertToCSV(leadItem?.leads.data);
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", leadItem.leads.name + ".csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setactionLoader({ ...actionLoader, download: false });
    }, 2000);
  };

  const deleteLeads = async () => {
    setactionLoader({ ...actionLoader, delete: true });
    try {
      const response = await fetch(
        `https://api.networkx.ai/api/v1/leads/${leadItem.leads.id}/delete`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resData = await response.json()
      if (resData.success) {
        const newLeads = leads.filter((lead) => lead.id !== leadItem?.leads.id);
        setLeads(newLeads);
        toast('Lead has been successfully deleted.');
        getLeadsItem(leads[leads.length - 1].id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteModal(false);
      setactionLoader({ ...actionLoader, delete: false });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[82vh] w-full flex justify-center items-center">
        <img src={spinner} className="w-[50px]" alt="loading" />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col min-h-[100vh] h-full scrollbar-hide overflow-y-scroll text-text">
      {!loading && leads.length > 0 && (
        <div className="flex w-full justify-between items-start h-[100vh]">
          <div className="w-full sm:w-[30%] mr-auto sm:max-w-[300px]">
            <Link
              to={"find-leads"}
              className="bg-secondary flex justify-between items-center p-4 w-full rounded-md md:justify-center"
            >
              Click here to find leads
              <FaAngleRight className="ml-2" />
            </Link>
            <div className="overflow-y-scroll h-[100vh] scrollbar-hide">
              {leads
                .map((lead) => (
                  <div
                    onClick={() => getLeadsItem(lead.id)}
                    // to="/dashboard/dm-automation/campaign"
                    state={{ lead_id: lead.id, lead_name: lead.name }}
                    key={lead.id}
                    className={`p-4 flex items-center bg-[#091324] cursor-pointer w-full justify-between my-2 border-[#5B657A] border-[1px] rounded-md flex-row sm:flex-col md:flex-row ${leads.is_used && "opacity-25"
                      } ${lead.id === leadItem?.leads.id && !singLoading && 'shadow-[inset_0_0_20px_8px_rgba(63,142,255,0.3)]'}`}
                  >
                    <div className="flex flex-col">
                      <h2 className="text-sm w-[90%] text-nowrap font-medium">
                        {lead.name.slice(0, 25)}
                        <span className="text-xs">
                          {lead.name.length > 25 && ".."}
                        </span>
                      </h2>
                    </div>
                    <p className="text-[10px] my-[1px] text-[#5B657A]">
                      {displayDate(lead.created_at)}
                    </p>
                  </div>
                ))
                .reverse()}
            </div>
          </div>
          {leadItem && !singLoading && (
            <div className="w-[76%] px-2 hidden sm:block h-auto">
              <div className="flex justify-between text-xs">
                <div className="bg-primary rounded-[6px] p-2 w-[40%]">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Leads Scraped From: <span className="font-normal">X</span></h3>
                  </div>
                  <p>
                    <span className="font-semibold">Source:</span> Post{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="font-semibold">Scraped Data:</p>
                    <p className="ml-2 capitalize-first">
                      {leadItem?.leads?.type}
                    </p>
                  </div>
                </div>
                <div className="w-[35%] mx-2 p-2 bg-primary rounded-[6px] flex items-center justify-start">
                  <div className="flex items-center justify-between">
                    <FaUser
                      className="bg-[#091324] p-2 text-3xl rounded-full"
                    />
                    <span className="flex items-center justify-center">
                      <h2 className="mx-4 text-[13px] font-semibold">Total Leads Successfully Imported:</h2>
                      <p className="text-[15px] font-normal">
                        {leadItem?.leads.data.length}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="bg-primary rounded-[6px] w-[28%] flex flex-col items-ce px-4 p-2 justify-center">
                  <p className="flex items-center font-semibold">
                    {" "}
                    {/* <FaCircleCheck className="mr-2 text-text" /> */}
                    Import
                    Completed On:
                  </p>
                  <div className="flex mt-1 items-center">
                    <span className="flex my-1 mr-2">
                      <FaStopwatch className="mr-2 text-text" />
                      {formatTimestamp(leadItem?.leads.created_at, "time")}
                    </span>
                    <span className="flex my-1 mx-2">
                      <BsFillCalendar2EventFill className="mr-2 text-text" />
                      {formatTimestamp(leadItem?.leads.created_at, "date")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <h1 className="font-medium text-sm">Campaign: {leadItem?.leads?.name}</h1>
                <div className="text-xs flex items-center">
                  <button
                    disabled={actionLoader.download}
                    onClick={downloadCSV}
                    className={`bg-secondary rounded px-3 p-1 flex items-center mx-2 hover:opacity-70 disabled:opacity-85`}
                  >
                    Download
                    {actionLoader.download ? (
                      <img
                        src={spinner}
                        alt="spinner"
                        className="ml-1 w-[15px]"
                      />
                    ) : (
                      <FaDownload className="ml-2" />
                    )}
                  </button>
                  <button
                    disabled={actionLoader.delete}
                    onClick={() => setDeleteModal(true)}
                    className="bg-secondary rounded px-3 p-1 flex items-center hover:opacity-70"
                  >
                    Delete
                    {actionLoader.delete ? (
                      <img
                        src={spinner}
                        alt="spinner"
                        className="ml-1 w-[15px]"
                      />
                    ) : (
                      <RiDeleteBin6Line className="ml-2" />
                    )}
                  </button>
                </div>
              </div>
              <div className="text-xs flex flex-col justify-between">
                <div className="flex h-full justify-between items-stretch bg-[#091324] rounded-[7px]">
                  <div className="flex flex-col h-full justify-between items-center w-full px-3 my-2">
                    <header className="flex items-center p-2 justify-between w-full bg-[#010C1E] rounded-[6px]">
                      <h2 className=" py-1 w-1/5">User</h2>
                      <h2 className=" py-1 w-1/5 text-center">Followers</h2>
                      <h2 className=" py-1 w-1/5 text-center">Following</h2>
                    </header>
                    <main
                      className={`w-full px-2 h-[45vh] custom ${window.innerHeight < 700 ? "h-[45vh]" : "h-[60vh]"
                        }`}
                    >
                      {currentItems.map((user) => (
                        <div className="flex items-center justify-between w-full">
                          <div
                            key={user.username}
                            className="p-2 text-sm w-1/5 flex items-center"
                          >
                            <img
                              src={user.pfp}
                              className="h-[25px] w-[25px] rounded-full mr-1 border-[3px] border-white"
                              alt="Profile"
                            />
                            <div>
                              <p className="text-xs">{user.name}</p>
                              <p className="text-dim text-xs">
                                @{user.username}
                              </p>
                            </div>
                          </div>
                          <div
                            key={user.username + "-followers"}
                            className="p-2 text-xs w-1/5 text-center"
                          >
                            {formatNumber(user.followers)}
                          </div>
                          <div
                            key={user.username + "-following"}
                            className="pl-4 text-xs w-1/5 text-center"
                          >
                            {formatNumber(user.following)}
                          </div>
                        </div>
                      ))}
                    </main>
                    <footer className="bg-primary flex justify-between items-center w-full px-3 rounded-[6px]">
                      <p>
                        Showing {currentPage * postPerPage} of{" "}
                        {leadItem?.leads.data.length}
                      </p>
                      {leadItem?.leads?.data.length > postPerPage && (
                        <Pagination
                          postPerPage={postPerPage}
                          totalPosts={leadItem?.leads.data.length}
                          paginate={paginate}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                        />
                      )}
                    </footer>
                  </div>
                </div>
              </div>
              {deleteModal && (
                <DelateModal
                  setDeleteModal={setDeleteModal}
                  deleteCampaign={deleteLeads}
                  type={"lead"}
                  loading={actionLoader.delete}
                />
              )}
            </div>
          )}
          {singLoading && (
            <div className="min-h-[82vh] w-full flex justify-center items-center">
              <img src={spinner} className="w-[50px]" alt="loading" />
            </div>
          )}
        </div>
      )}
      {!loading && leads.length < 1 && (
        <div className="flex flex-col justify-center items-center h-[65vh]">
          <img src={addLead} alt="add lead" className="w-[160px]" />
          <p className="text-text text-lg text-center mb-3 px-4">
            You haven't created any lead sources yet. Get started by creating
            one now.
          </p>
          <Link
            to="find-leads"
            className="bg-[#253860] text-text text-sm p-3 px-4 rounded-lg flex items-center hover:bg-opacity-80"
          >
            <FaPlus className="mr-2" />
            Choose A Lead Source
          </Link>
        </div>
      )}
    </div>
  );
};

export default FindLeads;
