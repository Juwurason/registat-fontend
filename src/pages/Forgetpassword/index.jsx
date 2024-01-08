import React from "react";

import { Button, Img, Input, Text } from "components";

const ForgetpasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-sansserif h-[1073px] mx-auto p-[238px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="absolute bottom-[28%] h-[375px] inset-x-[0] mx-auto object-cover"
          src="images/img_group3_375x475.png"
          alt="groupThree"
        />
        <div className="absolute bg-white-A700 bottom-[22%] flex flex-col gap-[21px] h-[517px] md:h-auto inset-x-[0] items-start justify-center mx-auto pl-[55px] pr-[38px] md:px-5 shadow-bs1 w-[502px] sm:w-full">
          <Img
            className="h-[34px] w-[152px]"
            src="images/img_layer1.svg"
            alt="layerOne"
          />
          <div className="flex flex-col gap-[17px] items-start justify-start">
            <Text
              className="text-gray-900_03 text-xl tracking-[-0.20px]"
              size="txtSansSerif20"
            >
              Forget password?
            </Text>
            <Text
              className="leading-[130.00%] text-[15px] text-gray-900_03 tracking-[-0.15px] w-full"
              size="txtSansSerif15Gray90003"
            >
              <span className="text-gray-900_03 font-sansserif text-left font-normal">
                Type the email you used to sign up on Registat and a{" "}
              </span>
              <span className="text-gray-900_03 font-sansserif text-left font-bold">
                RESET
              </span>
              <span className="text-gray-900_03 font-sansserif text-left font-normal">
                {" "}
                link will be send to your email
              </span>
            </Text>
          </div>
          <div className="flex flex-col font-dmmono gap-[11px] items-start justify-start w-[369px]">
            <Text
              className="text-[15px] text-teal-900 w-auto"
              size="txtDMMonoMedium15"
            >
              Email
            </Text>
            <Input
              name="firstandlastnam"
              placeholder="Enter Email Address"
              className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
              wrapClassName="border border-gray-300_03 border-solid w-full"
              type="email"
              shape="round"
              color="gray_50_03"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <Button
            className="!text-gray-200 cursor-pointer h-[45px] text-[13px] text-center w-[369px]"
            shape="square"
            color="teal_900"
            size="lg"
            variant="fill"
          >
            Send Link{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ForgetpasswordPage;
