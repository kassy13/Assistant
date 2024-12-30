import React, {useState} from "react";
import axios from "axios";
import {Switch} from "@headlessui/react";
import {useAuthStore} from "../../../AuthStore/GlobalStates";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationSettings = () => {
  const {token} = useAuthStore();
  const [settings, setSettings] = useState({
    major_software_updates_email: false,
    major_software_updates_sms: false,
    additional_user_login_email: false,
    additional_user_login_sms: false,
    account_disconnected_email: false,
    account_disconnected_sms: false,
    safe_daily_limit_reached_email: false,
    safe_daily_limit_reached_sms: false,
    daily_posting_limit_reached_email: false,
    daily_posting_limit_reached_sms: false,
    campaign_completed_email: false,
    campaign_completed_sms: false,
    low_credits_email: false,
    low_credits_sms: false,
    out_of_credits_email: false,
    out_of_credits_sms: false,
    invite_link_signup_email: false,
    invite_link_signup_sms: false,
    commission_payout_eligibility_email: false,
    commission_payout_eligibility_sms: false,
  });

  const handleToggle = async (key) => {
    const updatedSettings = {
      ...settings,
      [key]: !settings[key],
    };
    setSettings(updatedSettings);

    console.log("key", key);
    const formatKey = (key) => {
      return key
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letters
    };

    try {
      await axios.put(
        "https://api.networkx.ai/api/v1/update-notification-settings",
        updatedSettings,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(
        `${formatKey(key)} Notification settings updated successfully.`
      );
    } catch (error) {
      toast.error("Failed to update notification settings. Try again.");
    }
  };

  const renderSwitch = (label, emailKey, smsKey) => (
    <div className="grid grid-cols-6 border rounded-lg p-3 lg:mb-6 border-gray-600">
      <p className="col-span-4 lg:col-span-5 text-sm lg:text-base text-text">
        {label}
      </p>
      <div className="col-span-2 lg:col-span-1 pl-2 lg:gap-12 gap-7 flex items-center">
        {/* Email Toggle */}
        <Switch
          checked={settings[emailKey]}
          onChange={() => handleToggle(emailKey)}
          className={`${
            settings[emailKey] ? "bg-gray-300" : "bg-green-500"
          } relative z-0 inline-flex items-center h-3 w-7 md:h-4 md:w-9 rounded-xl`}
        >
          <span
            className={`${
              settings[emailKey] ? "translate-x-5" : "translate-x-0"
            }inline-block w-3 h-3 md:w-4 md:h-4 transform bg-white rounded-full transition`}
          />
        </Switch>

        {/* SMS Toggle */}
        <Switch
          checked={settings[smsKey]}
          onChange={() => handleToggle(smsKey)}
          className={`${
            settings[smsKey] ? "bg-green-500" : "bg-gray-300"
          } relative inline-flex items-center h-3 w-7 md:h-4 md:w-9 rounded-xl`}
        >
          <span
            className={`${
              settings[smsKey] ? "translate-x-5" : "translate-x-0"
            } inline-block w-3 h-3 md:w-4 md:h-4 transform bg-white rounded-full transition`}
          />
        </Switch>
      </div>
    </div>
  );

  return (
    <section className="lg:px-8 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Notification Settings
      </h2>
      <p className="mb-6 text-center text-text">
        Manage your notification preferences to control how and when you receive
        updates, alerts, and reminders.
      </p>
      <div className="rounded-lg lg:p-5 pt-8 gap-4">
        {/* Individual Notification Toggles */}
        <div className="border border-white rounded-lg bg-setting_profile_bg p-5 gap-4">
          <div className="grid grid-cols-6 mb-6">
            <p className="font-semibold col-span-4 lg:col-span-5">
              Notifications
            </p>

            <div className="col-span-2 lg:col-span-1 lg:gap-12 gap-6 flex">
              <p>Email</p>
              <p>SMS</p>
            </div>
          </div>

          {renderSwitch(
            "Notification for any major software updates",
            "major_software_updates_email",
            "major_software_updates_sms"
          )}
          {renderSwitch(
            "Notification when an additional user logs into your account",
            "additional_user_login_email",
            "additional_user_login_sms"
          )}
          {renderSwitch(
            "Notification when an account gets disconnected",
            "account_disconnected_email",
            "account_disconnected_sms"
          )}
          {renderSwitch(
            "Notification when the safe daily limit for direct messages has been reached",
            "safe_daily_limit_reached_email",
            "safe_daily_limit_reached_sms"
          )}
          {renderSwitch(
            "Notification when the safe daily limit for posting has been reached",
            "daily_posting_limit_reached_email",
            "daily_posting_limit_reached_sms"
          )}
          {renderSwitch(
            "Notification when a campaign is complete",
            "campaign_completed_email",
            "campaign_completed_sms"
          )}
          {renderSwitch(
            "Notification when you have only 10% of your credits remaining",
            "low_credits_email",
            "low_credits_sms"
          )}
          {renderSwitch(
            "Notification when you run out of credits",
            "out_of_credits_email",
            "out_of_credits_sms"
          )}
          {renderSwitch(
            "Notification when someone signs up with your invite link",
            "invite_link_signup_email",
            "invite_link_signup_sms"
          )}
          {renderSwitch(
            "Notification when you are eligible for a commission payout",
            "commission_payout_eligibility_email",
            "commission_payout_eligibility_sms"
          )}
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default NotificationSettings;
