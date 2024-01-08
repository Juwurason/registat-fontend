import React from "react";

import { Img, Input, SelectBox, Text } from "components";

const accessBankOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AccountNumberDetailsClicktochoose = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
          <SelectBox
            className="!text-gray-500_04 font-inter text-base text-left w-full"
            placeholderClassName="!text-gray-500_04"
            indicator={
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_gray_500_04.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="frame104"
            options={accessBankOptionsList}
            isSearchable={false}
            placeholder="Access Bank"
            shape="round"
            color="gray_500_04"
            size="xs"
            variant="outline"
          />
          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <Text
              className="text-black-900_07 text-lg w-auto"
              size="txtInterMedium18Black90007"
            >
              {props?.enteryourbank}
            </Text>
            <Input
              name="mobileNo"
              placeholder="0123456789"
              className="font-inter p-0 placeholder:text-gray-500_04 text-base text-left w-full"
              wrapClassName="rounded w-full"
              color="gray_500_04"
              size="md"
              variant="outline"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

AccountNumberDetailsClicktochoose.defaultProps = {
  enteryourbank: "Enter Your Bank Account Number",
};

export default AccountNumberDetailsClicktochoose;
