import React from "react";

import { Img, Text } from "components";

const PricingColumnstartyourbusineOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start w-auto md:w-full">
          <div className="flex flex-row gap-2 items-center justify-between w-auto">
            <Text
              className="text-base text-teal-900 tracking-[0.28px] w-auto"
              size="txtDMSansRegular16Teal900"
            >
              {props?.startyourbusinesstext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
            <Text
              className="text-base text-teal-900 tracking-[0.28px] w-auto"
              size="txtDMSansRegular16Teal900"
            >
              {props?.scaleuptext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowdown_One"
            />
          </div>
          <Text
            className="text-base text-teal-900 tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Teal900"
          >
            {props?.pricingtext}
          </Text>
          <Text
            className="text-base text-teal-900 tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Teal900"
          >
            {props?.resourcestext}
          </Text>
          <Text
            className="text-amber-700 text-base tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Amber700"
          >
            {props?.aboutustext}
          </Text>
        </div>
      </div>
    </>
  );
};

PricingColumnstartyourbusineOne.defaultProps = {
  startyourbusinesstext: "Start your business",
  scaleuptext: "Scale up",
  pricingtext: "Pricing ",
  resourcestext: "Resources",
  aboutustext: "About us",
};

export default PricingColumnstartyourbusineOne;
