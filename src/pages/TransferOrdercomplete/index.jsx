import React from "react";

import { Button, Img, Text } from "components";

const TransferOrdercompletePage = () => {
  return (
    <>
      <div className="bg-gray-100_04 font-inter h-[1024px] mx-auto p-[156px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute flex flex-col gap-12 inset-x-[0] justify-start mx-auto pb-16 top-[16%] w-[39%]">
          <div className="h-[300px] md:ml-[0] ml-[95px] relative w-[57%]">
            <Img
              className="absolute h-[300px] inset-y-[0] left-[0] my-auto object-cover w-[300px]"
              src="images/img_rectangle.png"
              alt="rectangle"
            />
            <Text
              className="absolute bottom-[1%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900_07 w-max"
              size="txtInterMedium30"
            >
              Transaction complete
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[560px] sm:min-w-full text-base text-center"
            shape="round"
            color="teal_900"
            size="lg"
            variant="fill"
          >
            Generate Invoice
          </Button>
        </div>
        <Text
          className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[15%] w-max"
          size="txtInterRegular16"
        >
          Thank You For Your Purchase
        </Text>
      </div>
    </>
  );
};

export default TransferOrdercompletePage;
