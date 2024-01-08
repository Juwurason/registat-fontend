import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ClientDashboardPage = () => {
  return (
    <>
      <div className="bg-gray-100 font-publicsans h-[1025px] mx-auto relative w-full">
        <div className="bg-gray-100_01 flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between w-full">
              <Sidebar1 className="!sticky !w-[285px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
              <div className="flex flex-1 flex-col gap-[26px] items-center justify-start md:px-5 w-full">
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
                        <div className="absolute bg-deep_orange-600 flex flex-col h-[18px] items-start justify-start right-[0] rounded-[50%] top-[0] w-[18px]">
                          <Text
                            className="ml-0.5 md:ml-[0] text-[13px] text-center text-white-A700 uppercase"
                            size="txtPublicSansMedium13"
                          >
                            4
                          </Text>
                        </div>
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
                <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-start pl-2 py-2 rounded-tl-[10px] w-[98%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[94px] mt-[37px] w-full">
                    <div className="flex flex-col items-start justify-start ml-10 md:ml-[0] w-[31%] md:w-full">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.14px]"
                        size="txtUrbanistRomanSemiBold14"
                      >
                        Hello Geek{" "}
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-[9px] sm:text-3xl md:text-[32px] text-[34px] text-indigo-900 tracking-[-0.68px]"
                        size="txtDMSansBold34"
                      >
                        <span className="text-black-900 font-dmsans text-left font-bold">
                          Welcome to
                        </span>
                        <span className="text-indigo-900 font-dmsans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-teal-900 font-dmsans text-left font-bold">
                          Registat
                        </span>
                        <span className="text-indigo-900 font-dmsans text-left font-bold">
                          !
                        </span>
                      </Text>
                      <Button
                        className="border border-blue-A700 border-solid cursor-pointer flex items-center justify-center min-w-[155px] mt-[25px]"
                        leftIcon={
                          <Img
                            className="h-3 mt-px mb-0.5 mr-1"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        }
                        shape="round"
                        color="blue_A700"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="font-medium font-roboto text-left text-xs">
                          New Application
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-end mt-[69px] p-11 md:px-10 sm:px-5 rounded-[20px] w-[65%] md:w-full">
                      <Text
                        className="leading-[42.00px] sm:text-3xl md:text-[32px] text-[34px] text-indigo-900_01 tracking-[-0.68px] w-[49%] sm:w-full"
                        size="txtDMSansBold34Indigo90001"
                      >
                        Register Your Company Today
                      </Text>
                      <Text
                        className="leading-[28.00px] mt-[15px] text-base text-indigo-200 tracking-[-0.32px] w-[41%] sm:w-full"
                        size="txtDMSansMedium16Indigo200"
                      >
                        With Registat, we accept all type of payment ,you can
                        regrister your company international no matter your
                        location
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-end p-[11px] w-[27%] md:w-full"
                        style={{ backgroundImage: "url('images/img_cta.svg')" }}
                      >
                        <div className="flex flex-col items-center justify-start mt-[3px]">
                          <Text
                            className="text-center text-sm text-white-A700 tracking-[-0.28px]"
                            size="txtDMSansMedium14"
                          >
                            Pay Now
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-alata items-start justify-start ml-10 md:ml-[0] mt-[29px] w-[97%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.24px]"
                        size="txtAlataRegular24"
                      >
                        Application Process
                      </Text>
                      <div className="flex md:flex-col flex-row font-dmsans md:gap-10 items-start justify-between mt-1 w-full">
                        <div className="bg-white-A700 flex flex-col gap-2.5 justify-end mb-1.5 p-[15px] rounded-[20px] shadow-bs1">
                          <Text
                            className="md:ml-[0] ml-[7px] mr-[60px] mt-2.5 text-indigo-200 text-sm tracking-[-0.28px]"
                            size="txtDMSansMedium14Indigo200"
                          >
                            Create a New Application
                          </Text>
                          <Button
                            className="border border-blue-A700 border-solid cursor-pointer flex items-center justify-center min-w-[113px] md:ml-[0] ml-[13px] mr-[103px]"
                            leftIcon={
                              <Img
                                className="h-3 mt-px mb-0.5 mr-1"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="blue_A700"
                            size="xs"
                            variant="fill"
                          >
                            <div className="font-medium font-roboto text-left text-xs">
                              New Application
                            </div>
                          </Button>
                        </div>
                        <Input
                          name="smallnewclients"
                          placeholder="Fill in Company details"
                          className="!placeholder:text-indigo-200 !text-indigo-200 font-bold p-0 text-base text-left tracking-[-0.32px] w-full"
                          wrapClassName="flex md:flex-1 md:mt-0 my-[3px] rounded-[20px] shadow-bs1 md:w-full"
                          prefix={
                            <Img
                              className="mt-[11px] mb-auto h-7 mr-8"
                              src="images/img_icon.svg"
                              alt="Icon"
                            />
                          }
                          color="white_A700"
                          size="2xl"
                          variant="fill"
                        ></Input>
                        <div className="bg-white-A700 flex flex-col items-start justify-start md:mt-0 my-[3px] p-[17px] rounded-[20px] shadow-bs1">
                          <div className="flex flex-row gap-[18px] items-start justify-start my-[3px] w-[76%] md:w-full">
                            <div className="bg-gray-50_01 flex flex-col h-14 items-center justify-start p-[13px] rounded-[50%] w-14">
                              <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                                <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                                  <Img
                                    className="h-[30px] w-[30px]"
                                    src="images/img_iconpayment_teal_900.svg"
                                    alt="iconpayment_One"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-1">
                              <Text
                                className="text-indigo-200 text-sm tracking-[-0.28px]"
                                size="txtDMSansMedium14Indigo200"
                              >
                                Make Payment{" "}
                              </Text>
                              <Text
                                className="text-2xl md:text-[22px] text-indigo-900_01 sm:text-xl tracking-[-0.48px]"
                                size="txtDMSansBold24"
                              >
                                $350.40
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient1  flex flex-col items-end justify-end md:mt-0 mt-1.5 pl-4 py-4 rounded-[20px]">
                          <div className="flex flex-row gap-[11px] items-center justify-end mt-1.5 w-[98%] md:w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-indigo-50 tracking-[-0.32px]"
                                size="txtDMSansMedium16Indigo50"
                              >
                                Done{" "}
                              </Text>
                              <Text
                                className="mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                                size="txtDMSansBold24WhiteA700"
                              >
                                Registered{" "}
                              </Text>
                            </div>
                            <Img
                              className="h-[39px] md:h-auto object-cover"
                              src="images/img_chart.png"
                              alt="chart"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute font-inter md:h-[597px] h-[945px] inset-y-[0] my-auto pb-[243px] md:px-5 right-[0] w-[58%] md:w-full">
          <Img
            className="absolute h-[597px] object-cover right-[0] top-[0]"
            src="images/img_group2.png"
            alt="groupTwo"
          />
          <div className="absolute bottom-[26%] left-[0] overflow-x-auto w-[49%]">
            <div className="md:h-[404px] h-[408px] relative w-full">
              <Img
                className="absolute bottom-1/4 h-[135px] inset-x-[0] mx-auto object-cover w-[53%]"
                src="images/img_card1.png"
                alt="cardOne"
              />
              <Img
                className="absolute h-[170px] inset-y-[0] left-[14%] my-auto object-cover w-[69%]"
                src="images/img_card2.png"
                alt="cardTwo"
              />
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-center left-[0] my-auto p-[89px] md:px-10 sm:px-5 rotate-[-30deg] w-full"
                style={{ backgroundImage: "url('images/img_group3.png')" }}
              >
                <div className="flex flex-col items-center justify-start mb-[51px] mt-[47px] rotate-[30deg] w-[98%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-white-A700 text-xl tracking-[-0.60px]"
                          size="txtInterBold20"
                        >
                          mastercard
                        </Text>
                      </div>
                      <Img
                        className="h-[26px] mt-1"
                        src="images/img_user_red_a700.svg"
                        alt="user_One"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[35px]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtInterBold18"
                      >
                        7812 2139 0823 XXXX
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[34px] items-start justify-start mt-3.5 w-[41%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[7px] text-white-A700 tracking-[-0.21px]"
                          size="txtInterRegular7"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          05/24
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[7px] text-white-A700 tracking-[-0.21px]"
                          size="txtInterRegular7"
                        >
                          CVV{" "}
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          09X
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboardPage;
