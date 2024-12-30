import React, {useState} from "react";
import image1 from "../../assets/images/guest img/Add Account.svg";
import image2 from "../../assets/images/guest img/AI DM.svg";
import image3 from "../../assets/images/guest img/AI Post.svg";
import image4 from "../../assets/images/guest img/AI Reply.svg";
import Button from "./Button";

const AddOns = () => {
  const [products, setProducts] = useState([
    {
      name: "Additional Accounts Seat(s)",
      description:
        "This allows you to add more accounts to your NetworkX profile. This is a one-time cost.",
      price: 10,
      quantity: 0,
      image: image1,
      title: "Additional Accounts Seat(s)",
    },
    {
      name: "Customized Prompts for AI Posts, Written by Experts",
      description:
        "This includes a 15min call with our team to understand what you need. We will send in a screen recording of the call to one of our experts and send your custom prompt within 3 business days.",
      price: 49,
      quantity: 0,
      image: image2,
      title: "Customized Prompts for AI Posts, Written by Experts",
    },
    {
      name: "Customized Prompts for AI replies, Written by Experts",
      description:
        "This includes a 15min call with our team to understand what you need. We will send in a screen recording of the call to one of our experts and send your custom prompt within 3 business days.",
      price: 49,
      quantity: 0,
      image: image3,
      title: "Customized Prompts for AI replies, Written by Experts",
    },
    {
      name: "Customized Prompts for AI DMs, Written by Experts",
      description:
        "This includes a 15min call with our team to understand what you need. We will send in a screen recording of the call to one of our experts and send your custom prompt within 3 business days.",
      price: 49,
      quantity: 0,
      image: image4,
      title: "Customized Prompts for AI DMs, Written by Experts",
    },
  ]);

  const handleQuantityChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity =
      value === "" ? "" : parseInt(value, 10) || 0;
    setProducts(updatedProducts);
  };

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className=" text-white lg:p-8 rounded-lg shadow-lg lg:mx-14 mb-12 ">
      <h2 className="text-[22px] lg:text-3xl xxxl:text-4xl font-semibold text-center mb-6 text-text pt-4 lg:pt-0">
        Add Ons
      </h2>
      <p className="text-center text-base xxxl:text-base  text-bold mb-2">
        Optimize your accounts and unlock new possibilities with our premium
        add-ons.
      </p>
      <div className="border rounded-lg lg:mt-4 border-dim lg:pb-4">
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <div className="pl-3 rounded-xl lg:p-4 border-[#2b2f3c]">
            <div className="lg:flex gap-4 border border-dim rounded-lg mb-3 bg-[#010C1E]    hidden lg:pr-8">
              <div className="font-bold text-lg xxxl:text-2xl text-white py-4 pl-6 rounded-tl-xl -translate-x-2">
                Product
              </div>
              <div className="flex px-12 w-full">
                <div className="font-bold text-lg xxxl:text-2xl text-white py-4 w-full lg:-translate-x-2  ">
                  Description
                </div>
                <div className="font-bold text-lg xxxl:text-2xl text-white py-4 ">
                  Price
                </div>
              </div>
              <div className="font-bold text-lg xxxl:text-2xl text-white py-4 ">
                Quantity
              </div>
              {/* <div></div>
              <div></div>
              <div></div> */}
            </div>

            {/* Table Body */}
            {products.map((product, index) => (
              <React.Fragment key={index}>
                <div className="lg:grid lg:grid-cols-[auto,4fr,auto,auto,auto] xxxl:grid-cols-[auto,3fr,auto,auto,auto] lg:gap-12 flex flex-col items-center justify-center py-2 px-6 border rounded-xl mb-3 border-[#2b2f3c] overflow-x-auto last-of-type:mb-0 ">
                  <div className="flex items-center my-2 lg:my-1 -translate-x-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-15 rounded-md object-contain"
                    />
                  </div>
                  <div className="flex flex-col w-full xxxl:translate-x-6">
                    <h3 className="text-[17px] xxxl:text-xl font-bold text-center lg:text-left">
                      {product.title}
                    </h3>
                    <p className="text-[13px] xxxl:text-lg  xxl:w-[85%]  ">
                      {product.description}
                    </p>
                  </div>
                  <div className="w-full text-center xxxl:-translate-x-1 lg:translate-x-3">
                    <span className="font-bold text-lg  ">
                      ${product.price}
                    </span>
                  </div>
                  <div></div>
                  <div className="flex pt-3 lg:pt-0 gap-3 items-center ">
                    <input
                      type="number"
                      placeholder="Amount"
                      // min="0"
                      value={
                        product.quantity === 0 && product.quantity !== ""
                          ? "Amount"
                          : product.quantity
                      }
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                      className="w-16 border-[1px] border lg:w-[75px] xxxl:w-[100px] lg:text-sm px-1 p-[2px] py-1 text-white rounded-md bg-setting_profile_bg text-xs "
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Total and Checkout */}
        <div className="text-center flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mx-2 lg:mx-6 mac:mx-8 xxl:mx-12  ml-2 mr-2 my-3 ">
          {/* <p className="text-lg font-bold">Total:</p> */}

          {/* <button className=" bg-secondary text-white px-20 py-2 rounded-md hover:bg-opacity-85 text-sm transition duration-300 ease-in-out font-bold  lg:translate-x-36">
            Pay ${total.toFixed(2)}
          </button> */}
          <Button
            text={` Pay ${total.toFixed(2)}`}
            style={"lg:w-40 text-center flex justify-center lg:translate-x-36"}
          />
          <p className="font-bold text-sm md:text-base">
            This transaction is a one-time fee
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
