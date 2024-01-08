import React from "react";

import { Img, Line } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="md:h-[726px] h-[744px] sm:h-[955px] relative w-full">
          <Img
            className="h-[30px] ml-auto mr-[149px] mt-[111px]"
            src="images/img_settings.svg"
            alt="settings"
          />
          <div className="absolute md:h-[726px] h-[744px] sm:h-[955px] inset-[0] justify-center m-auto pb-[18px] w-full">
            <Img
              className="h-[726px] m-auto object-cover w-[1440px] md:w-full"
              src="images/img_frame388.png"
              alt="frame388"
            />
            <ul className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-4/5 md:w-full common-column-list">
              <li>
                <Img
                  className="h-[47px] w-[1042px]"
                  src="images/img_frame66.svg"
                  alt="frameSixtySix"
                />
              </li>
              <li>
                <Img
                  className="h-[22px] md:ml-[0] ml-[453px] mt-[43px]"
                  src="images/img_joinregistats.svg"
                  alt="joinregistats"
                />
              </li>
              <li>
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
              </li>
              <li>
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
                        <Img
                          className="h-3 w-[121px]"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      </li>
                      <li>
                        <Img
                          className="h-[9px] w-[59px]"
                          src="images/img_settings_gray_300.svg"
                          alt="settings_One"
                        />
                      </li>
                      <li>
                        <Img
                          className="h-[13px] w-[63px]"
                          src="images/img_settings_gray_300_13x63.svg"
                          alt="settings_Two"
                        />
                      </li>
                      <li>
                        <Img
                          className="h-[9px] w-12"
                          src="images/img_settings_gray_300_9x48.svg"
                          alt="settings_Three"
                        />
                      </li>
                    </ul>
                    <Img
                      className="h-[99px] w-[90px]"
                      src="images/img_settings_gray_300_99x90.svg"
                      alt="settings_Four"
                    />
                  </div>
                </div>
              </li>
              <li>
                <Img
                  className="h-3 md:ml-[0] ml-[425px] mt-[139px]"
                  src="images/img_settings_gray_500.svg"
                  alt="settings_Five"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
