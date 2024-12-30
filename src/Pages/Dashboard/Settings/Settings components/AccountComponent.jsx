// import React, {useState} from "react";
// import {RiInformation2Fill} from "react-icons/ri";
// import routericon from "../../../../assets/images/Wi-Fi Router.svg";
// import refreshicon from "../../../../assets/images/Refresh Square.svg";
// import trashicon from "../../../../assets/images/Trash Bin 2.svg";
// import ProxyModal from "./ProxyModal";

// const AccountComponent = ({name, username, status, img}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   const statusColor =
//     status === "Connected" ? "text-green-500" : "text-red-500";
//   const statusBgStyle = {
//     backgroundColor: status === "Connected" ? "#319F4380" : "#E3362980", // custom green or red background
//   };

//   return (
//     <div className="border border-white rounded-lg flex justify-between items-center lg:justify-start lg:gap-10  py-3 md:py-6 px-2 md:px-4">
//       <div className="flex gap-3 items-center">
//         <img
//           src={img}
//           alt={name}
//           className="rounded-full w-8 md:w-8 h-8 md:h-8 object-cover"
//         />
//         <div>
//           <p className="font-extrabold text-xs md:font-xs ">{name}</p>
//           <p className="text-xs md:xs">{username}</p>
//         </div>
//       </div>
//       <div className="flex flex-col lg:flex-row gap-4 md:gap-2 items-center ">
//         <div
//           className={`inline-flex items-center  p-1  text-xs md:px-4 lg:px-1 lg:rounded-md rounded-full`}
//           style={statusBgStyle}
//         >
//           <p className={`p-[2px]  rounded ${statusColor}  text-[8px]`}>
//             {status}
//           </p>
//         </div>
//         <div className="flex gap-6 md:gap-3">
//           <div className="w-4 h-4">
//             <img
//               src={routericon}
//               alt="Router Icon"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="w-4 h-4" onClick={openModal}>
//             <img
//               src={refreshicon}
//               alt="Refresh Icon"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="w-4 h-4">
//             <img
//               src={trashicon}
//               alt="Trash Icon"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Render Proxy Modal */}
//       <ProxyModal isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default AccountComponent;

import React, {useState} from "react";
import routericon from "../../../../assets/images/Wi-Fi Router.svg";
import refreshicon from "../../../../assets/images/Refresh Square.svg";
import trashicon from "../../../../assets/images/Trash Bin 2.svg";
import ProxyModal from "./ProxyModal";
import RemoveAccountModal from "./ReconnectAccountModal";
import DeleteAccountModal from "./DeleteAccountModal";

const AccountComponent = ({name, username, status, img}) => {
  const [isProxyModalOpen, setIsProxyModalOpen] = useState(false);
  const [isRemoveAccountModalOpen, setIsRemoveAccountModalOpen] =
    useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);

  const openProxyModal = () => setIsProxyModalOpen(true);
  const closeProxyModal = () => setIsProxyModalOpen(false);

  const openRemoveAccountModal = () => setIsRemoveAccountModalOpen(true);
  const closeRemoveAccountModal = () => setIsRemoveAccountModalOpen(false);

  const openDeleteModal = () => setIsDeleteAccountModalOpen(true);
  const closeDeleteModal = () => setIsDeleteAccountModalOpen(false);
  const statusColor =
    status === "Connected" ? "text-green-500" : "text-red-500";
  const statusBgStyle = {
    backgroundColor: status === "Connected" ? "#319F4380" : "#E3362980", // custom green or red background
  };

  return (
    <div className="border border-white rounded-lg flex justify-between items-center lg:justify-start lg:gap-10 py-3 md:py-6 px-2 md:px-4">
      <div className="flex gap-3 items-center">
        <img
          src={img}
          alt={name}
          className="rounded-full w-8 md:w-8 h-8 md:h-8 object-cover"
        />
        <div>
          <p className="font-extrabold text-xs md:font-xs">{name}</p>
          <p className="text-xs md:xs">{username}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-2 items-center">
        <div
          className={`inline-flex items-center p-1 text-xs md:px-4 lg:px-1 lg:rounded-md rounded-full`}
          style={statusBgStyle}
        >
          <p className={`p-[2px] rounded ${statusColor} text-[8px]`}>
            {status}
          </p>
        </div>
        <div className="flex gap-6 md:gap-3">
          <div className="w-4 h-4 " onClick={openProxyModal}>
            <img
              src={routericon}
              alt="Router Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-4 h-4" onClick={openRemoveAccountModal}>
            <img
              src={refreshicon}
              alt="Refresh Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-4 h-4" onClick={openDeleteModal}>
            <img
              src={trashicon}
              alt="Trash Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <ProxyModal isOpen={isProxyModalOpen} onClose={closeProxyModal} />
      <RemoveAccountModal
        isOpen={isRemoveAccountModalOpen}
        onClose={closeRemoveAccountModal}
      />
      <DeleteAccountModal
        isOpen={isDeleteAccountModalOpen}
        onClose={closeDeleteModal}
      />
    </div>
  );
};

export default AccountComponent;
