import React from "react";

import { Img, Line, Text } from "components";

const PricingDropdownkeeps = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-solid deep_purple_A700_cyan_700_border2 flex flex-col h-14 md:h-auto items-center justify-start p-4 rounded-[10px] w-full">
          <div className="flex flex-col gap-4 justify-start w-full">
            <div className="flex flex-row items-center justify-between ml-4 md:ml-[0] w-[85%] md:w-full">
              <Text
                className="text-amber-700 text-sm uppercase w-auto"
                size="txtPoppinsMedium14Amber700"
              >
                {props?.countryofincorporation}
              </Text>
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_ictwotonearrowdropdown.png"
                alt="ictwotonearrowd"
              />
            </div>
            <Line className="bg-white-A700 border-b border-solid border-x deep_purple_A700_cyan_700_border3 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

PricingDropdownkeeps.defaultProps = {
  countryofincorporation: "COuntry of incorporation",
};

export default PricingDropdownkeeps;
