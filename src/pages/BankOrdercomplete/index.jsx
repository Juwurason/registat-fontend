import React from "react";

import { Button, Img, Text } from "components";

const BankOrdercompletePage = () => {
  return (
    <>
      <div className="bg-gray-100_04 flex flex-col font-inter items-center justify-start mx-auto p-[162px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[29px] justify-start mb-[236px] pb-16 w-[51%] md:w-full">
          <div className="md:h-[300px] h-[319px] md:ml-[0] ml-[100px] relative w-[56%]">
            <div className="absolute h-[300px] inset-x-[0] mx-auto top-[0] w-[300px]">
              <Img
                className="h-[300px] m-auto object-cover w-[300px]"
                src="images/img_rectangle.png"
                alt="rectangle"
              />
              <Text
                className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[4%] w-max"
                size="txtInterRegular16"
              >
                Thank You For Your Purchase
              </Text>
            </div>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900_07 w-max"
              size="txtInterMedium30"
            >
              Transaction complete
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[563px] sm:min-w-full text-base text-center"
            shape="round"
            color="teal_900"
            size="lg"
            variant="fill"
          >
            Generate Receipt
          </Button>
        </div>
      </div>
    </>
  );
};

export default BankOrdercompletePage;
