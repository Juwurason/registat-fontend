import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const PdfdocxPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <div className="bg-gray-100_01 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between w-full">
              <Sidebar11 className="!sticky !w-[285px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
              <div className="flex flex-1 flex-col gap-[26px] items-center justify-start md:mt-0 mt-3 md:px-5 w-full">
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
                    </div>
                  </div>
                </div>
                <div className="font-lato sm:h-[253px] h-[258px] md:h-[491px] relative w-[99%] md:w-full">
                  <div className="absolute bg-gray-50_04 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[23px] w-[97%]">
                    <div className="flex flex-col gap-12 items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[83%] md:w-full">
                      <div className="flex flex-col gap-11 justify-start w-full">
                        <div className="flex flex-row sm:gap-10 gap-[626px] items-start justify-start w-[88%] md:w-full">
                          <div className="flex flex-row gap-[7.17px] items-center justify-start mb-[3px] w-[59px]">
                            <Text
                              className="text-[16.72px] text-center text-gray-500_03 w-auto"
                              size="txtLatoMedium1672"
                            >
                              Name
                            </Text>
                            <Img
                              className="h-[17px] w-2"
                              src="images/img_user_gray_500_03.svg"
                              alt="user_One"
                            />
                          </div>
                          <div className="flex flex-row gap-[7.17px] items-center justify-start mt-[3px] w-[76px]">
                            <Text
                              className="text-[16.72px] text-center text-gray-500_03 w-auto"
                              size="txtLatoMedium1672"
                            >
                              Date
                            </Text>
                            <Img
                              className="h-[17px] w-2"
                              src="images/img_user_gray_500_03.svg"
                              alt="user_Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[99%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Button
                              className="flex items-center justify-center rounded-[9px] w-[46px]"
                              color="white_A700_b2"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                src="images/img_user_teal_400_01.svg"
                                alt="user_Three"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[19px] md:mt-0 mt-[18px] text-[16.72px] text-black-900_05"
                              size="txtLatoMedium1672Black90005"
                            >
                              comapny letter head
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[463px] md:mt-0 mt-[18px] text-[16.72px] text-black-900_05"
                              size="txtLatoRegular1672"
                            >
                              Dec 13, 2022
                            </Text>
                            <Img
                              className="h-[17px] md:ml-[0] ml-[75px] md:mt-0 mt-[15px]"
                              src="images/img_group_gray_500_03.svg"
                              alt="group"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Button
                            className="flex items-center justify-center rounded-[9px] w-[46px]"
                            color="white_A700_b2"
                            size="sm"
                            variant="fill"
                          >
                            <Img src="images/img_folder.svg" alt="folder" />
                          </Button>
                          <Text
                            className="md:ml-[0] ml-[19px] md:mt-0 mt-[7px] text-[16.72px] text-black-900_05"
                            size="txtLatoMedium1672Black90005"
                          >
                            logo
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[579px] md:mt-0 mt-[7px] text-[16.72px] text-black-900_05"
                            size="txtLatoRegular1672"
                          >
                            Dec 12, 2022
                          </Text>
                          <Img
                            className="h-[17px] md:ml-[0] ml-[79px] md:mt-0 mt-1.5"
                            src="images/img_group_gray_500_03.svg"
                            alt="group_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-gray-200_01 h-px inset-x-[0] mx-auto top-[27%] w-[98%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfdocxPage;
