// import React, {useState} from "react";
// import AccountComponent from "./Settings components/AccountComponent";
// import defaultImage from "../../../assets/images/sarah smith.svg";
// import {Link} from "react-router-dom";
// import {useDetailsStore} from "../../../AuthStore/GlobalStates";
// import ConnectAccountModal from "./Settings components/ConnectAcountModal";

// const SettingsAccount = ({proxyState}) => {
//   const {accounts} = useDetailsStore(); // Assuming `accounts` comes from your global state
//   console.log(accounts);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <section className="lg:mt-10 border-t-[1px] rounded-t-lg rounded-lg px-6 border-l-[1px] lg:px-12 py-4 lg:py-8 text-white auth-bg md:max-h-[90vh] md:min-h-[90vh] overflow-scroll scrollbar-hide lg:pb-20 md-w-full mt-14 md:mt-0">
//       <div className="flex justify-between items-center pb-3">
//         <h4 className="text-text text-[20px] md:text-[20px] font-bold">
//           Accounts
//         </h4>
//         {/* <Link
//           to={"/dashboard/settings/profile-edit"}
//           className="bg-secondary p-[6px] lg:py-2 px-3 lg:px-5 rounded text-white text-xs lg:text-[14px]"
//         >
//           Add Account
//         </Link> */}
//         <button
//           onClick={openModal}
//           className="bg-secondary p-[6px] lg:py-2 px-3 lg:px-5 rounded text-white text-xs lg:text-[14px]"
//         >
//           Add Account
//         </button>
//       </div>
//       <div className="border border-white rounded-lg bg-setting_profile_bg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//         {accounts.map((account) => (
//           <AccountComponent
//             key={account.id}
//             status={account.deleted_at ? "Disconnected" : "Connected"}
//             img={account.pfp || defaultImage} // Fallback to default image if pfp is not available
//             name={account.name}
//             username={`@${account.username}`}
//           />
//         ))}
//       </div>
//       {/* Render the modal */}
//       <ConnectAccountModal isOpen={isModalOpen} onClose={closeModal} />
//     </section>
//   );
// };

// export default SettingsAccount;

import React, {useState} from "react";
import AccountComponent from "./Settings components/AccountComponent";
import defaultImage from "../../../assets/images/sarah smith.svg";
import {useDetailsStore} from "../../../AuthStore/GlobalStates";
import ConnectAccountModal from "./Settings components/ConnectAcountModal";

const SettingsAccount = ({proxyState}) => {
  const {accounts} = useDetailsStore(); // Assuming `accounts` comes from your global state
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const openConnectModal = () => setIsConnectModalOpen(true);
  const closeConnectModal = () => setIsConnectModalOpen(false);

  return (
    <section className="lg:px-8  text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-14 md:mt-0">
      <div className="flex justify-between items-center pb-3">
        <h4 className="text-text text-[20px] md:text-[20px] font-bold">
          Accounts
        </h4>
        <button
          onClick={openConnectModal}
          className="bg-secondary p-[6px] lg:py-2 px-3 lg:px-5 rounded text-white text-xs lg:text-[14px]"
        >
          Add Account
        </button>
      </div>
      <div className="border border-white rounded-lg bg-setting_profile_bg p-4">
        {accounts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {accounts.map((account) => (
              <AccountComponent
                key={account.id}
                status={account.deleted_at ? "Disconnected" : "Connected"}
                img={account.pfp || defaultImage} // Fallback to default image if pfp is not available
                name={account.name}
                username={`@${account.username}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm">
            Nothing to show. Please add an account.
          </p>
        )}
      </div>
      <ConnectAccountModal
        isOpen={isConnectModalOpen}
        onClose={closeConnectModal}
      />
    </section>
  );
};

export default SettingsAccount;
