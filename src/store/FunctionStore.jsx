import {useState} from "react";
import {useAuth} from "../AuthStore/AuthProvider";
import {useNavigate} from "react-router-dom";
import {useAuthStore, useDetailsStore} from "../AuthStore/GlobalStates";

const useFunctionStore = () => {
  const {token, user, setLoading} = useAuthStore();

  const {forceLogout} = useAuth();
  const {setAccounts, setCampaigns} = useDetailsStore();
  const [miniLoading, setMiniLoading] = useState(false);
  const [selectMenu, setSelectMenu] = useState(false);
  const navigate = useNavigate();

  //subscribe to a plan
  const websiteURL = "https://twitter-assistant.vercel.app/dashboard";
  const subscribe = async (planID) => {
    if (!token) {
      navigate("/signup");
    } else {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.networkx.ai/api/v1/subscribe?plan=${planID}&website=${websiteURL}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response?.status === 401) {
          forceLogout();
          throw new Error();
        }
        console.log("response function subscribe", response);
        if (response.ok) {
          const data = await response.json();
          console.log("data function subscribe", data);
          if (data.success) {
            window.location.href = data.url;
          } else {
            throw data.error;
          }
        } else {
          const dataError = await response.json();
          console.log(dataError);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        console.log("K");
      }
    }
  };

  // fetch added accounts
  const fetchData = async () => {
    try {
      setMiniLoading(true);
      const response = await fetch("https://api.networkx.ai/api/v1/xaccounts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.status === 401) {
        forceLogout();
        throw new Error();
      }
      if (response.ok) {
        const data = await response.json();
        if (!data.success) {
          throw new Error();
        }
        if (data.success) {
          setAccounts(data.connected_accounts);
        }
      } else {
        if (response.status === 401) {
          forceLogout();
        }
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setMiniLoading(false);
    }
  };

  //fetch the campaigns data for the dashboard
  const fetchCampaigns = async (setDashboardDataId, setLoadingCamp) => {
    if (user.active_plan) {
      try {
        setLoadingCamp(true);
        const response = await fetch(
          "https://api.networkx.ai/api/v1/see-campaigns",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const revData = Array.isArray(data.campaigns)
            ? data.campaigns.reverse()
            : [];
          setCampaigns(revData);
          const currentData = revData;
          setDashboardDataId(currentData[0]?.id);
        } else {
          const error = await response.json();
          throw error;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCamp(false);
      }
    }
  };

  //fetch the dashboard data
  const fetchDashboard = async (
    setLoadDashboard,
    dashboardDataId,
    setDashboardData
  ) => {
    try {
      setLoadDashboard(true);
      const response = await fetch("https://api.networkx.ai/api/v1/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({campaign_id: dashboardDataId}),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setDashboardData(data.data);
      } else {
        const errorData = await response.text();
        console.log(errorData);
        throw new Error("something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadDashboard(false);
    }
  };

  return {
    subscribe,
    fetchData,
    miniLoading,
    selectMenu,
    setSelectMenu,
    fetchDashboard,
    fetchCampaigns,
  };
};

export default useFunctionStore;
