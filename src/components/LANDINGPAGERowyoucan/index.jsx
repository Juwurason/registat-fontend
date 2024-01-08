import React from "react";

import { Text } from "components";

const LANDINGPAGERowyoucan = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center p-2.5 w-auto">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
            size="txtDMMonoMedium32"
          >
            {props?.youcantext}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-center p-2.5 w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-amber-700 w-auto"
            size="txtDMMonoMedium32Amber700"
          >
            {props?.registertext}
          </Text>
        </div>
      </div>
    </>
  );
};

LANDINGPAGERowyoucan.defaultProps = {
  youcantext: "You can",
  registertext: "Register your company ",
};

export default LANDINGPAGERowyoucan;
