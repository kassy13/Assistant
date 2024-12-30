import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ScrollContext from "./store/ScrollContext";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import LoaderSm from "./components/UI/LoaderSm";
import LearningLayout from "./Pages/Dashboard/Learning/LearningLayout";
import ContentDisplay from "./Pages/Dashboard/Learning/ContentDisplay";
import DmAutomationLayout from "./Pages/Dashboard/DmAutomationLayout";
import LeadsSequence from "./Pages/Dashboard/Leads/LeadsSequence";
import Layout from "./Pages/Dashboard/Campaigns/Layout";
import SmartContentLayout from "./Pages/Dashboard/SmartContentLayout";
import ReplierLayout from "./Pages/Dashboard/SmartContent/AI Replier/Layout";
import PosterLayout from "./Pages/Dashboard/SmartContent/Ai Poster/Layout";
import GrowthToolsLayout from "./Pages/Dashboard/GrowthToolsLayout";
import FollowLayout from "./Pages/Dashboard/GrowthTools/FollowTool/Layout";
import PosterDashboard from "./Pages/Dashboard/SmartContent/Ai Poster/Dashboard";
import Campaigns from "./Pages/Dashboard/Campaigns/Campaigns";
import CampaignsSmartContent from "./Pages/Dashboard/SmartContent/Campaigns";
import SettingsLayout from "./Pages/Dashboard/Settings/SettingsLayout";
import SettingsAccount from "./Pages/Dashboard/Settings/SettingsAccount";
import Profile from "./Pages/Dashboard/Settings/Profile";
import EditProfile from "./Pages/Dashboard/Settings/EditProfile";
import Security from "./Pages/Dashboard/Settings/Security";
import NotificationSettings from "./Pages/Dashboard/Settings/NotificationSettings";
import Affiliates from "./Pages/Dashboard/Settings/Affiliates";
import FreeCredits from "./Pages/Dashboard/Settings/Freecredits";
import GlobalBlockList from "./Pages/Dashboard/Settings/GlobalBlockList";
import Policy from "./Pages/Dashboard/Settings/Policy";
import Index from "./components/Guest components/Index";
import AffiliatePolicy from "./Pages/Dashboard/Settings/Policies/AffiliatePolicy";
import PrivacyPolicy from "./Pages/Dashboard/Settings/Policies/PrivacyPolicy";
import DataProcessing from "./Pages/Dashboard/Settings/Policies/DataProcessing";
import FairUsePolicy from "./Pages/Dashboard/Settings/Policies/FairUsePolicy";
import FulfilmentPolicy from "./Pages/Dashboard/Settings/Policies/FulfilmentPolicy";
import TermsService from "./Pages/Dashboard/Settings/Policies/TermsService";
import Affiliate from "./components/Guest components/Footer policy/Affiliate";
import DPA from "./components/Guest components/Footer policy/DPA";
import FairUse from "./components/Guest components/Footer policy/FairUse";
import Fullfilment from "./components/Guest components/Footer policy/Fullfilment";
import Privacy from "./components/Guest components/Footer policy/Privacy";
import Terms from "./components/Guest components/Footer policy/Terms";
import {Children} from "react";
import ScrollToTop from "./components/Guest components/Footer policy/ScrollToTop";

const DashboardLayout = lazy(() => import("./Pages/Dashboard/DashboardLayout"));
const SignIn = lazy(() => import("./Pages/Auth/SignIn"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const FindLeads = lazy(() => import("./Pages/Dashboard/Leads/FindLeads"));
const Message = lazy(() => import("./Pages/Dashboard/Message"));
const Campaign = lazy(() => import("./Pages/Dashboard/Campaign"));
const CampaignSetup = lazy(() => import("./Pages/Dashboard/CampaignSetup"));
const TrialPage = lazy(() => import("./Pages/TrialPage"));

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Index />,
    },

    {
      path: "/",
      element: (
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      ),
      children: [
        {path: "affiliates-policy", element: <Affiliate />},
        {path: "dpa", element: <DPA />},
        {path: "fair-use", element: <FairUse />},
        {path: "fullfilment", element: <Fullfilment />},
        {path: "policy", element: <Privacy />},
        {path: "terms", element: <Terms />},
      ],
    },
    {
      path: "signIn",
      element: (
        <Suspense fallback={<LoaderSm />}>
          <SignIn />
        </Suspense>
      ),
    },
    {
      path: "signUp",
      element: (
        <Suspense fallback={<LoaderSm />}>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "dm-automation",
          element: (
            <Suspense fallback={<LoaderSm />}>
              <DmAutomationLayout />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<LoaderSm />}>
                  <Dashboard />
                </Suspense>
              ),
            },
            {
              path: "messages",
              element: (
                <Suspense fallback={<LoaderSm />}>
                  <Message />
                </Suspense>
              ),
            },
            {
              path: "leads",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<LoaderSm />}>
                      <FindLeads />
                    </Suspense>
                  ),
                },
                {path: "find-leads", element: <LeadsSequence />},
              ],
            },
            {
              path: "campaign",
              children: [
                {index: true, element: <Campaigns />},
                {
                  path: "create",
                  element: (
                    <Suspense fallback={<LoaderSm />}>
                      <Layout />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "campaigns",
          element: <Campaign />,
        },
        {
          path: "learning",
          element: (
            <Suspense fallback={<LoaderSm />}>
              <LearningLayout />
            </Suspense>
          ),
          children: [{index: true, element: <ContentDisplay />}],
        },
        {
          path: "pricing",
          element: (
            <Suspense fallback={<LoaderSm />}>
              <TrialPage />
            </Suspense>
          ),
        },
        {
          path: "smart-content",
          element: <SmartContentLayout />,
          children: [
            {index: true, element: <PosterDashboard />},
            {path: "campaigns", element: <CampaignsSmartContent />},
            {path: "ai-replier", element: <ReplierLayout />},
            {path: "ai-poster", element: <PosterLayout />},
          ],
        },
        {
          path: "growth-tools",
          element: <GrowthToolsLayout />,
          children: [{index: true, element: <FollowLayout />}],
        },
        {
          path: "settings",
          element: <SettingsLayout />, // Settings layout as the primary layout
          children: [
            {index: true, element: <Profile />}, // Default route for /dashboard/settings
            {
              path: "profile",
              element: <Profile />,
            }, // Profile page
            {
              path: "profile-edit", // New subpage path
              element: <EditProfile />, // EditProfile component
            },
            {
              path: "accounts",

              element: (
                <Suspense fallback={<LoaderSm />}>
                  <SettingsAccount />,
                </Suspense>
              ),
            },
            {
              path: "security",
              element: <Security />,
            },
            {
              path: "notifications",
              element: <NotificationSettings />,
            },
            {
              path: "affiliates",
              element: <Affiliates />,
            },
            {
              path: "free-credits",
              element: <FreeCredits />,
            },
            {
              path: "global-block-list",
              element: <GlobalBlockList />,
            },
            {
              path: "policy",
              element: <Policy />,
            },
            {
              path: "policy/affiliate-policies",
              element: <AffiliatePolicy />,
            },
            {
              path: "policy/data-processing-agreement",
              element: <DataProcessing />,
            },
            {
              path: "policy/fair-use-policy",
              element: <FairUsePolicy />,
            },
            {
              path: "policy/fulfilment-policy",
              element: <FulfilmentPolicy />,
            },
            {
              path: "policy/privacy-policy",
              element: <PrivacyPolicy />,
            },
            {
              path: "policy/terms-of-service",
              element: <TermsService />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <ScrollContext>
      <RouterProvider router={routes} />
      <TawkMessengerReact
        propertyId="66beb2690cca4f8a7a768f9d"
        widgetId="1i5cehr16"
      />
    </ScrollContext>
  );
}

export default App;
