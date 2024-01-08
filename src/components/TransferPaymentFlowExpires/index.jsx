import React from "react";

import { Text } from "components";

const TransferPaymentFlowExpires = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-gray-500_04"
          size="txtInterRegular16Gray50004"
        >
          {props?.expirationtext}
        </Text>
        <div className="flex flex-col items-start justify-start ml-[9px]">
          <Text
            className="text-base text-red-500"
            size="txtInterRegular16Red500"
          >
            {props?.time}
          </Text>
        </div>
        <Text
          className="ml-0.5 text-base text-gray-500_04"
          size="txtInterRegular16Gray50004"
        >
          {props?.minutestext}
        </Text>
      </div>
    </>
  );
};

TransferPaymentFlowExpires.defaultProps = {
  expirationtext: "Expires in ",
  time: "10:00",
  minutestext: "minutes",
};

export default TransferPaymentFlowExpires;
