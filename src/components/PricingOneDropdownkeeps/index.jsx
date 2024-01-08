import React from "react";

import { Img, SelectBox, Text } from "components";

const cOuntryOfIncorporationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PricingOneDropdownkeeps = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="!text-black-900 font-medium font-poppins h-14 leading-[normal] text-left text-sm uppercase w-full"
          placeholderClassName="!text-black-900"
          indicator={
            <Img
              className="h-6 w-6"
              src="images/img_ictwotonearrowdropdown_black_900.svg"
              alt="ic:twotone-arrow-drop-down"
            />
          }
          isMulti={false}
          name="groupThirteen"
          options={cOuntryOfIncorporationOptionsList}
          isSearchable={false}
          placeholder="COuntry of incorporation"
          shape="square"
          color="light_blue_A700"
          size="sm"
          variant="outline"
        />
        <div className="border-b border-solid border-x deep_purple_A700_cyan_700_border4 flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option1}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option2}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option3}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option4}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option5}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option6}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option7}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option8}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option9}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <Text
              className="text-base text-black-900 w-auto"
              size="txtRobotoRomanRegular16"
            >
              {props?.option10}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

PricingOneDropdownkeeps.defaultProps = {
  option1: "Nigeria",
  option2: "Delaware",
  option3: "Wyoming",
  option4: "USA",
  option5: "Kenya",
  option6: "British Virgin Islands (BVI)",
  option7: "Belize",
  option8: "Estonia",
  option9: "Lichtenstein",
  option10: "Turkey",
};

export default PricingOneDropdownkeeps;
