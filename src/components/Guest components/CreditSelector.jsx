// import React from "react";
// import Select from "react-select";

// const CreditSelector = ({
//   productKey,
//   creditOptions,
//   handleCreditChange,
//   selectedCredits,
// }) => {
//   // Custom styles for the react-select component

//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       border: state.isFocused ? "1px solid #E1EAFD" : "1px solid #E1EAFD",
//       borderRadius: "0.375rem",
//       padding: "2px",
//       backgroundColor: "#010C1E",
//       boxShadow: "none",
//       cursor: "pointer",
//       "&:hover": {
//         borderColor: "#E1EAFD",
//       },
//     }),
//     menu: (provided) => ({
//       ...provided,
//       maxHeight: "600px",
//       overflowY: "auto",
//       backgroundColor: "#010C1E",
//       border: "1px solid #E1EAFD",
//     }),
//     menuList: (provided, state) => ({
//       ...provided,
//       maxHeight: "600px",
//       overflowY: "auto",
//       scrollbarWidth: "thin",
//       "::-webkit-scrollbar": {width: "6px"},
//       "::-webkit-scrollbar-thumb": {
//         backgroundColor: "#3F8EFF",
//         borderRadius: "3px",
//         fontSize: "15px",
//       },
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isFocused ? "#3F8EFF" : "#010C1E",
//       color: "white",
//       cursor: "pointer",
//       fontSize: "14px", // Reduced font size
//       padding: "6px 10px", // Reduced padding
//       margin: "2px 0", // Adjust spacing between options
//     }),
//     placeholder: (provided) => ({
//       ...provided,
//       color: "#A0AEC0",
//       fontSize: "16px", // Adjust placeholder font size
//     }),
//     singleValue: (provided) => ({
//       ...provided,
//       color: "white",
//       fontSize: "12px", // Adjust the font size of the selected value
//     }),
//     dropdownIndicator: (provided) => ({
//       ...provided,
//       color: "white",
//     }),
//     indicatorSeparator: () => ({
//       display: "none",
//     }),
//     clearIndicator: () => ({
//       display: "none",
//     }),
//   };

//   // Convert options dynamically based on productKey
//   const formattedOptions = creditOptions[productKey].map((option) => ({
//     value: option.credits,
//     // label: `${option.credits} - ${option.price} ( per credit)`,
//     label: `${option.credits} - ${option.price} (${option.rate})`,
//   }));

//   return (
//     <div className="text-center">
//       <Select
//         className=" "
//         styles={customStyles}
//         options={formattedOptions}
//         value={
//           selectedCredits[productKey]?.credits
//             ? {
//                 value: selectedCredits[productKey].credits,
//                 label: `${selectedCredits[productKey].credits} - ${selectedCredits[productKey].price}`,
//               }
//             : null
//         }
//         placeholder="Select amount"
//         onChange={(selectedOption) =>
//           handleCreditChange(productKey, selectedOption.value)
//         }
//         isSearchable={false} // Disable text input
//       />
//     </div>
//   );
// };

// export default CreditSelector;

import React from "react";
import Select from "react-select";

const CreditSelector = ({
  productKey,
  creditOptions,
  handleCreditChange,
  selectedCredits,
}) => {
  // Custom styles for the react-select component
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #E1EAFD" : "1px solid #E1EAFD",
      borderRadius: "0.375rem",
      padding: "2px",
      backgroundColor: "#010C1E",
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#E1EAFD",
      },
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "600px",
      overflowY: "auto",
      backgroundColor: "#010C1E",
      border: "1px solid #E1EAFD",
    }),
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: "600px",
      overflowY: "auto",
      scrollbarWidth: "thin",
      "::-webkit-scrollbar": {width: "6px"},
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#3F8EFF",
        borderRadius: "3px",
        fontSize: "15px",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3F8EFF" : "#010C1E",
      color: "white",
      cursor: "pointer",
      fontSize: "14px", // Reduced font size
      padding: "6px 10px", // Reduced padding
      margin: "2px 0", // Adjust spacing between options
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#A0AEC0",
      fontSize: "16px", // Adjust placeholder font size
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
      fontSize: "16px", // Adjust the font size of the selected value
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    clearIndicator: () => ({
      display: "none",
    }),
  };

  // Add a reset option to the top of the options list
  const formattedOptions = [
    {value: "", label: "Select"}, // Add reset option
    ...creditOptions[productKey].map((option) => ({
      value: option.credits,
      label: `${option.credits} - ${option.price} (${option.rate})`,
    })),
  ];

  const handleChange = (selectedOption) => {
    if (selectedOption.value === "") {
      // Handle reset (if "Select an option" is selected)
      handleCreditChange(productKey, null);
    } else {
      handleCreditChange(productKey, selectedOption.value);
    }
  };

  return (
    <div className="text-center">
      <Select
        className=" "
        styles={customStyles}
        options={formattedOptions}
        value={
          selectedCredits[productKey]?.credits
            ? {
                value: selectedCredits[productKey].credits,
                label: `${selectedCredits[productKey].credits} - ${selectedCredits[productKey].price}`,
              }
            : {value: "", label: "Select amount"} // Show reset option when no selection
        }
        placeholder="Select amount"
        onChange={handleChange}
        isSearchable={false} // Disable text input
      />
    </div>
  );
};

export default CreditSelector;
