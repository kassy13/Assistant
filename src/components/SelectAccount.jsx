import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDetailsStore } from "../AuthStore/GlobalStates";

const SelectAccount = ({ selectMenu, setSelectMenu, style, messageSelect, widthCustom }) => {
  const { handleSaveActiveAccountId, activeAccountId, accounts } = useDetailsStore();

  const activeAccount = accounts.find(
    (account) => account.x_id === activeAccountId
  );

  const saveSelAcct =(id)=>{
    handleSaveActiveAccountId(id)
    setSelectMenu(false)
  }
 
  return (
    <div className="">
      <div className="flex max-w-[400px]_ w-full flex-col items-start justify-start relative">
        <button
          type="button"
          onClick={() => setSelectMenu(!selectMenu)}
          className={`outline-none p-2 px-4 bg-[#091324] w-full border border-dim flex items-center justify-between text-sm rounded-lg hover:bg-opacity-25 ${messageSelect}`}
        >
          {activeAccountId && (
            <span className="flex items-center">
              <img src={activeAccount?.pfp} className="mr-2 rounded-full h-[20px] w-[20px]" />
              <p className="font-semibold">{activeAccount?.name}</p>
            </span>
          )}
          {accounts.length > 0 && !activeAccountId && "Select an account"}
          {accounts.length < 1 && <p className="mx-auto">No Added Accounts</p>}
          {accounts.length > 0 && (selectMenu ? (
            <FaChevronUp className="ml-2" />
          ) : (
            <FaChevronDown className="ml-2" />
          ))}
        </button>
      </div>
      {selectMenu && accounts.length > 0 && (
        <div className={`absolute right-0 top-8 max-w-[250px]- w-full z-[99] ${style}`}>
          <div className="p-4 rounded-lg mt-1 bg-[#091324]">
            {accounts.map((account) => (
              <div
                key={account.id}
                onClick={()=>{saveSelAcct(account.x_id)}}
              >
                <button
                  disabled={account.x_id === activeAccountId}
                  className={`${
                    account.x_id === activeAccountId && "text-[#1D9BF0]"
                  } flex items-center p-1 disabled:opacity-90 hover:opacity-75`}
                >
                  <img src={account.pfp} className={`rounded-full h-[22px] w-[22px] ${widthCustom}`} />
                  <p className="text-xs mx-1 font-semibold">@{account.name}</p>
                </button>
                <hr className="w-full h-[1px] border-none my-1 bg-dim" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectAccount;
