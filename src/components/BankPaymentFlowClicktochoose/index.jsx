import React from "react";

import { Button, Img, Text } from "components";

const BankPaymentFlowClicktochoose = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[476px] sm:min-w-full"
          rightIcon={
            <Img
              className="h-6 ml-[35px]"
              src="images/img_arrowdown_gray_500_04.svg"
              alt="arrow_down"
            />
          }
          shape="round"
          color="gray_500_04"
          size="sm"
          variant="outline"
        >
          <div className="!text-gray-500_04 font-inter text-base text-left">
            {props?.dynamictext}
          </div>
        </Button>
        <div className="flex flex-col gap-[23px] items-start justify-start w-auto md:w-full">
          <Button
            className="!text-gray-100_04 cursor-pointer font-bold font-inter text-base text-center w-[476px]"
            shape="round"
            color="teal_900"
            size="lg"
            variant="fill"
          >
            {props?.payusd59twentyeight}
          </Button>
          <Text
            className="leading-[22.00px] max-w-[475px] md:max-w-full text-gray-500_04 text-sm"
            size="txtInterRegular14Gray50004"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

BankPaymentFlowClicktochoose.defaultProps = {
  dynamictext: "Choose your bank",
  payusd59twentyeight: "Pay USD59.28",
  description:
    "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.",
};

export default BankPaymentFlowClicktochoose;
