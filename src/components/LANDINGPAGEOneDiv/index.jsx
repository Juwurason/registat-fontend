import React from "react";

import { Text } from "components";

const LANDINGPAGEOneDiv = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-start justify-between w-full">
          <div className="bg-white-A700 h-[389px] rounded-[194px] w-[1%]"></div>
          <div className="flex flex-col md:gap-10 gap-16 justify-start mt-3">
            {!!props?.registat ? (
              <Text
                className="text-[13px] text-white-A700_7f tracking-[1.04px] uppercase"
                size="txtInterSemiBold13"
              >
                {props?.registat}
              </Text>
            ) : null}
            <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] pb-[0.5px] md:pr-10 sm:pr-5 pr-[49.67px] w-auto">
              {props?.easyaffordable}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LANDINGPAGEOneDiv.defaultProps = {
  easyaffordable: (
    <Text
      className="leading-[47.00px] max-w-[266px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.42px]"
      size="txtInterExtraBold32"
    >
      <span className="text-white-A700 font-inter text-left font-extrabold">
        <>
          +<br />{" "}
        </>
      </span>
      <span className="text-white-A700 font-inter text-left font-extrabold">
        <>
          Ongoing <br />
          compliance <br />
          filing and deadline
          <br /> reminders
        </>
      </span>
      <span className="text-white-A700 font-inter text-left font-normal">
        .
      </span>
    </Text>
  ),
};

export default LANDINGPAGEOneDiv;
