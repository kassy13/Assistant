import React from "react";

const GradientCard = ({title, description, imageSrc, containerStyles}) => {
  return (
    <div
      className={`relative p-[1px] rounded-2xl bg-gradient-card ${containerStyles}`}
    >
      <div className="bg-[#091324] rounded-2xl w-full h-full flex flex-col items-center justify-center p-4 py-8 px-6 lg:min-h-80 lg:max-h-96 ">
        <div className="w-24 h-24">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-text text-center lg:min-h-32 lg:max-h-36 xxxl:max-h-48 pt-4">
          <h3 className="font-semibold text-2xl md:text-[32px] lg:text-2xl xxxl:text-3xl pb-4">
            {title}
          </h3>
          <p className="text-base md:text-2xl lg:text-[14px] lg:leading-[1.6]  text-text xl:text-[16.6px] xxxl:text-[20px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
