import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const NotificationTwelvePage = () => {
  return (
    <>
      <div className="bg-gray-100 font-publicsans h-[1024px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-start ml-[91px] md:px-5 w-[38px]">
          <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
            <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
              <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                <div className="h-[38px] relative w-[38px]">
                  <Img
                    className="h-[38px] m-auto rounded-[50%] w-[38px]"
                    src="images/img_backgroundcolor.png"
                    alt="backgroundcolor"
                  />
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col h-[11px] items-center justify-start right-[0] rounded-[5px] w-[11px]">
                    <div className="bg-light_green-A700 h-[7px] rounded-[3px] w-[7px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-end mx-auto w-full">
          <div className="bg-gray-100_01 flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between w-full">
                <Sidebar1 className="!sticky !w-[285px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
                <div className="flex flex-1 flex-col gap-7 justify-start md:mt-0 mt-3 md:px-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between p-2 rounded-lg w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-center ml-4 w-[12%]">
                        <Img
                          className="h-[17px] w-[17px]"
                          src="images/img_search_blue_gray_400.svg"
                          alt="search"
                        />
                        <Text
                          className="text-[15px] text-blue_gray-300"
                          size="txtPublicSansRegular15"
                        >
                          Search (Ctrl+/)
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start mb-2 mr-[34px] w-auto">
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                          <Img
                            className="h-6 md:h-auto object-cover w-6"
                            src="images/img_lr.png"
                            alt="lr"
                          />
                        </div>
                        <div className="h-7 md:h-[18px] relative w-[27px]">
                          <Img
                            className="absolute bottom-[0] h-[18px] left-[0]"
                            src="images/img_iconcolor.svg"
                            alt="iconcolor"
                          />
                          <Text
                            className="absolute bg-deep_orange-600 flex h-[18px] items-center justify-center right-[0] rounded-[50%] text-[13px] text-center text-white-A700 top-[0] uppercase w-[18px]"
                            size="txtPublicSansMedium13"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                          <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                            <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                              <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                                <div className="h-[38px] relative w-[38px]">
                                  <Img
                                    className="h-[38px] m-auto rounded-[50%] w-[38px]"
                                    src="images/img_backgroundcolor.png"
                                    alt="backgroundcolor_One"
                                  />
                                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col h-[11px] items-center justify-start right-[0] rounded-[5px] w-[11px]">
                                    <div className="bg-light_green-A700 h-[7px] rounded-[3px] w-[7px]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-roboto md:h-[1071px] h-[622px] sm:h-[631px] md:ml-[0] ml-[69px] relative w-[56%] md:w-full">
                    <Text
                      className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900 top-[0]"
                      size="txtRobotoSemiBold32"
                    >
                      Notifications
                    </Text>
                    <div className="absolute md:h-[1071px] h-[601px] sm:h-[631px] inset-[0] justify-center m-auto pt-[71px] w-full">
                      <div className="border-b border-gray-300_01 border-solid flex flex-col h-full items-end justify-start mt-[91px] mx-auto sm:pl-5 pl-[34px] py-[34px] w-full">
                        <Img
                          className="h-4 mb-1.5 w-4"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto">
                        <List
                          className="flex flex-col gap-[11px] items-center pt-[102px] w-full"
                          orientation="vertical"
                        >
                          <div className="border-b border-gray-300_01 border-solid flex flex-1 flex-col items-start justify-start w-full">
                            <div className="flex md:flex-col flex-row gap-3 items-start justify-start pr-4 py-4 w-[96%] md:w-full">
                              <Img
                                className="h-12 rounded-[50%] w-12"
                                src="images/img_clock_gray_300_01.svg"
                                alt="clock"
                              />
                              <div className="flex flex-col gap-3.5 items-start justify-center mb-[9px] md:pr-10 sm:pr-5 pr-[40.58px] w-auto sm:w-full">
                                <Text
                                  className="text-gray-600 text-sm w-auto"
                                  size="txtInterRegular14"
                                >
                                  Hey, can you check the latest documents posted
                                  in the document?
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600_01 w-auto"
                                  size="txtRobotoRegular13"
                                >
                                  November 1, 2023
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-gray-300_01 border-solid flex flex-1 md:flex-col flex-row gap-3 items-center justify-between w-full">
                            <div className="flex md:flex-col flex-row gap-3 items-start justify-start pr-4 py-4">
                              <Img
                                className="h-12 rounded-[50%] w-12"
                                src="images/img_clock_gray_300_01.svg"
                                alt="clock"
                              />
                              <div className="flex flex-col gap-3.5 items-start justify-center mb-[9px] md:pr-10 sm:pr-5 pr-[40.58px] w-auto sm:w-full">
                                <Text
                                  className="text-gray-600 text-sm w-auto"
                                  size="txtInterRegular14"
                                >
                                  Hey, can you check the latest documents posted
                                  in the document?
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600_01 w-auto"
                                  size="txtRobotoRegular13"
                                >
                                  November 1, 2023
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </div>
                          <div className="border-b border-gray-300_01 border-solid flex flex-1 md:flex-col flex-row gap-3 items-center justify-between w-full">
                            <div className="flex md:flex-col flex-row gap-3 items-start justify-start pr-4 py-4">
                              <Img
                                className="h-12 rounded-[50%] w-12"
                                src="images/img_clock_gray_300_01.svg"
                                alt="clock"
                              />
                              <div className="flex flex-col gap-3.5 items-start justify-center mb-[9px] md:pr-10 sm:pr-5 pr-[40.58px] w-auto sm:w-full">
                                <Text
                                  className="text-gray-600 text-sm w-auto"
                                  size="txtInterRegular14"
                                >
                                  Hey, can you check the latest documents posted
                                  in the document?
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600_01 w-auto"
                                  size="txtRobotoRegular13"
                                >
                                  November 1, 2023
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </div>
                          <div className="border-b border-gray-300_01 border-solid flex flex-1 md:flex-col flex-row gap-3 items-center justify-between w-full">
                            <div className="flex md:flex-col flex-row gap-3 items-start justify-start pr-4 py-4">
                              <Img
                                className="h-12 rounded-[50%] w-12"
                                src="images/img_clock_gray_300_01.svg"
                                alt="clock"
                              />
                              <div className="flex flex-col gap-3.5 items-start justify-center mb-[9px] md:pr-10 sm:pr-5 pr-[40.58px] w-auto sm:w-full">
                                <Text
                                  className="text-gray-600 text-sm w-auto"
                                  size="txtInterRegular14"
                                >
                                  Hey, can you check the latest documents posted
                                  in the document?
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600_01 w-auto"
                                  size="txtRobotoRegular13"
                                >
                                  November 1, 2023
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </div>
                          <div className="border-b border-gray-300_01 border-solid flex flex-1 md:flex-col flex-row gap-3 items-center justify-between w-full">
                            <div className="flex md:flex-col flex-row gap-3 items-start justify-start pr-4 py-4">
                              <Img
                                className="h-12 rounded-[50%] w-12"
                                src="images/img_clock_gray_300_01.svg"
                                alt="clock"
                              />
                              <div className="flex flex-col gap-3.5 items-start justify-center mb-[9px] md:pr-10 sm:pr-5 pr-[40.58px] w-auto sm:w-full">
                                <Text
                                  className="text-gray-600 text-sm w-auto"
                                  size="txtInterRegular14"
                                >
                                  Hey, can you check the latest documents posted
                                  in the document?
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600_01 w-auto"
                                  size="txtRobotoRegular13"
                                >
                                  November 1, 2023
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </div>
                          <div className="border-b border-gray-300_01 border-solid flex flex-1 md:flex-col flex-row gap-3 items-end justify-between w-full">
                            <div className="flex md:flex-col flex-row gap-3 items-start justify-start pr-4 pt-4">
                              <Img
                                className="h-1 rounded-sm"
                                src="images/img_avatar.svg"
                                alt="avatar"
                              />
                              <div className="flex flex-col gap-3.5 items-start justify-center md:pr-10 sm:pr-5 pr-[40.58px] w-auto sm:w-full">
                                <Text
                                  className="text-black-900 text-sm w-auto"
                                  size="txtInterBold14"
                                >
                                  Payment is due, head on to the billing page
                                  and make payment
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600_01 w-auto"
                                  size="txtRobotoRegular13"
                                >
                                  November 1, 2023
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-px md:mt-0 mt-[34px] w-4"
                              src="images/img_svg.svg"
                              alt="svg"
                            />
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-inter items-start justify-start md:ml-[0] ml-[291px] mr-7 md:px-5 rounded-[10px] w-[78%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[41%] md:w-full">
              <div className="bg-teal-900 h-[187px] w-[2%]"></div>
              <Img
                className="h-[78px] md:h-auto sm:ml-[0] ml-[34px] sm:mt-0 mt-11 rounded-[50%] w-[78px]"
                src="images/img_backgroundcolor_78x78.png"
                alt="backgroundcolor_Two"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start sm:ml-[0] ml-[26px] sm:mt-0 mt-[38px]">
                <Text
                  className="text-black-900 text-lg"
                  size="txtInterMedium18"
                >
                  Carmen Parksouth(Acc Manager)
                </Text>
                <Text className="text-gray-500 text-sm" size="txtInterLight14">
                  Document update
                </Text>
                <Text
                  className="text-gray-600 text-sm w-full"
                  size="txtInterRegular14"
                >
                  Hey, can you check the latest documents posted in the
                  document?
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationTwelvePage;
