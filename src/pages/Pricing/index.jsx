import React from "react";

import { Button, Img, Line, List, Text } from "components";
import PricingColumnstartyourbusineOne from "components/PricingColumnstartyourbusineOne";
import PricingDropdownkeeps from "components/PricingDropdownkeeps";

const PricingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans justify-end mx-auto pt-4 w-full">
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[613px] w-full">
          <Img
            className="h-2.5"
            src="images/img_clickheretosign.svg"
            alt="clickheretosign"
          />
        </div>
        <div className="flex flex-col items-center mt-3.5 md:px-10 sm:px-5 px-[352px] w-full">
          <PricingColumnstartyourbusineOne className="flex flex-col gap-[97px] items-center justify-start w-auto md:w-full" />
        </div>
        <div className="flex flex-col items-end mt-[11px] md:px-10 sm:px-5 px-[164px] w-full">
          <Button
            className="flex h-5 items-center justify-center rounded-[50%] w-5"
            color="teal_500"
            size="3xl"
            variant="fill"
          >
            <Img src="images/img_frame.svg" alt="frame" />
          </Button>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[67px] items-center mt-[74px] md:px-10 sm:px-5 px-[90px] w-full">
          <div className="flex flex-col items-center justify-center p-2.5 w-auto">
            <Text
              className="text-2xl md:text-[22px] text-amber-700 sm:text-xl uppercase w-auto"
              size="txtPoppinsMedium24"
            >
              standard pricing
            </Text>
          </div>
          <div className="flex flex-col font-dmsans md:gap-10 gap-[85px] items-start justify-start max-w-[1219px] mx-auto w-full">
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
        </div>
        <PricingDropdownkeeps className="flex flex-col font-poppins h-14 md:h-auto items-start justify-start md:ml-[0] ml-[118px] mr-[908px] mt-[74px] md:px-5 rounded-[10px] w-[414px] sm:w-full" />
        <div className="flex flex-col items-center mt-[113px] w-full">
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="md:h-[733px] h-[744px] sm:h-[955px] relative w-full">
              <Img
                className="h-[30px] ml-auto mr-[149px] mt-[111px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <div className="absolute md:h-[733px] h-[744px] sm:h-[955px] inset-[0] justify-center m-auto pb-[11px] w-full">
                <Img
                  className="h-[733px] m-auto object-cover w-[1440px] md:w-full"
                  src="images/img_frame388.png"
                  alt="frame388"
                />
                <ul className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-4/5 md:w-full common-column-list">
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
                        className="h-[22px] md:ml-[0] ml-[453px] mt-[43px]"
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
                        <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                          <div className="bg-white-A700 flex flex-col h-[47px] md:h-auto items-center justify-start p-2.5 rounded w-[294px]">
                            <Img
                              className="h-3.5 w-[181px]"
                              src="images/img_enteryouremail.svg"
                              alt="enteryouremail"
                            />
                          </div>
                          <Img
                            className="h-[47px] md:h-auto object-cover w-[175px] sm:w-full"
                            src="images/img_frame390.png"
                            alt="frame390"
                          />
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
                            src="images/img_frame63.svg"
                            alt="frameSixtyThree"
                          />
                          <Img
                            className="h-[90px] w-[70px]"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
                          <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                            <li>
                              <a href="javascript:">
                                <Img
                                  className="h-3 w-[121px]"
                                  src="images/img_search.svg"
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
                            src="images/img_settings_gray_300_99x90.svg"
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
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
