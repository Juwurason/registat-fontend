import React from "react";

import { Button, Img, Text } from "components";

const LANDINGPAGENavbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[34px] w-[152px]"
          src="images/img_layer1.svg"
          alt="layerOne"
        />
        <div className="flex flex-col items-center justify-center p-2.5 w-auto">
          <Text
            className="text-base text-black-900_7f tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Black9007f"
          >
            {props?.startbutton}
          </Text>
        </div>
        <div className="flex flex-row gap-[39px] h-[38px] md:h-auto items-center justify-center p-2.5 w-auto">
          <Text
            className="text-base text-black-900_7f tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Black9007f"
          >
            {props?.scalebutton}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_black_900.svg"
            alt="arrowdown"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-2.5 w-auto">
          <Text
            className="text-base text-black-900_7f tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Black9007f"
          >
            {props?.pricingbutton}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center p-2.5 w-auto">
          <Text
            className="text-base text-black-900_7f tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Black9007f"
          >
            {props?.resourcesbutton}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center p-2.5 w-auto">
          <Text
            className="text-base text-black-900_7f tracking-[0.28px] w-auto"
            size="txtDMSansRegular16Black9007f"
          >
            {props?.abouttext}
          </Text>
        </div>
        <div className="flex flex-row gap-[35px] items-start justify-start w-[312px]">
          <Button
            className="!text-black-900_02 bg-transparent cursor-pointer font-medium font-poppins h-[45px] leading-[normal] rounded-[10px] text-center text-sm uppercase w-full"
            size="md"
            variant="outline"
            color="deep_purple_A700_cyan_700"
          >
            {props?.startnowbutton}
          </Button>
          <Button
            className="!text-black-900 cursor-pointer font-medium font-poppins h-[45px] leading-[normal] rounded-[10px] text-center text-sm uppercase w-full"
            color="amber_700_01"
            size="md"
            variant="fill"
          >
            {props?.signinbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

LANDINGPAGENavbar.defaultProps = {
  startbutton: "Start your business",
  scalebutton: "Scale up",
  pricingbutton: "Pricing",
  resourcesbutton: "Resources",
  abouttext: "About us ",
  startnowbutton: "Start now",
  signinbutton: "Sign in",
};

export default LANDINGPAGENavbar;
