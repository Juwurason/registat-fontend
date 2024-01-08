import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import LANDINGPAGEColumn0d66745877d6ffour from "components/LANDINGPAGEColumn0d66745877d6ffour";
import LANDINGPAGENavbar from "components/LANDINGPAGENavbar";
import LANDINGPAGEOneDiv from "components/LANDINGPAGEOneDiv";
import LANDINGPAGEOneDiv1 from "components/LANDINGPAGEOneDiv1";
import LANDINGPAGERowyoucan from "components/LANDINGPAGERowyoucan";

const LANDINGPAGEOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[65px] items-end justify-end mx-auto pt-[53px] w-full">
        <div className="flex md:flex-col flex-row gap-[39px] items-start justify-end md:px-5 w-[96%] md:w-full">
          <div className="flex flex-col font-dmmono gap-[21px] items-start justify-start w-[95%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start md:ml-[0] ml-[9px] w-full">
              <div className="flex font-dmsans h-[45px] md:h-[533px] justify-end relative w-full">
                <Button
                  className="flex h-5 items-center justify-center mb-0.5 ml-auto mr-[88px] mt-auto rounded-[50%] w-5"
                  color="teal_500"
                  size="3xl"
                  variant="fill"
                >
                  <Img src="images/img_frame_black_900.svg" alt="frame" />
                </Button>
                <LANDINGPAGENavbar className="absolute flex md:flex-col flex-row gap-[42px] h-full inset-[0] items-center justify-between m-auto w-auto" />
              </div>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[51%] sm:w-full"
                size="txtDMMonoMedium48"
              >
                Register your business across borders
              </Text>
            </div>
            <LANDINGPAGERowyoucan className="flex md:flex-col flex-row md:gap-5 items-center justify-start sm:pr-5 pr-[21px] w-[72%] md:w-full" />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] w-[89%] md:w-full">
              <Text
                className="text-[15px] text-black-900 w-[52%] sm:w-full"
                size="txtPoppinsMedium15"
              >
                Establishing a new company in Africa, US, BVI, UK and filing
                your trademark just got easier.
              </Text>
              <Button
                className="cursor-pointer font-poppins md:ml-[0] ml-[5px] mt-[61px] rounded-lg shadow-bs2 text-center text-sm w-40"
                color="amber_700"
                size="lg"
                variant="fill"
              >
                Get Started
              </Button>
              <Text
                className="leading-[50.00px] md:ml-[0] ml-[165px] mt-32 sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-[83%] sm:w-full"
                size="txtRubikMedium35"
              >
                Your One-Stop shop for International Company Incorporation and
                Trademark Registration
              </Text>
              <Img
                className="h-[537px] md:ml-[0] ml-[93px] mt-[91px]"
                src="images/img_hugeglobal.svg"
                alt="hugeglobal"
              />
              <div className="flex flex-col font-poppins items-center justify-center md:ml-[0] ml-[5px] mt-[60px] w-auto sm:w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                  <Text
                    className="text-[22px] text-deep_orange-500 sm:text-lg md:text-xl w-[131px]"
                    size="txtPoppinsRegular22"
                  >
                    What we do
                  </Text>
                  <Text
                    className="leading-[60.00px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                    size="txtPoppinsSemiBold35"
                  >
                    <>
                      Ready to take your <br />
                      business to the next level?
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-poppins h-[93px] leading-[normal] mb-[1258px] min-w-[37px] md:mt-0 mt-[311px] text-[11px] text-center"
            shape="square"
            color="black_900"
            size="lg"
            variant="fill"
          >
            Feedback
          </Button>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-end w-full">
            <div className="sm:h-[3172px] h-[3174px] md:h-[5252px] md:px-5 relative w-full">
              <div className="flex flex-col h-full items-start justify-start ml-[76px] w-[22%]">
                <div className="bg-orange-50 flex flex-col h-[100px] items-center justify-start p-[31px] sm:px-5 rounded-[10px] w-[100px]">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_settings_amber_900.svg"
                    alt="settings"
                  />
                </div>
                <Text
                  className="mt-8 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900_02"
                  size="txtPoppinsSemiBold25"
                >
                  Start Your Business
                </Text>
                <Text
                  className="leading-[24.00px] mt-7 text-base text-black-900 w-full"
                  size="txtMulishRegular16"
                >
                  Launch your business with confidence as our expert team
                  simplifies the process from entity selection to successful
                  execution.
                </Text>
                <div className="flex flex-row font-poppins gap-[11px] items-center justify-center mt-[52px] w-auto">
                  <a
                    href="javascript:"
                    className="text-black-900 text-sm w-auto"
                  >
                    <Text size="txtPoppinsMedium14">Learn more</Text>
                  </a>
                  <Img
                    className="h-6 w-6"
                    src="images/img_rightarrow18.svg"
                    alt="rightarrowEighteen"
                  />
                </div>
              </div>
              <div className="absolute sm:h-[3172px] h-[3174px] md:h-[5252px] inset-[0] justify-center m-auto w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[510px] w-[55%] md:w-full">
                          <div className="flex flex-col gap-[5px] justify-start w-[41%] md:w-full">
                            <div className="bg-green-50 flex flex-col h-[100px] items-center justify-start ml-3 md:ml-[0] mr-[202px] p-[29px] sm:px-5 rounded-[10px] w-[100px]">
                              <Img
                                className="h-[41px] w-[41px]"
                                src="images/img_claritybanksolid.svg"
                                alt="claritybanksoli"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900_02"
                                size="txtPoppinsSemiBold25"
                              >
                                Bank account opening
                              </Text>
                              <Text
                                className="leading-[24.00px] md:ml-[0] ml-[5px] mt-[13px] text-base text-black-900 w-[99%] sm:w-full"
                                size="txtMulishRegular16"
                              >
                                Open a bank account hassle-free with our
                                guidance, making the process simple and
                                efficient, ensuring your financial transactions
                                run smoothly.
                              </Text>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[155px] mt-[54px] rounded-[25px]"
                                rightIcon={
                                  <Img
                                    className="h-6 ml-[11px]"
                                    src="images/img_rightarrow_18_1.svg"
                                    alt="right-arrow (18) 1"
                                  />
                                }
                                color="green_800"
                                size="lg"
                                variant="fill"
                              >
                                <div className="font-medium font-poppins text-left text-sm">
                                  Learn more
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[43%] md:w-full">
                            <div className="bg-yellow-50 flex flex-col h-[100px] items-center justify-start ml-0.5 md:ml-[0] p-[29px] sm:px-5 rounded-[10px] w-[100px]">
                              <Img
                                className="h-[41px] w-[41px]"
                                src="images/img_rating1.svg"
                                alt="ratingOne"
                              />
                            </div>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-[35px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900_02"
                              size="txtPoppinsSemiBold25"
                            >
                              Regrister your Trademark{" "}
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-[13px] text-base text-black-900 w-[95%] sm:w-full"
                              size="txtMulishRegular16"
                            >
                              <>
                                Safeguard your brand&#39;s identity and
                                uniqueness by registering your trademark with
                                our expert guidance, protecting your
                                intellectual property rights.
                              </>
                            </Text>
                            <div className="flex flex-row font-poppins gap-[11px] items-center justify-center md:ml-[0] ml-[3px] mt-[29px] w-auto">
                              <a
                                href="javascript:"
                                className="text-black-900 text-sm w-auto"
                              >
                                <Text size="txtPoppinsMedium14">
                                  Learn more
                                </Text>
                              </a>
                              <Img
                                className="h-6 w-6"
                                src="images/img_rightarrow18.svg"
                                alt="rightarrowEighteen_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:gap-10 gap-[79px] justify-start md:ml-[0] ml-[65px] mt-[43px] w-[23%] md:w-full">
                          <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] w-[99%] md:w-full">
                            <div className="bg-green-50 flex flex-col h-[100px] items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-[100px]">
                              <Img
                                className="h-10 w-10"
                                src="images/img_discount21.svg"
                                alt="discountTwentyOne"
                              />
                            </div>
                            <Text
                              className="mt-[37px] sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                              size="txtMontserratRomanBold21Black900"
                            >
                              Tax, audit & compliance
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-[23px] text-base text-black-900 w-full"
                              size="txtMulishRegular16"
                            >
                              <>
                                Stay on top of your business&#39;s tax, audit,
                                and compliance requirements with our
                                comprehensive services, ensuring seamless
                                financial adherence and peace of mind.
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[155px] mr-40 rounded-[25px]"
                            rightIcon={
                              <Img
                                className="h-6 ml-[11px]"
                                src="images/img_rightarrow_18_1.svg"
                                alt="right-arrow (18) 1"
                              />
                            }
                            color="green_800"
                            size="lg"
                            variant="fill"
                          >
                            <div className="font-medium text-left text-sm">
                              Learn more
                            </div>
                          </Button>
                        </div>
                        <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mt-[195px] pb-[50px] md:px-10 sm:px-5 px-[50px] w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[118px] w-[99%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-[184px] items-start justify-start md:mt-0 mt-[137px] w-auto sm:w-full">
                              <Text
                                className="leading-[109.00px] max-w-[444px] md:max-w-full md:text-5xl text-8xl text-gray-900_01"
                                size="txtRubikMedium96"
                              >
                                Why Choose Registat{" "}
                              </Text>
                              <div className="flex flex-col font-poppins md:gap-10 gap-[72px] items-start justify-end w-auto sm:w-full">
                                <Text
                                  className="leading-[30.00px] max-w-[386px] md:max-w-full text-base text-blue_gray-700_01"
                                  size="txtPoppinsRegular16"
                                >
                                  You can explore the features that we provide
                                  with fun and have their own functions each
                                  feature.
                                </Text>
                                <div className="bg-amber-700 flex flex-col font-inter h-[59px] md:h-auto items-center justify-center sm:px-5 px-8 py-4 rounded-[16px] w-[212px]">
                                  <Text
                                    className="text-black-900 text-lg w-auto"
                                    size="txtInterMedium18"
                                  >
                                    Get started
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-inter md:gap-10 gap-[101px] items-center justify-start md:ml-[0] ml-[51px] md:mt-0 mt-[55px] w-1/4 md:w-full">
                              <LANDINGPAGEOneDiv
                                className="bg-gray-900_02 flex flex-col items-center justify-start pt-[13px] rounded-[20px] w-full"
                                easyaffordable={
                                  <Text className="font-extrabold leading-[47.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.42px]">
                                    <span className="text-white-A700 font-inter text-left">
                                      <>
                                        +<br />{" "}
                                      </>
                                    </span>
                                    <span className="text-white-A700 font-inter text-left">
                                      <>
                                        Ongoing <br />
                                        compliance <br />
                                        filing and deadline
                                        <br /> reminders
                                      </>
                                    </span>
                                    <span className="text-white-A700 font-inter text-left font-normal">
                                      .
                                    </span>
                                  </Text>
                                }
                                registat="REgistat"
                              />
                              <LANDINGPAGEOneDiv1
                                className="bg-gray-900_02 h-[402px] relative rounded-[201px] shadow-bs1 w-full"
                                dashboardtext={
                                  <Text className="font-extrabold leading-[47.00px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-1.42px]">
                                    <span className="text-black-900 font-inter text-left">
                                      +{" "}
                                    </span>
                                    <span className="text-black-900 font-inter text-left">
                                      <>
                                        Easy-to-use <br />
                                        Interactive
                                        <br />
                                        dashboard
                                      </>
                                    </span>
                                    <span className="text-black-900 font-inter text-left">
                                      .
                                    </span>
                                  </Text>
                                }
                              />
                            </div>
                            <div className="flex flex-col font-inter gap-[27px] items-center justify-start md:ml-[0] ml-[86px] w-[32%] md:w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[190px] items-center justify-start md:px-10 px-11 sm:px-5 rounded-[16px] w-full"
                                style={{
                                  backgroundImage: "url('images/img_5.png')",
                                }}
                              >
                                <LANDINGPAGEOneDiv
                                  className="bg-gray-900_02 flex flex-row gap-[31px] items-center justify-start pr-[18px] rounded-[20px] w-full"
                                  easyaffordable={
                                    <>
                                      + Easy.
                                      <br />+ Affordable.
                                    </>
                                  }
                                />
                              </div>
                              <div className="h-[480px] relative w-full">
                                <Img
                                  className="h-[480px] m-auto object-cover rounded-[16px] w-full"
                                  src="images/img_imageright.png"
                                  alt="imageright"
                                />
                                <LANDINGPAGEOneDiv1
                                  className="absolute bg-gray-900_02 h-[429px] inset-x-[0] mx-auto rounded-[20px] top-[1%] w-[84%]"
                                  dashboardtext={
                                    <Text className="font-extrabold leading-[47.00px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-1.42px]">
                                      <span className="text-black-900 font-inter text-left">
                                        <>
                                          +<br />
                                        </>
                                      </span>
                                      <span className="text-black-900 font-inter text-left">
                                        <>
                                          Customer <br />
                                          support service
                                        </>
                                      </span>
                                      <span className="text-black-900 font-inter text-left">
                                        <>
                                          s.
                                          <br />
                                        </>
                                      </span>
                                    </Text>
                                  }
                                />
                              </div>
                              <LANDINGPAGEOneDiv
                                className="bg-gray-900_02 flex flex-col items-center justify-end pt-[13px] rounded-[20px] w-full"
                                easyaffordable={
                                  <Text className="font-extrabold leading-[47.00px] sm:text-[32.9px] md:text-[34.9px] text-[36.9px] text-white-A700 tracking-[-1.42px]">
                                    <span className="text-white-A700 font-inter text-left">
                                      <>
                                        + Good
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-white-A700 font-inter text-left">
                                      <>
                                        Customized service
                                        <br /> requests
                                      </>
                                    </span>
                                    <span className="text-white-A700 font-inter text-left">
                                      {" "}
                                      .
                                    </span>
                                  </Text>
                                }
                                registat="REgistat"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[1298px] h-[886px] relative w-full">
                      <div className="absolute font-inter md:h-[1298px] h-[878px] sm:h-[886px] inset-[0] justify-center m-auto w-full">
                        <div className="md:h-[1298px] h-[886px] m-auto w-full">
                          <div className="md:h-[1293px] h-[886px] m-auto w-full">
                            <div className="h-[886px] m-auto w-full">
                              <div className="bg-white-A700 h-[886px] m-auto rounded-[20px] w-full"></div>
                              <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-900_6c blur-[200.00px] bottom-[4%] h-[604px] right-[3%] w-[23%]"></div>
                            </div>
                            <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-5 items-start justify-center right-[5%] w-[52%]">
                              <div className="backdrop-opacity-[0.5] bg-blue_gray-900_6c blur-[200.00px] h-[604px] md:mt-0 mt-[72px] w-[43%]"></div>
                              <div className="bg-white-A700 flex flex-col items-center justify-start mb-2 p-6 sm:px-5 rounded-[20px] w-[55%] md:w-full">
                                <div className="flex flex-col gap-[30px] items-center justify-start mt-[7px] w-full">
                                  <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                                    <Text
                                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_03"
                                      size="txtInterBold32"
                                    >
                                      Kenya
                                    </Text>
                                    <Img
                                      className="h-[81px] rounded-[50%] w-[81px]"
                                      src="images/img_close_white_a700.svg"
                                      alt="close"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                                      <Text
                                        className="text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-[158px]"
                                        size="txtInterRegular22"
                                      >
                                        What You’ll Get
                                      </Text>
                                      <div className="flex flex-row font-rubik gap-2 items-start justify-start w-auto">
                                        <Img
                                          className="h-6 w-6"
                                          src="images/img_bxscheckcircle.svg"
                                          alt="bxscheckcircle"
                                        />
                                        <Text
                                          className="text-blue_gray-700_01 text-lg w-auto"
                                          size="txtRubikRegular18"
                                        >
                                          company Registration
                                        </Text>
                                      </div>
                                      <div className="flex flex-row font-rubik gap-2 items-start justify-start w-auto">
                                        <Img
                                          className="h-6 w-6"
                                          src="images/img_bxscheckcircle.svg"
                                          alt="bxscheckcircle_One"
                                        />
                                        <Text
                                          className="leading-[30.00px] max-w-[288px] md:max-w-full text-blue_gray-700_01 text-lg"
                                          size="txtRubikRegular18"
                                        >
                                          Local company with a foreign
                                          shareholder
                                        </Text>
                                      </div>
                                      <div className="flex flex-row font-rubik gap-2 items-start justify-start w-auto">
                                        <Img
                                          className="h-6 w-6"
                                          src="images/img_bxscheckcircle.svg"
                                          alt="bxscheckcircle_Two"
                                        />
                                        <Text
                                          className="text-blue_gray-700_01 text-lg w-auto"
                                          size="txtRubikRegular18"
                                        >
                                          Local Address
                                        </Text>
                                      </div>
                                      <div className="flex flex-row font-rubik gap-2 items-start justify-start w-auto">
                                        <Img
                                          className="h-6 w-6"
                                          src="images/img_bxscheckcircle.svg"
                                          alt="bxscheckcircle_Three"
                                        />
                                        <Text
                                          className="text-blue_gray-700_01 text-lg w-auto"
                                          size="txtRubikRegular18"
                                        >
                                          Bank Account{" "}
                                        </Text>
                                      </div>
                                    </div>
                                    <Line className="bg-gray-500_01 h-px md:ml-[0] ml-[9px] mt-[23px] w-[91%]" />
                                    <Text
                                      className="md:ml-[0] ml-[9px] mt-[29px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_04"
                                      size="txtInterBold32Black90004"
                                    >
                                      $720
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-semibold min-w-[352px] mt-[66px] rounded-[12px] text-[22px] text-center sm:text-lg md:text-xl"
                                      color="amber_700"
                                      size="xl"
                                      variant="fill"
                                    >
                                      Choose
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-5 items-start justify-center left-[12%] w-[52%]">
                            <div className="backdrop-opacity-[0.5] bg-blue_gray-900_6c blur-[200.00px] h-[604px] md:mt-0 mt-[72px] w-[43%]"></div>
                            <div className="bg-white-A700 flex flex-col items-center justify-start mb-2 outline outline-[2px] outline-amber-700 p-[19px] rounded-[20px] w-[55%] md:w-full">
                              <div className="flex flex-col items-center justify-start mb-[5px] w-[98%] md:w-full">
                                <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                                  <Text
                                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_03"
                                    size="txtInterBold32"
                                  >
                                    Nigeria
                                  </Text>
                                  <Img
                                    className="h-[81px] rounded-[50%] w-[81px]"
                                    src="images/img_emojioneflagfornigeria.svg"
                                    alt="emojioneflagfor"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start mt-[31px] w-[93%] md:w-full">
                                  <Text
                                    className="text-[22px] text-gray-500_01 sm:text-lg md:text-xl"
                                    size="txtInterRegular22"
                                  >
                                    What You’ll Get
                                  </Text>
                                  <div className="flex flex-row font-rubik gap-2 items-start justify-start mt-7 w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Four"
                                    />
                                    <Text
                                      className="text-blue_gray-700_01 text-lg w-auto"
                                      size="txtRubikRegular18"
                                    >
                                      company Registration
                                    </Text>
                                  </div>
                                  <div className="flex flex-row font-rubik gap-2 items-start justify-start mt-6 w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Five"
                                    />
                                    <Text
                                      className="leading-[30.00px] max-w-[288px] md:max-w-full text-blue_gray-700_01 text-lg"
                                      size="txtRubikRegular18"
                                    >
                                      Local company with a foreign shareholder
                                    </Text>
                                  </div>
                                  <div className="flex flex-row font-rubik gap-2 items-start justify-start mt-6 w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Six"
                                    />
                                    <Text
                                      className="text-blue_gray-700_01 text-lg w-auto"
                                      size="txtRubikRegular18"
                                    >
                                      Local Address
                                    </Text>
                                  </div>
                                  <div className="flex flex-row font-rubik gap-2 items-start justify-start mt-6 w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Seven"
                                    />
                                    <Text
                                      className="text-blue_gray-700_01 text-lg w-auto"
                                      size="txtRubikRegular18"
                                    >
                                      Bank Account{" "}
                                    </Text>
                                  </div>
                                  <div className="flex flex-row font-rubik gap-2 items-start justify-start mt-6 w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Eight"
                                    />
                                    <Text
                                      className="text-blue_gray-700_01 text-lg w-auto"
                                      size="txtRubikRegular18"
                                    >
                                      Local Director
                                    </Text>
                                  </div>
                                  <Line className="bg-gray-500_01 h-px ml-1.5 md:ml-[0] mt-3 w-[99%]" />
                                  <Text
                                    className="ml-0.5 md:ml-[0] mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_04"
                                    size="txtInterBold32Black90004"
                                  >
                                    $1320
                                  </Text>
                                </div>
                                <Button
                                  className="cursor-pointer font-semibold min-w-[352px] mt-[41px] rounded-[12px] text-[22px] text-center sm:text-lg md:text-xl"
                                  color="amber_700"
                                  size="xl"
                                  variant="fill"
                                >
                                  Choose
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col font-rubik gap-[45px] h-max inset-y-[0] justify-start left-[2%] my-auto w-[63%]">
                          <Text
                            className="leading-[30.00px] md:ml-[0] ml-[323px] text-base text-blue_gray-700_01 text-center w-[64%] sm:w-full"
                            size="txtRubikRegular16"
                          >
                            <>
                              Let&#39;s choose the package that is best for you
                              and explore it happily and cheerfully.
                            </>
                          </Text>
                          <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mr-[478px] p-[19px] rounded-[20px] w-[46%] md:w-full">
                            <div className="flex flex-col gap-7 items-end justify-start my-[7px] w-[98%] md:w-full">
                              <div className="flex flex-row gap-9 items-start justify-end w-[94%] md:w-full">
                                <Text
                                  className="mt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_03"
                                  size="txtInterBold32"
                                >
                                  United States{" "}
                                </Text>
                                <Img
                                  className="h-[81px] rounded-[50%] w-[81px]"
                                  src="images/img_emojioneflagf.svg"
                                  alt="emojioneflagf"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[9px] w-auto">
                                  <Text
                                    className="text-[22px] text-gray-500_01 sm:text-lg md:text-xl w-[158px]"
                                    size="txtInterRegular22"
                                  >
                                    What You’ll Get
                                  </Text>
                                  <div className="flex flex-row font-rubik gap-2 items-center justify-start w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Nine"
                                    />
                                    <Text
                                      className="text-blue_gray-700_01 text-lg w-auto"
                                      size="txtRubikRegular18"
                                    >
                                      company Registration
                                    </Text>
                                  </div>
                                  <div className="flex flex-row font-rubik gap-2 items-center justify-start w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_bxscheckcircle.svg"
                                      alt="bxscheckcircle_Ten"
                                    />
                                    <Text
                                      className="leading-[30.00px] max-w-[288px] md:max-w-full text-blue_gray-700_01 text-lg"
                                      size="txtRubikRegular18"
                                    >
                                      Local company with a foreign shareholder
                                    </Text>
                                  </div>
                                </div>
                                <Line className="bg-gray-500_01 h-px md:ml-[0] ml-[9px] mt-7 w-[91%]" />
                                <Text
                                  className="md:ml-[0] ml-[5px] mt-[27px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_04"
                                  size="txtInterBold32Black90004"
                                >
                                  $610
                                </Text>
                                <Button
                                  className="cursor-pointer font-semibold min-w-[352px] mt-44 rounded-[12px] text-[22px] text-center sm:text-lg md:text-xl"
                                  color="amber_700"
                                  size="xl"
                                  variant="fill"
                                >
                                  Choose
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute left-[34%] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 top-[0]"
                        size="txtRubikMedium35"
                      >
                        Choose Your Plan
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[14%] md:h-[1129px] h-[1143px] left-[0] pb-[13px] rotate-[180deg] w-[47%] md:w-full">
                  <Img
                    className="h-[348px] ml-[68px] mt-[283px] object-cover w-[56%]"
                    src="images/img_icons.png"
                    alt="icons"
                  />
                  <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                    <div className="h-[1129px] md:h-[1193px] relative w-full">
                      <Img
                        className="absolute h-[493px] left-[0] object-cover top-[22%] w-[65%]"
                        src="images/img_eclipse.png"
                        alt="eclipse"
                      />
                      <div className="absolute backdrop-opacity-[0.5] bg-gradient2  blur-[200.00px] bottom-[28%] h-[336px] left-[9%] w-[36%]"></div>
                      <Img
                        className="absolute h-[1193px] object-cover right-[0] top-[0] w-full"
                        src="images/img_group1.png"
                        alt="groupOne"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[945px] md:h-[964px] pb-[47px] md:pl-10 sm:pl-5 pl-[47px] right-[0] top-[3%] w-[54%] md:w-full">
                  <Img
                    className="h-[298px] ml-auto mr-[186px] my-auto object-cover w-[39%]"
                    src="images/img_icons_298x294.png"
                    alt="icons_One"
                  />
                  <div className="absolute h-[897px] md:h-[964px] right-[0] top-[0] w-[82%] md:w-full">
                    <Img
                      className="absolute h-[574px] object-cover right-[0] top-[10%] w-[79%]"
                      src="images/img_eclipse_574x488.png"
                      alt="eclipse_One"
                    />
                    <div className="absolute backdrop-opacity-[0.5] bg-gradient3  blur-[200.00px] bottom-[17%] h-[391px] right-[10%] w-[45%]"></div>
                    <Img
                      className="absolute h-[964px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                      src="images/img_group1_964x623.png"
                      alt="groupOne_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-rubik gap-[31px] justify-start w-full">
              <Text
                className="md:ml-[0] ml-[598px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01"
                size="txtRubikMedium35"
              >
                Trusted by{" "}
              </Text>
              <Text
                className="leading-[30.00px] md:ml-[0] ml-[422px] text-base text-blue_gray-700_01 text-center w-[39%] sm:w-full"
                size="txtRubikRegular16"
              >
                These are companies who have joined us with great pleasure when
                using this crazy feature.
              </Text>
              <div className="font-poppins md:h-[1255px] h-[2072px] md:px-5 relative w-full">
                <div className="absolute md:h-[1255px] h-[2045px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute md:h-[1255px] h-[2042px] inset-[0] justify-center m-auto w-full">
                    <div className="flex flex-col m-auto pb-7 w-full">
                      <div className="md:h-[1255px] h-[1651px] mx-auto w-full">
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[1255px] items-end justify-start left-[0] p-[15px] top-[0] w-1/2"
                          style={{
                            backgroundImage: "url('images/img_group17.png')",
                          }}
                        >
                          <Img
                            className="h-[62px] md:h-auto mb-[1163px] mr-[90px] object-cover w-[55%]"
                            src="images/img_image30.png"
                            alt="imageThirty"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[1255px] items-end justify-end p-[110px] md:px-10 sm:px-5 right-[0] w-[55%]"
                          style={{
                            backgroundImage: "url('images/img_group18.png')",
                          }}
                        >
                          <Img
                            className="h-[30px] mb-[95px] mt-[908px]"
                            src="images/img_getstartedinminutes.svg"
                            alt="getstartedinmin"
                          />
                        </div>
                      </div>
                      <footer
                        className="bg-cover bg-no-repeat flex md:flex-col md:gap-5 h-[716px] items-center justify-center mt-[-353.71px] mx-auto w-full z-[1]"
                        style={{
                          backgroundImage: "url('images/img_frame388.png')",
                        }}
                      >
                        <div className="flex md:flex-1 flex-col items-center justify-start mb-[53px] md:ml-[0] ml-[174px] mr-[120px] md:mt-0 mt-[94px] w-4/5 md:w-full">
                          <ul className="flex flex-col justify-start w-full common-column-list">
                            <li>
                              <a href="javascript:">
                                <Img
                                  className="h-[47px] w-[1042px]"
                                  src="images/img_frame66.svg"
                                  alt="frameSixtySix"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <Img
                                  className="h-[22px] md:ml-[0] ml-[403px] mt-[43px]"
                                  src="images/img_joinregistats.svg"
                                  alt="joinregistats"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex md:flex-col flex-row gap-3 items-center justify-start ml-9 md:ml-[0] mt-12 md:w-full">
                                  <Img
                                    className="h-[15px] w-[476px]"
                                    src="images/img_getthelatestnews.svg"
                                    alt="getthelatestnew"
                                  />
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="bg-white-A700 flex flex-col h-[47px] md:h-auto items-center justify-start p-2.5 rounded w-[297px]">
                                      <Img
                                        className="h-3.5 w-[181px]"
                                        src="images/img_enteryouremail.svg"
                                        alt="enteryouremail"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start md:ml-[0] ml-[26px] mt-11 md:w-full">
                                  <Line className="bg-gray-700 h-px w-full" />
                                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-44 items-start justify-start w-auto md:w-full">
                                    <Img
                                      className="h-[89px] w-[110px]"
                                      src="images/img_frame63_gray_50.svg"
                                      alt="frameSixtyThree"
                                    />
                                    <Img
                                      className="h-[90px] w-[70px]"
                                      src="images/img_calendar.svg"
                                      alt="calendar"
                                    />
                                    <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                                      <li>
                                        <a href="javascript:">
                                          <Img
                                            className="h-3 w-[121px]"
                                            src="images/img_search_black_900.svg"
                                            alt="search"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:">
                                          <Img
                                            className="h-[9px] w-[59px]"
                                            src="images/img_settings_gray_300.svg"
                                            alt="settings_One"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:">
                                          <Img
                                            className="h-[13px] w-[63px]"
                                            src="images/img_settings_gray_300_13x63.svg"
                                            alt="settings_Two"
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:">
                                          <Img
                                            className="h-[9px] w-12"
                                            src="images/img_settings_gray_300_9x48.svg"
                                            alt="settings_Three"
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                    <Img
                                      className="h-[99px] w-[90px]"
                                      src="images/img_settings_99x90.svg"
                                      alt="settings_Four"
                                    />
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <Img
                                  className="h-3 md:ml-[0] ml-[425px] mt-[139px]"
                                  src="images/img_settings_gray_500.svg"
                                  alt="settings_Five"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col h-[51px] md:h-auto items-start justify-start mb-[413px] md:ml-[0] ml-[1017px] mr-[235px] md:mt-0 mt-[252px] w-auto">
                          <Button
                            className="cursor-pointer flex h-[51px] items-center justify-center rounded-[9px]"
                            rightIcon={
                              <div className="mt-[5px] mb-1 ml-[7px] bg-amber-700">
                                <Img
                                  src="images/img_arrowleft_amber_700.svg"
                                  alt="arrow_left"
                                />
                              </div>
                            }
                            color="pink_50"
                            size="lg"
                            variant="outline"
                          >
                            <div className="font-medium leading-[normal] text-left text-sm uppercase">
                              subscribe{" "}
                            </div>
                          </Button>
                        </div>
                      </footer>
                    </div>
                    <div className="absolute flex flex-col font-lato inset-x-[0] items-center justify-start mx-auto pt-[71px] top-[26%] w-full">
                      <LANDINGPAGEColumn0d66745877d6ffour className="deep_purple_A700_cyan_700_border14 flex flex-col items-center justify-start outline outline-[2px] w-full" />
                    </div>
                  </div>
                  <div className="absolute flex flex-col font-dmmono md:gap-10 gap-[119px] justify-start right-[22%] top-[1%] w-[48%]">
                    <div className="flex sm:flex-col flex-row gap-14 items-center justify-end md:ml-[0] ml-[241px] w-[65%] md:w-full">
                      <Img
                        className="h-14 md:h-auto object-cover w-[41%] sm:w-full"
                        src="images/img_image28.png"
                        alt="imageTwentyEight"
                      />
                      <Img
                        className="h-12"
                        src="images/img_layer1.svg"
                        alt="group55926"
                      />
                    </div>
                    <Text
                      className="mr-[83px] sm:text-4xl md:text-[38px] text-[40px] text-amber-700"
                      size="txtDMMonoRegular40"
                    >
                      What sets Registat apart?
                    </Text>
                  </div>
                  <div className="absolute flex font-dmmono inset-x-[0] mx-auto top-[16%] w-[1314px] md:w-full">
                    <div className="h-[231px] md:h-[236px] my-auto w-[71%] md:w-full">
                      <div className="absolute flex flex-col gap-[41px] h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[486px] sm:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-amber-700 w-auto"
                          size="txtDMMonoRegular32"
                        >
                          Seamless Experience
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[411px] md:max-w-full text-black-900 text-sm"
                          size="txtDMMonoLight14"
                        >
                          Registat offers a seamless and hassle-free process for
                          business registration and incorporation, making it
                          easy for entrepreneurs to navigate the complexities
                          and get their businesses up and running efficiently.
                        </Text>
                      </div>
                      <div className="absolute flex flex-col gap-[41px] items-start justify-start right-[0] top-[0] w-[468px] sm:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-amber-700 w-auto"
                          size="txtDMMonoRegular32"
                        >
                          Global Reach
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[426px] md:max-w-full text-black-900 text-sm"
                          size="txtDMMonoLight14"
                        >
                          Registat provides services for business registration
                          in various countries worldwide, allowing entrepreneurs
                          to expand their ventures internationally and access
                          new markets with ease.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[41px] items-start justify-start ml-[-33px] my-auto w-[426px] sm:w-full z-[1]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-amber-700 w-auto"
                        size="txtDMMonoRegular32"
                      >
                        Trusted Expertise
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[426px] md:max-w-full text-black-900 text-sm"
                        size="txtDMMonoLight14"
                      >
                        With a team of experienced professionals, Registat
                        offers trusted expertise and guidance throughout the
                        registration process, ensuring businesses comply with
                        all necessary legal requirements and regulations.
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[101px] left-[6%] object-cover top-[0] w-[101px]"
                    src="images/img_image29.png"
                    alt="imageTwentyNine"
                  />
                </div>
                <Img
                  className="absolute h-[159px] object-cover right-[3%] top-[0] w-1/5"
                  src="images/img_image31.png"
                  alt="imageThirtyOne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LANDINGPAGEOnePage;
