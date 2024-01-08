import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Img, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const DocumentPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-100_01 flex flex-col items-center justify-start w-full">
          <div className="flex md:px-5 relative w-full">
            <Sidebar11 className="!sticky !w-[285px] bg-white-A700 flex font-publicsans h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
            <div className="flex flex-col font-publicsans items-center justify-start ml-[undefinedpx] mt-3 w-4/5 z-[1]">
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
            <Text
              className="ml-[undefinedpx] mt-[451px] sm:text-[19.89px] md:text-[21.89px] text-[23.89px] text-black-900_05 z-[1]"
              size="txtManropeBold2389"
            >
              Upload Files
            </Text>
            <div className="flex md:flex-col flex-row font-manrope gap-[23px] items-center justify-between ml-[undefinedpx] mr-3 mt-[98px] w-[53%] z-[1]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[324px] items-center justify-start p-[23px] sm:px-5 rounded-[23px] w-[49%] md:w-full"
                style={{ backgroundImage: "url('images/img_group.svg')" }}
              >
                <div className="flex flex-col gap-3.5 items-center justify-start my-0.5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mt-[37px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900_05"
                        size="txtManropeBold215"
                      >
                        Excel.xls
                      </Text>
                      <div className="bg-black-900_05 flex flex-col h-10 items-center justify-end mb-[26px] rounded-[50%] w-10">
                        <Img
                          className="h-[38px] w-[38px]"
                          src="images/img_user_white_a700_38x38.svg"
                          alt="user_One"
                        />
                      </div>
                    </div>
                    <Text
                      className="text-[14.33px] text-gray-500_03"
                      size="txtManropeBold1433"
                    >
                      Edited 8m ago
                    </Text>
                  </div>
                  <div className="bg-white-A700_7f flex flex-col items-start justify-end p-4 rounded-[11px] shadow-bs3 w-full">
                    <Text
                      className="bg-teal-400_01 flex h-[45px] items-center justify-center ml-0.5 md:ml-[0] mt-0.5 rounded-[22px] text-[19.11px] text-center text-white-A700 w-[45px]"
                      size="txtManropeBold1911"
                    >
                      X
                    </Text>
                    <div className="bg-blue_gray-50 h-[13px] md:ml-[0] ml-[7px] mt-2.5 rounded-[3px] w-[95%]"></div>
                    <div className="bg-blue_gray-50 h-[13px] md:ml-[0] ml-[7px] mt-[5px] rounded-[3px] w-[95%]"></div>
                    <div className="bg-blue_gray-50 h-[13px] md:ml-[0] ml-[7px] mt-[5px] rounded-[3px] w-[95%]"></div>
                    <div className="bg-blue_gray-50 h-[13px] md:ml-[0] ml-[7px] mt-[5px] rounded-[3px] w-[95%]"></div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[324px] items-center justify-start p-[23px] sm:px-5 rounded-[23px] w-[49%] md:w-full"
                style={{ backgroundImage: "url('images/img_group.svg')" }}
              >
                <div className="flex flex-col items-start justify-start my-0.5 w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-[39px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900_05"
                      size="txtManropeBold215"
                    >
                      Pictures.png
                    </Text>
                    <div className="bg-black-900_05 flex flex-col h-10 items-center justify-end mb-[29px] rounded-[50%] w-10">
                      <Img
                        className="h-[38px] w-[38px]"
                        src="images/img_user_white_a700_38x38.svg"
                        alt="user_Two"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[5px] text-[14.33px] text-gray-500_03"
                    size="txtManropeBold1433"
                  >
                    Edited 8m ago
                  </Text>
                  <Img
                    className="h-[162px] mt-3.5"
                    src="images/img_frame_gray_100_02.svg"
                    alt="frame"
                  />
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-manrope h-[324px] items-center justify-start ml-[-12.15px] mt-[98px] p-[23px] sm:px-5 rounded-[23px] w-[26%] z-[1]"
              style={{ backgroundImage: "url('images/img_group.svg')" }}
            >
              <div className="flex flex-col gap-3.5 items-center justify-start my-0.5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-[37px] sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900_05"
                      size="txtManropeBold215"
                    >
                      Pdf.docx
                    </Text>
                    <div className="bg-black-900_05 flex flex-col h-10 items-center justify-end mb-[26px] rounded-[50%] w-10">
                      <Img
                        className="h-[38px] w-[38px]"
                        src="images/img_user_white_a700_38x38.svg"
                        alt="user_Three"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[14.33px] text-gray-500_03"
                    size="txtManropeBold1433"
                  >
                    Edited 8m ago
                  </Text>
                </div>
                <div className="bg-white-A700_7f flex flex-col gap-[11px] items-start justify-start p-[19px] rounded-[11px] shadow-bs3 w-full">
                  <Text
                    className="bg-deep_purple-400 flex h-[45px] items-center justify-center rounded-[22px] text-[19.11px] text-center text-white-A700 w-[45px]"
                    size="txtManropeBold1911"
                  >
                    W
                  </Text>
                  <div className="bg-blue_gray-50 h-[27px] ml-1 md:ml-[0] rounded-[3px] w-[97%]"></div>
                  <div className="bg-blue_gray-50 h-[27px] ml-1 md:ml-[0] rounded-[3px] w-[97%]"></div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col font-manrope items-center justify-center mb-[135px] ml-[-0.15px] mr-[27px] mt-auto md:px-10 sm:px-5 px-[410px] py-[119px] w-auto z-[1]">
              <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                <Img
                  className="h-[71px] w-[71px]"
                  src="images/img_close_deep_purple_50.svg"
                  alt="close"
                />
                <div className="flex flex-col gap-[5px] items-center justify-center w-auto">
                  <Text
                    className="sm:text-[17.5px] md:text-[19.5px] text-[21.5px] text-black-900_05 w-auto"
                    size="txtManropeBold215"
                  >
                    <span className="text-black-900_05 font-manrope text-left font-bold">
                      Drag and drop files, or{" "}
                    </span>
                    <span className="text-black-900_05 font-manrope text-left font-bold">
                      Browse
                    </span>
                  </Text>
                  <Text
                    className="text-[16.72px] text-gray-500_03 w-auto"
                    size="txtManropeBold1672"
                  >
                    Support only pdf , png and xls files
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentPage;
