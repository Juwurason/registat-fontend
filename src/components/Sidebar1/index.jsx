import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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
              padding: "11px",
              width: "100%",
              gap: "18px",
              color: "#697a8d",
              fontSize: "15px",
              fontFamily: "Public Sans",
              [`&:hover, &.ps-active`]: {
                color: "#013e44",
                fontWeight: "400 !important",
                backgroundColor: "#696cffff !important",
              },
            },
          }}
          renderExpandIcon={() => (
            <Img
              className="h-[5px] w-2.5"
              src="images/img_arrowdown_teal_900.svg"
              alt="arrowdown_One"
            />
          )}
          className="flex flex-col items-center justify-start mt-[26px] pl-4 md:pr-10 sm:pr-5 pr-[41px] pt-0.5 w-4/5"
        >
          <SubMenu
            icon={
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_home.svg"
                alt="home"
              />
            }
            label={<Text>Dashboards</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            label={
              <Text className="font-semibold ml-9 md:ml-[0] text-blue_gray-600">
                Company
              </Text>
            }
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <MenuItem
            icon={
              <div className="bg-blue_gray-700 h-1.5 my-[5px] rounded-[50%] w-1.5"></div>
            }
            active={window.location.pathname === "/document"}
          >
            <Text>Documents</Text>
          </MenuItem>
          <SubMenu
            icon={
              <Img
                className="h-6 w-6"
                src="images/img_iconpayment.svg"
                alt="iconpayment"
              />
            }
            label={<Text>Billings</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
        </Menu>
        <Img
          className="h-10 mb-[960px] md:ml-[0] ml-[182px] mr-[5px]"
          src="images/img_user.svg"
          alt="user"
        />
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
