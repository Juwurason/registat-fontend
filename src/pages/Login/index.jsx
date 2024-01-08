import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const LoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 font-sansserif h-[1073px] mx-auto p-[183px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="absolute bottom-[28%] h-[375px] inset-x-[0] mx-auto object-cover"
          src="images/img_group3_375x475.png"
          alt="groupThree"
        />
        <div className="absolute bg-white-A700 flex flex-col gap-[21px] h-[651px] md:h-auto inset-x-[0] items-start justify-center mx-auto md:px-5 px-[37px] shadow-bs1 top-[17%] w-[457px] sm:w-full">
          <Img
            className="h-[34px] w-[152px]"
            src="images/img_layer1.svg"
            alt="layerOne"
          />
          <div className="flex flex-col font-dmmono items-center justify-start w-[92%] md:w-full">
            <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
              <Text
                className="text-[15px] text-teal-900 w-auto"
                size="txtDMMonoMedium15"
              >
                Email Address
              </Text>
              <Input
                name="firstandlastnam"
                placeholder="e.g divineikubor@gmail.com"
                className="font-medium p-0 placeholder:text-gray-400 text-[10px] text-left w-full"
                wrapClassName="border border-gray-300_03 border-solid w-full"
                shape="round"
                color="gray_50_03"
                size="lg"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col font-dmmono gap-[11px] items-start justify-start w-[351px]">
            <Text
              className="text-[15px] text-teal-900 w-auto"
              size="txtDMMonoMedium15"
            >
              Password
            </Text>
            <Input
              name="firstandlastnam_One"
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
          <div className="flex flex-row font-sansserif gap-[164px] items-start justify-start w-auto">
            <CheckBox
              className="text-[11px] text-left"
              inputClassName="h-3.5 mr-[5px] rounded w-3.5"
              name="rememberme"
              id="rememberme"
              label="Remember me"
              color="blue_gray_900_01"
              size="xs"
            ></CheckBox>
            <a
              href="javascript:"
              className="text-[11px] text-deep_orange-400_01 w-auto"
            >
              <Text size="txtSansSerif11">Forgot password</Text>
            </a>
          </div>
          <Button
            className="cursor-pointer h-[45px] rounded-[5px] text-[13px] text-center w-[351px]"
            shape="round"
            color="teal_900"
            size="lg"
            variant="fill"
          >
            Sign In
          </Button>
          <div className="flex flex-row font-sansserif gap-3 items-center justify-start w-auto">
            <Line className="bg-blue_gray-900_01 h-px w-[33%]" />
            <a
              href="javascript:"
              className="text-[11px] text-center text-gray-500_02 w-auto"
            >
              <Text size="txtSansSerif11Gray50002">or continue with</Text>
            </a>
            <Line className="bg-blue_gray-900_01 h-px w-[38%]" />
          </div>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[351px]"
            onClick={() => googleSignIn()}
            leftIcon={
              <Img
                className="h-3.5 mb-0.5 mr-[5px]"
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
          <div className="flex flex-row font-sansserif gap-[5px] items-center justify-start w-auto">
            <a
              href="javascript:"
              className="text-[11px] text-gray-500_02 w-auto"
            >
              <Text size="txtSansSerif11Gray50002">Don’t have an account?</Text>
            </a>
            <a href="javascript:" className="text-[11px] text-amber-700 w-auto">
              <Text size="txtSansSerif11Amber700">Sign up</Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
