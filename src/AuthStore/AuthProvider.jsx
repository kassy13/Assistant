//This context contains all the auth process and other global states
import React, {createContext, useContext} from "react";
import {useAuthStore, useDetailsStore} from "./GlobalStates";
import {data} from "autoprefixer";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const {token, setUserAndToken, setUser, setLoading} = useAuthStore();
  const {setActiveAccountId} = useDetailsStore();

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.networkx.ai/api/v1/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log('data',data)
        if (data.success === false) {
          throw new Error(data.message);
        } else {
          setUserAndToken(data.user, data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
        }
      }
      
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userInfo) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.networkx.ai/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (response.ok) {
        const data = await response.json();
        setUserAndToken(data.user, data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        return data;
      } else if (response.status === 401) {
        forceLogout();
        throw new Error();
      } else {
        const errordata = await response.json();
        console.log(errordata);
        throw new Error(errordata.errors.email);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/user-details",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        return data.user;
      } else if (response.status === 401) {
        forceLogout();
        throw new Error();
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      logout();
      throw error;
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await fetch("https://api.networkx.ai/api/v1/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else if (response.status === 401) {
        forceLogout();
        throw new Error();
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      if (error.status === 401) {
        console.log("we up");
      }
      console.error("Error refreshing token:", error);
      logout(); // Log out if refresh fails
    }
  };

  const goggleSignIn = async (tokenResponse) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/google-signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({credentials: tokenResponse}),
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setUserAndToken(data.user, data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      } else {
        const dataError = await response.json();
        console.log(dataError.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.networkx.ai/api/v1/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 401) {
        forceLogout();
        throw new Error("user logged out -f");
      }
      if (response.ok) {
        setUserAndToken(null, null);
        setActiveAccountId(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("activeAccountId");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  const forceLogout = () => {
    setUserAndToken(null, null);
    setActiveAccountId(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("activeAccountId");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        refreshUser,
        logout,
        register,
        goggleSignIn,
        forceLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
