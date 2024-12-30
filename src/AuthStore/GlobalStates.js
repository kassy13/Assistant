import { create } from "zustand";

//zustand stores & states

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  setUser: (user) => set({ user }),
  setUserAndToken: (user, token) => set({ user, token }),
  setLoading: (loading) => set({ loading }),
}));

export const useDetailsStore = create((set) => ({
  accounts: [],
  leads: [],
  campaignsInst: [],
  activeLearningPage: 0,
  playingVideo: null,
  campaigns: [],
  setCampaignsInst: (campaignsInst) => set({ campaignsInst }),
  setLeads: (leads) => set({ leads }),
  activeAccountId: localStorage.getItem("activeAccountId") || null,
  setAccounts: (accounts) => set({ accounts }),
  setActiveAccountId: (accountId) => set({ activeAccountId: accountId }),
  saveActiveAccountId: (accountId) =>
    localStorage.setItem("activeAccountId", accountId),
  getActiveAccountId: () => {
    return localStorage.getItem("activeAccountId");
  },
  handleSaveActiveAccountId: (accountId) => {
    set({ activeAccountId: accountId }),
      localStorage.setItem("activeAccountId", accountId);
  },
  setActiveLearningPage: (value) => {
    set({ activeLearningPage: value });
  },
  setplayingVideo: (link) => {
    set({ playingVideo: link });
  },
  setCampaigns: (value)=> {
    set({campaigns: value})
  }
}));
