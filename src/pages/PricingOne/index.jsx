import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import PricingColumnstartyourbusineOne from "components/PricingColumnstartyourbusineOne";
import PricingOneDropdownkeeps from "components/PricingOneDropdownkeeps";

const cOuntryOfIncorporationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PricingOnePage = () => {
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
        <PricingOneDropdownkeeps className="flex flex-col font-poppins h-[616px] md:h-auto items-start justify-start md:ml-[0] ml-[118px] mr-[908px] mt-[74px] md:px-5 w-[414px] sm:w-full" />
        <div className="flex flex-col items-center mt-[93px] w-full">
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PricingOnePage;
