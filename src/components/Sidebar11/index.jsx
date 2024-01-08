import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar11 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[19px] mr-28 mt-[34px] w-[55%]">
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_clock.svg"
            alt="clock"
          />
          <Text
            className="text-[15px] text-teal-900"
            size="txtPublicSansRegular15Teal900"
          >
            Company Name
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              width: "100%",
              fontSize: "15px",
              fontFamily: "Public Sans",
              paddingLeft: "33px",
              paddingRight: "33px",
              [`&:hover, &.ps-active`]: {
                color: "#013e44",
                fontWeight: "400 !important",
              },
            },
          }}
          renderExpandIcon={({ open }) =>
            open ? (
              <Img
                className="h-[5px] ml-[74px] mt-[7px] w-2.5"
                src="images/img_arrowdown_teal_900.svg"
                alt="arrowdown"
              />
            ) : (
              <Img
                className="h-2.5 mt-2 w-1.5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            )
          }
          className="flex flex-col items-center justify-start mt-[47px] w-full"
        >
          <SubMenu
            icon={
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_home.svg"
                alt="home"
              />
            }
            label={
              <Text className="font-semibold ml-3.5 text-blue_gray-600">
                Dashboards
              </Text>
            }
          >
            <div className="flex flex-col items-center justify-end mt-[18px] w-full">
              <MenuItem
                icon={
                  <div className="bg-indigo-A200_68 h-3 my-0.5 rounded-[50%] w-3"></div>
                }
              >
                <Text className="font-semibold mr-[119px] text-blue_gray-600">
                  Company
                </Text>
              </MenuItem>
              <MenuItem
                icon={
                  <div className="bg-indigo-A200_68 flex flex-col h-3 items-center justify-end my-0.5 rounded-[50%] w-3">
                    <div className="bg-teal-900 h-2 rotate-[46deg] rounded-[50%] w-2"></div>
                  </div>
                }
                active={window.location.pathname === "/document"}
              >
                <Text className="mr-[108px] text-blue_gray-500 w-auto">
                  Documents
                </Text>
              </MenuItem>
            </div>
          </SubMenu>
          <SubMenu
            icon={
              <Img
                className="h-6 w-6"
                src="images/img_iconpayment.svg"
                alt="iconpayment"
              />
            }
            label={
              <Text className="ml-[9px] mt-[3px] text-blue_gray-500">
                Billings
              </Text>
            }
          >
            <MenuItem>
              <div className="md:w-full md:pl-10 sm:pl-5 pl-[27px] gap-4 flex justify-center items-center flex-row">
                Submenu Item
              </div>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Line className="bg-teal-900_01 h-10 ml-64 md:ml-[0] mr-[25px] w-1" />
        <Img
          className="h-10 mb-[960px] md:ml-[0] ml-[182px] mr-[5px]"
          src="images/img_user.svg"
          alt="user"
        />
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
