import React from "react";

import { Img, Text } from "components";

const DropdownClicktochoose = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[282px] items-center justify-center outline outline-[1px] outline-gray-500_04 px-4 py-[11px] rounded w-auto sm:w-full">
          <Text
            className="text-base text-gray-500_04 w-auto"
            size="txtInterRegular16Gray50004"
          >
            {props?.chooseyourbank}
          </Text>
          <Img
            className="h-[23px] w-[23px]"
            src="images/img_arrowdown_gray_500_04.svg"
            alt="arrowup"
          />
        </div>
        <div className="bg-gray-50_07 flex flex-col items-start justify-start rounded-lg w-auto md:w-full">
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.accessbank}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.unitedbankfor}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.keystonebank}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.sterlingbank}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.zenithbank}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.unionbank}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.kudamicrofinamcOne}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pl-4 md:pr-10 sm:pr-5 pr-[110px] py-3 w-auto md:w-full">
            <Text
              className="text-base text-gray-500_04 w-auto"
              size="txtInterRegular16Gray50004"
            >
              {props?.firstbank}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DropdownClicktochoose.defaultProps = {
  chooseyourbank: "Choose your bank",
  accessbank: "Access Bank",
  unitedbankfor: "United Bank for Africa (UBA)",
  keystonebank: "Keystone Bank",
  sterlingbank: "Sterling Bank",
  zenithbank: "Zenith Bank",
  unionbank: "Union Bank",
  kudamicrofinamcOne: "Kuda Microfinamce Bank",
  firstbank: "First Bank",
};

export default DropdownClicktochoose;
