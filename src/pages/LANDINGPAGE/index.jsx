import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import LANDINGPAGEColumn0d66745877d6ffour from "components/LANDINGPAGEColumn0d66745877d6ffour";
import LANDINGPAGENavbar from "components/LANDINGPAGENavbar";
import LANDINGPAGERowyoucan from "components/LANDINGPAGERowyoucan";

const LANDINGPAGEPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex md:flex-col flex-row font-poppins gap-3 items-start justify-between max-w-[1391px] mx-auto md:px-5 w-full">
            <div className="flex flex-col justify-start">
              <div className="flex font-dmsans h-[45px] md:h-[581px] justify-end relative w-full">
                <Button
                  className="flex h-5 items-center justify-center ml-auto mr-[115px] mt-auto rounded-[50%] w-5"
                  color="teal_500"
                  size="3xl"
                  variant="fill"
                >
                  <Img src="images/img_frame_black_900.svg" alt="frame" />
                </Button>
                <LANDINGPAGENavbar className="absolute flex md:flex-col flex-row gap-[50px] h-full inset-[0] items-center justify-between m-auto w-auto" />
              </div>
              <Text
                className="ml-1 md:ml-[0] mt-[137px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[49%] sm:w-full"
                size="txtDMMonoMedium48"
              >
                Register your business across borders
              </Text>
              <LANDINGPAGERowyoucan className="flex md:flex-col flex-row font-dmmono md:gap-5 items-center justify-start mt-[19px] sm:pr-5 pr-[21px] w-[70%] md:w-full" />
              <Text
                className="md:ml-[0] ml-[11px] mt-[15px] text-[15px] text-black-900 w-[45%] sm:w-full"
                size="txtPoppinsMedium15"
              >
                Establishing a new company in Africa, US, BVI, UK and filing
                your trademark just got easier.
              </Text>
              <div className="font-rubik h-[60px] md:h-[95px] ml-1.5 md:ml-[0] mt-[35px] relative w-[19%]">
                <div className="backdrop-opacity-[0.5] bg-amber-700 blur-[54.00px] h-[60px] ml-auto mr-2.5 my-auto rounded-[10px] w-[85%]"></div>
                <Button
                  className="!text-white-A700 absolute cursor-pointer font-bold h-full inset-[0] justify-center m-auto min-w-[250px] rounded-[10px] text-base text-center"
                  color="amber_700"
                  size="xl"
                  variant="fill"
                >
                  Get Started
                </Button>
              </div>
              <Text
                className="leading-[50.00px] md:ml-[0] ml-[198px] mt-[248px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-[71%] sm:w-full"
                size="txtRubikMedium35"
              >
                Your One-Stop shop for International Company Incorporation and
                Trademark Registration
              </Text>
              <Img
                className="h-[537px] md:ml-[0] ml-[126px] mt-[91px]"
                src="images/img_hugeglobal.svg"
                alt="hugeglobal"
              />
              <div className="flex flex-col font-poppins gap-[-25px] items-start justify-start md:ml-[0] ml-[67px] mt-[70px] w-auto md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-amber-700 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Ready to take your business to the next level?
                </Text>
                <Text
                  className="max-w-[1188px] md:max-w-full text-black-900 text-xl"
                  size="txtPoppinsMedium20"
                >
                  With Registat, you can register your business, open a bank
                  account, manage compliance, and protect your trademark in just
                  a few simple steps. Say goodbye to the stress and hello to the
                  excitement of starting your own business.
                </Text>
              </div>
              <div className="font-poppins md:h-[1367px] h-[815px] sm:h-[852px] md:ml-[0] ml-[73px] mt-[97px] relative w-[87%] md:w-full">
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-amber-700 text-center w-max"
                  size="txtPoppinsMedium40"
                >
                  BENEFITS
                </Text>
                <div className="absolute flex flex-col font-montserrat inset-x-[0] items-center justify-start mx-auto py-1 top-[0] w-full">
                  <div className="flex flex-col gap-10 justify-start mb-[33px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-8 md:ml-[0] w-[89%] md:w-full">
                      <div className="bg-white-A700 flex flex-col h-28 items-center justify-end p-[9px] rounded-[10px] shadow-bs1 w-28">
                        <Img
                          className="h-[71px] mt-[22px] w-[71px]"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col h-28 items-center justify-start md:ml-[0] ml-[341px] p-[19px] rounded-[10px] shadow-bs1 w-28">
                        <Img
                          className="h-[74px]"
                          src="images/img_claritybanksolid.svg"
                          alt="claritybanksoli"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col h-28 items-end justify-end md:ml-[0] ml-[342px] p-[13px] rounded-[10px] shadow-bs1 w-28">
                        <Button
                          className="flex h-[71px] items-center justify-center mr-[3px] mt-3.5 rounded-[35px] w-[71px]"
                          color="teal_900"
                          size="lg"
                          variant="fill"
                        >
                          <Img
                            src="images/img_user_white_a700.svg"
                            alt="user"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-[63%] md:w-full">
                        <div className="flex flex-col gap-[9px] justify-start ml-0.5 md:ml-[0] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                            <div className="flex flex-col gap-[27px] items-center justify-start w-72">
                              <Text
                                className="sm:text-[17px] md:text-[19px] text-[21px] text-amber-700 w-full"
                                size="txtMontserratRomanBold21"
                              >
                                Start your business
                              </Text>
                              <div className="flex flex-col font-mulish items-center justify-start w-auto">
                                <Text
                                  className="leading-[24.00px] max-w-[288px] md:max-w-full text-base text-black-900"
                                  size="txtMulishRegular16"
                                >
                                  Launch your business with confidence as our
                                  expert team simplifies the process from entity
                                  selection to successful execution.
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[27px] items-center justify-start w-72">
                              <Text
                                className="sm:text-[17px] md:text-[19px] text-[21px] text-amber-700_01 w-full"
                                size="txtMontserratRomanBold21Amber70001"
                              >
                                Bank account opening
                              </Text>
                              <div className="flex flex-col font-mulish items-center justify-start w-auto">
                                <Text
                                  className="leading-[24.00px] max-w-[288px] md:max-w-full text-base text-black-900"
                                  size="txtMulishRegular16"
                                >
                                  Open a bank account hassle-free with our
                                  guidance, making the process simple and
                                  efficient, ensuring your financial
                                  transactions run smoothly.
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col h-28 items-center justify-end md:ml-[0] ml-[51px] mr-[558px] p-3.5 rounded-[10px] shadow-bs1 w-28">
                            <Img
                              className="h-[78px] mt-[5px]"
                              src="images/img_fluentdocument.svg"
                              alt="fluentdocument"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[27px] items-center justify-start w-72">
                          <Text
                            className="sm:text-[17px] md:text-[19px] text-[21px] text-amber-700_01 w-full"
                            size="txtMontserratRomanBold21Amber70001"
                          >
                            Tax, audit & compliance
                          </Text>
                          <div className="flex flex-col font-mulish items-center justify-start w-auto">
                            <Text
                              className="leading-[24.00px] max-w-[288px] md:max-w-full text-base text-black-900"
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
                        </div>
                      </div>
                      <div className="flex flex-col gap-[27px] items-center justify-start w-72">
                        <Text
                          className="sm:text-[17px] md:text-[19px] text-[21px] text-amber-700_01 w-full"
                          size="txtMontserratRomanBold21Amber70001"
                        >
                          Register your Trademark
                        </Text>
                        <div className="flex flex-col font-mulish items-center justify-start w-auto">
                          <Text
                            className="leading-[24.00px] max-w-[288px] md:max-w-full text-base text-black-900"
                            size="txtMulishRegular16"
                          >
                            <>
                              Safeguard your brand&#39;s identity and uniqueness
                              by registering your trademark with our expert
                              guidance, protecting your intellectual property
                              rights.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer h-[93px] leading-[normal] mb-[2245px] min-w-[37px] md:mt-0 mt-[332px] text-[11px] text-center"
              shape="square"
              color="black_900"
              size="lg"
              variant="fill"
            >
              Feedback
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start max-w-[1223px] mt-[73px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[18px] w-[39%] md:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01"
                size="txtRubikMedium35"
              >
                Why Choose Registat{" "}
              </Text>
              <Text
                className="leading-[30.00px] mt-[70px] text-base text-blue_gray-700_01 w-[92%] sm:w-full"
                size="txtPoppinsRegular16"
              >
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </Text>
              <div className="flex sm:flex-col flex-row font-poppins gap-[31px] items-start justify-between mt-[45px] w-full">
                <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start sm:mt-0 mt-2 w-[6%] sm:w-full">
                  <Img
                    className="h-6 ml-0.5 md:ml-[0] w-6"
                    src="images/img_bxbxscheckcircle.svg"
                    alt="bxbxscheckcircl"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxbxscheckcircle.svg"
                    alt="bxbxscheckcircl_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxbxscheckcircle.svg"
                    alt="bxbxscheckcircl_Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxbxscheckcircle.svg"
                    alt="bxbxscheckcircl_Three"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxbxscheckcircle.svg"
                    alt="bxbxscheckcircl_Four"
                  />
                </div>
                <div className="flex flex-col relative w-[88%] sm:w-full">
                  <Text
                    className="leading-[257.52%] m-auto text-base text-black-900"
                    size="txtPoppinsRegular16Black900"
                  >
                    <>
                      Fast & affordable registration
                      <br />
                      Easy-to-use Interactive dashboard
                      <br />
                      Ongoing compliance filing and deadline reminders
                      <br />
                      Customer support service
                      <br />
                      Customised service requests
                    </>
                  </Text>
                  <Img
                    className="h-2.5 ml-[139px] mt-[-5.17px] z-[1]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
              <Text
                className="bg-amber-700 h-[60px] justify-center ml-0.5 md:ml-[0] sm:px-5 px-[35px] py-5 rounded-[10px] text-base text-white-A700 w-[250px]"
                size="txtRubikBold16"
              >
                Get Started
              </Text>
            </div>
            <Img
              className="md:flex-1 h-[606px] sm:h-auto object-cover rounded-[10px] w-[58%] md:w-full"
              src="images/img_frame387.png"
              alt="frame387"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[518px] mr-[628px] mt-[162px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01"
            size="txtRubikMedium35"
          >
            Choose Your Plan
          </Text>
          <Text
            className="leading-[30.00px] md:ml-[0] ml-[387px] mr-[497px] mt-6 text-base text-blue_gray-700_01 text-center w-[39%] sm:w-full"
            size="txtRubikRegular16"
          >
            <>
              Let&#39;s choose the package that is best for you and explore it
              happily and cheerfully.
            </>
          </Text>
          <div className="bg-white-A700 flex flex-row font-inter items-center justify-start max-w-[1403px] mx-auto p-[27px] md:px-5 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start mb-[9px] mt-[137px] w-full">
              <div className="md:h-[661px] h-[686px] relative w-[35%] md:w-full">
                <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-900_6c blur-[200.00px] bottom-[0] h-[604px] right-[0] w-[69%]"></div>
                <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-[19px] rounded-[20px] w-[88%]">
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
                            alt="bxscheckcircle"
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
                            alt="bxscheckcircle_One"
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
              <List
                className="md:flex-1 sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[666px] h-[676px] relative w-full">
                  <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-900_6c blur-[200.00px] bottom-[0] h-[604px] right-[0] w-3/4"></div>
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto outline outline-[2px] outline-amber-700 p-[19px] rounded-[20px] w-[96%]">
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
                            alt="bxscheckcircle"
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
                            alt="bxscheckcircle_One"
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
                            alt="bxscheckcircle_Two"
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
                            alt="bxscheckcircle_Three"
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
                            alt="bxscheckcircle_Four"
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
                <div className="md:h-[661px] h-[676px] relative w-full">
                  <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-900_6c blur-[200.00px] bottom-[0] h-[604px] right-[0] w-[74%]"></div>
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-6 sm:px-5 rounded-[20px] w-[95%]">
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
                              Local company with a foreign shareholder
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
              </List>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[598px] mr-[659px] mt-[55px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01"
            size="txtRubikMedium35"
          >
            Trusted by{" "}
          </Text>
          <Text
            className="leading-[30.00px] md:ml-[0] ml-[422px] mr-[463px] mt-[31px] text-base text-blue_gray-700_01 text-center w-[39%] sm:w-full"
            size="txtRubikRegular16"
          >
            These are companies who have joined us with great pleasure when
            using this crazy feature.
          </Text>
          <div className="font-poppins md:h-[1285px] h-[2072px] mt-[30px] md:px-5 relative w-full">
            <div className="absolute md:h-[1255px] h-[2045px] inset-[0] justify-center m-auto overflow-auto w-full">
              <div className="absolute md:h-[1255px] h-[2042px] inset-[0] justify-center m-auto w-full">
                <div className="flex flex-col m-auto pb-2.5 w-full">
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
                    className="bg-cover bg-no-repeat flex md:flex-col md:gap-5 h-[734px] items-center justify-center mt-[-353.71px] mx-auto w-full z-[1]"
                    style={{
                      backgroundImage: "url('images/img_frame388.png')",
                    }}
                  >
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[71px] md:ml-[0] ml-[174px] mr-[120px] md:mt-0 mt-[94px] w-4/5 md:w-full">
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
                                        alt="settings"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:">
                                      <Img
                                        className="h-[13px] w-[63px]"
                                        src="images/img_settings_gray_300_13x63.svg"
                                        alt="settings_One"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:">
                                      <Img
                                        className="h-[9px] w-12"
                                        src="images/img_settings_gray_300_9x48.svg"
                                        alt="settings_Two"
                                      />
                                    </a>
                                  </li>
                                </ul>
                                <Img
                                  className="h-[99px] w-[90px]"
                                  src="images/img_settings_99x90.svg"
                                  alt="settings_Three"
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
                              alt="settings_Four"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col h-[51px] md:h-auto items-start justify-start mb-[431px] md:ml-[0] ml-[1017px] mr-[235px] md:mt-0 mt-[252px] w-auto">
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
                  <LANDINGPAGEColumn0d66745877d6ffour className="deep_purple_A700_cyan_700_border12 flex flex-col items-center justify-start outline outline-[2px] w-full" />
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
              <div className="absolute font-dmmono overflow-x-auto right-[0] top-[16%] w-[97%]">
                <div className="flex md:flex-col flex-row gap-[7px] items-start justify-center w-auto">
                  <div className="flex flex-col gap-[41px] items-start justify-start w-[486px] sm:w-full">
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
                      business registration and incorporation, making it easy
                      for entrepreneurs to navigate the complexities and get
                      their businesses up and running efficiently.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[468px] sm:w-full">
                    <div className="flex flex-col gap-9 items-start justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-amber-700 w-auto"
                        size="txtDMMonoRegular32"
                      >
                        Global Reach
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between w-full">
                        <Text
                          className="leading-[30.00px] text-black-900 text-sm"
                          size="txtDMMonoLight14"
                        >
                          Registat provides services for business registration
                          in various countries worldwide, allowing entrepreneurs
                          to expand their ventures internationally and access
                          new markets with ease.
                        </Text>
                        <Text
                          className="leading-[30.00px] text-black-900 text-sm"
                          size="txtDMMonoLight14"
                        >
                          With a team of experienced professionals, Registat
                          offers trusted expertise and guidance throughout the
                          registration process, ensuring businesses comply with
                          all necessary legal requirements and regulations.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[426px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-amber-700 w-auto"
                      size="txtDMMonoRegular32"
                    >
                      Trusted Expertise
                    </Text>
                  </div>
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
    </>
  );
};

export default LANDINGPAGEPage;
