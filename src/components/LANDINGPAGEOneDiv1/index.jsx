import React from "react";

import { Text } from "components";

const LANDINGPAGEOneDiv1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 h-[402px] inset-[0] justify-center m-auto rounded-[201px] w-full"></div>
        <div className="absolute flex flex-col md:gap-10 gap-16 inset-x-[0] justify-start mx-auto top-[6%] w-[84%]">
          <Text
            className="text-[13px] text-black-900 tracking-[1.04px] uppercase"
            size="txtInterSemiBold13Black900"
          >
            {props?.registattext}
          </Text>
          <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] pb-[0.5px] md:pr-10 sm:pr-5 pr-[49.67px] w-auto">
            {props?.dashboardtext}
          </div>
        </div>
      </div>
    </>
  );
};

LANDINGPAGEOneDiv1.defaultProps = {
  registattext: "registat",
  dashboardtext: (
    <Text
      className="leading-[47.00px] max-w-[214px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-1.42px]"
      size="txtInterExtraBold32Black900"
    >
      <span className="text-black-900 font-inter text-left font-extrabold">
        +{" "}
      </span>
      <span className="text-black-900 font-inter text-left font-extrabold">
        <>
          Easy-to-use <br />
          Interactive
          <br />
          dashboard
        </>
      </span>
      <span className="text-black-900 font-inter text-left font-extrabold">
        .
      </span>
    </Text>
  ),
};

export default LANDINGPAGEOneDiv1;
