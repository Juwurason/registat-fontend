import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import PricingColumnstartyourbusineOne from "components/PricingColumnstartyourbusineOne";
import PricingDropdownkeeps from "components/PricingDropdownkeeps";

const PticingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[924px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[105px] items-center justify-start">
              <div className="flex flex-col gap-3.5 justify-start w-full">
                <Img
                  className="h-2.5 md:ml-[0] ml-[365px]"
                  src="images/img_clickheretosign.svg"
                  alt="clickheretosign"
                />
                <PricingColumnstartyourbusineOne className="flex flex-col gap-[97px] items-center justify-start w-auto md:w-full" />
              </div>
              <div className="flex flex-col font-poppins items-center justify-center p-2.5 w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-amber-700 sm:text-xl uppercase w-auto"
                  size="txtPoppinsMedium24"
                >
                  standard pricing
                </Text>
              </div>
            </div>
            <Button
              className="flex h-5 items-center justify-center mb-[130px] md:mt-0 mt-[59px] rounded-[50%] w-5"
              color="teal_500"
              size="3xl"
              variant="fill"
            >
              <Img src="images/img_frame.svg" alt="frame" />
            </Button>
          </div>
          <div className="flex flex-col md:gap-10 gap-[85px] items-start justify-start max-w-[1219px] mt-[67px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start w-auto">
                <Text
                  className="text-[15px] text-black-900 text-center w-auto"
                  size="txtDMSansRegular15"
                >
                  Services
                </Text>
                <div className="flex flex-col md:gap-10 gap-[66px] items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular15"
                  >
                    Company Incorporation
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular15"
                  >
                    Trade mark
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[49px] items-center justify-start w-auto">
                <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.32px] w-auto"
                    size="txtDMSansRegular16"
                  >
                    Nigeria
                  </Text>
                  <Text
                    className="text-[9px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular9"
                  >
                    (Standard Price)
                  </Text>
                </div>
                <div className="flex flex-col gap-[49px] items-center justify-start">
                  <Text
                    className="text-[15px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular15"
                  >
                    $120
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular15"
                  >
                    $120
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 grid-cols-4 w-[51%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[50px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[0.32px] w-auto"
                      size="txtDMSansRegular14"
                    >
                      Delaware
                    </Text>
                    <Text
                      className="text-[9px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular9"
                    >
                      (Standard Price)
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[50px] items-center justify-start">
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $450
                    </Text>
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $450
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[50px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[0.32px] w-auto"
                      size="txtDMSansRegular14"
                    >
                      Wyoming
                    </Text>
                    <Text
                      className="text-[9px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular9"
                    >
                      (Standard Price)
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[50px] items-center justify-start">
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $4,650
                    </Text>
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $4,650
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[50px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[0.32px] w-auto"
                      size="txtDMSansRegular14"
                    >
                      USA
                    </Text>
                    <Text
                      className="text-[9px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular9"
                    >
                      (Standard Price)
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[50px] items-center justify-start">
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $4,650
                    </Text>
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $4,650
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[50px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-center text-sm tracking-[0.32px] w-auto"
                      size="txtDMSansRegular14"
                    >
                      Ghana
                    </Text>
                    <Text
                      className="text-[9px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular9"
                    >
                      (Standard Price)
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[50px] items-center justify-start">
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $4,650
                    </Text>
                    <Text
                      className="text-[15px] text-black-900 text-center w-auto"
                      size="txtDMSansRegular15"
                    >
                      $4,650
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[50px] items-center justify-start w-auto">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Text
                    className="text-[15px] text-black-900 text-center tracking-[0.32px] w-auto"
                    size="txtDMSansRegular15"
                  >
                    BVI
                  </Text>
                  <Text
                    className="text-[9px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular9"
                  >
                    (Standard Price)
                  </Text>
                </div>
                <div className="flex flex-col gap-[50px] items-center justify-start">
                  <Text
                    className="text-[15px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular15"
                  >
                    $4,650
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 text-center w-auto"
                    size="txtDMSansRegular15"
                  >
                    $4,650
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="leading-[24.00px] text-base text-black-900 tracking-[0.32px] w-[32%] sm:w-full"
              size="txtDMSansMedium16"
            >
              For prices and other services , check our simple dashboard
              calculator
            </Text>
          </div>
          <div className="flex flex-col font-poppins items-start justify-start max-w-[1227px] mt-[74px] mx-auto md:px-5 w-full">
            <PricingDropdownkeeps
              className="flex flex-col h-14 md:h-auto items-start justify-start rounded-[10px] w-[414px] sm:w-full"
              countryofincorporation="nigeria"
            />
            <div className="font-inter md:h-[1153px] h-[455px] sm:h-[524px] mt-[69px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto pt-[15px] px-[15px] w-full"
                style={{ backgroundImage: "url('images/img_group4.png')" }}
              >
                <div className="flex flex-col gap-3.5 justify-start mr-[13px] w-[93%] md:w-full">
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[540px] w-[43%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Information
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Deliverable
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-amber-700 uppercase"
                      size="txtPoppinsMedium36"
                    >
                      nigeria
                    </Text>
                    <div className="flex flex-col font-inter gap-[33px] h-72 md:h-auto items-start justify-start md:ml-[0] ml-[118px] w-[180px]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <CheckBox
                          className="leading-[normal] text-left text-xs"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="label"
                          id="label"
                          label="Nigerian Company"
                        ></CheckBox>
                      </div>
                      <div className="flex flex-col h-9 md:h-auto items-start justify-start w-[180px] sm:w-full">
                        <CheckBox
                          className="leading-[normal] text-left text-xs"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="label_One"
                          id="label_One"
                          label="Nigerian Company (with foreign shareholder)"
                          size="sm"
                        ></CheckBox>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                        <CheckBox
                          className="leading-[normal] text-left text-xs"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="label_Two"
                          id="label_Two"
                          label=" Local Address"
                        ></CheckBox>
                      </div>
                      <div className="flex flex-col items-center justify-end w-auto sm:w-full">
                        <CheckBox
                          className="leading-[normal] text-left text-xs"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="label_Three"
                          id="label_Three"
                          label="Local Director"
                        ></CheckBox>
                      </div>
                      <div className="flex flex-col items-center justify-end w-auto sm:w-full">
                        <CheckBox
                          className="leading-[normal] text-left text-xs"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="label_Four"
                          id="label_Four"
                          label="Bank Account"
                        ></CheckBox>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[53px] text-[15px] text-black-900"
                      size="txtInterRegular15"
                    >
                      <>
                        Proposed Names of Company (Provide two options)
                        <br />
                        Registered address of the company (Local Address
                        Required, Registat can provide)
                        <br />
                        Nature or objects of the business
                        <br />
                        Amount of authorized share capital (N1,000,000 for local
                        companies and N10,000,000 if foreign shareholder is
                        involved)
                        <br />
                        Details of subscribers, directors and shareholder (if
                        applicable)
                      </>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[78px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      <>
                        Certificate of Incorporation
                        <br />
                        Memorandum and Articles of Association
                        <br />
                        Status Report
                        <br />
                        Tax Identification Number (TIN)
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-row h-full inset-y-[0] items-center justify-between my-auto right-1/4 w-[30%]">
                <Line className="bg-gradient  h-[451px] mt-1 w-px" />
                <Line className="bg-gradient  h-[451px] mb-1 w-px" />
              </div>
            </div>
            <div className="flex flex-row font-sansserif gap-2 items-center justify-end md:ml-[0] ml-[1002px] mt-[43px] w-[14%] md:w-full">
              <Text
                className="sm:text-[29px] md:text-[31px] text-[33px] text-gray-200 tracking-[0.94px]"
                size="txtSansSerif33"
              >
                $399
              </Text>
              <Text
                className="text-[13px] text-white-A700_99"
                size="txtSansSerif13"
              >
                One-time fee
              </Text>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[46px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PticingPage;
