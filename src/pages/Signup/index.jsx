import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const SignupPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 font-sansserif h-[1073px] mx-auto p-32 md:px-10 sm:px-5 relative w-full">
        <Img
          className="absolute bottom-[28%] h-[375px] inset-x-[0] mx-auto object-cover"
          src="images/img_group3_375x475.png"
          alt="groupThree"
        />
        <div className="absolute bg-white-A700 flex flex-col gap-[21px] md:h-auto h-max inset-[0] items-start justify-center m-auto md:px-5 px-[37px] shadow-bs1 w-[459px] sm:w-full">
          <Img
            className="h-[34px] w-[152px]"
            src="images/img_layer1.svg"
            alt="layerOne"
          />
          <div className="flex flex-col font-urbanist items-center justify-start">
            <Text
              className="text-gray-900_03 text-xl tracking-[-0.20px]"
              size="txtUrbanistRomanBold20"
            >
              <span className="text-gray-900_03 font-sansserif text-left font-normal">
                Sign up for Dashboard Access{" "}
              </span>
              <span className="text-gray-900_03 font-urbanist text-left font-bold">
                ?
              </span>
              <span className="text-gray-900_03 font-urbanist text-left font-bold">
                ?
              </span>
            </Text>
          </div>
          <div className="flex flex-row font-dmmono gap-[21px] items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-[48%]">
              <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                <Text
                  className="text-[15px] text-teal-900 w-auto"
                  size="txtDMMonoMedium15"
                >
                  Firstname
                </Text>
                <Input
                  name="firstandlastnam"
                  placeholder="lola"
                  className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
                  wrapClassName="border border-gray-300_03 border-solid w-full"
                  shape="round"
                  color="gray_50_03"
                  size="lg"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
              <Text
                className="text-[15px] text-teal-900 w-auto"
                size="txtDMMonoMedium15"
              >
                Lastname
              </Text>
              <Input
                name="firstandlastnam_One"
                placeholder="Idan"
                className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
                wrapClassName="border border-gray-300_03 border-solid w-full"
                shape="round"
                color="gray_50_03"
                size="lg"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col font-dmmono gap-[11px] items-start justify-start w-[369px]">
            <Text
              className="text-[15px] text-teal-900 w-auto"
              size="txtDMMonoMedium15"
            >
              Email Address
            </Text>
            <Input
              name="firstandlastnam_Two"
              placeholder="Enter Password"
              className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
              wrapClassName="border border-gray-300_03 border-solid w-full"
              type="password"
              shape="round"
              color="gray_50_03"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col font-dmmono gap-[11px] items-start justify-start w-[369px]">
            <Text
              className="text-[15px] text-teal-900 w-auto"
              size="txtDMMonoMedium15"
            >
              Company Name
            </Text>
            <Input
              name="firstandlastnam_Three"
              placeholder="solat"
              className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
              wrapClassName="border border-gray-300_03 border-solid w-full"
              shape="round"
              color="gray_50_03"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col font-dmmono gap-[11px] items-start justify-start w-[369px]">
            <Text
              className="text-[15px] text-teal-900 w-auto"
              size="txtDMMonoMedium15"
            >
              Country
            </Text>
            <Input
              name="firstandlastnam_Four"
              placeholder="solat"
              className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
              wrapClassName="border border-gray-300_03 border-solid w-full"
              shape="round"
              color="gray_50_03"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col font-dmmono gap-[11px] items-start justify-start w-[369px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row gap-[134px] items-start justify-between w-auto">
                <Text
                  className="text-[15px] text-teal-900 w-auto"
                  size="txtDMMonoMedium15"
                >
                  Password
                </Text>
                <div className="flex flex-row font-sansserif gap-[11px] items-start justify-start w-auto">
                  <Img
                    className="h-[17px] w-[17px]"
                    src="images/img_icon_black_900.svg"
                    alt="icon"
                  />
                  <Text
                    className="text-[15px] text-black-900 text-right w-auto"
                    size="txtSansSerif15"
                  >
                    Hide
                  </Text>
                </div>
              </div>
            </div>
            <Input
              name="firstandlastnam_Five"
              placeholder="solat"
              className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
              wrapClassName="border border-gray-300_03 border-solid w-full"
              shape="round"
              color="gray_50_03"
              size="xl"
              variant="fill"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[351px]"
            onClick={() => googleSignIn()}
            leftIcon={
              <Img
                className="h-3.5 mr-[5px]"
                src="images/img_frame_white_a700.svg"
                alt="Frame"
              />
            }
            shape="square"
            color="teal_900"
            size="lg"
            variant="fill"
          >
            <div className="!text-gray-200 text-[13px] text-center">
              Sign In with Google
            </div>
          </Button>
          <div className="flex flex-col font-sansserif items-center justify-start w-auto">
            <Text
              className="text-[15px] text-gray-500_02 w-auto"
              size="txtSansSerif15Gray50002"
            >
              <span className="text-teal-900 font-sansserif text-left font-normal leading-[normal]">
                Already have an account?
              </span>
              <span className="text-gray-700_02 font-sansserif text-left font-normal leading-[normal]">
                {" "}
              </span>
              <a
                href="javascript:"
                className="text-amber-700 font-sansserif text-left font-normal leading-[normal] underline"
              >
                Log in{" "}
              </a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
