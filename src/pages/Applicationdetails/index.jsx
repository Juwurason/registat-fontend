import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const moreDirectorsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ApplicationdetailsPage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto p-[342px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[210px] items-center justify-start mb-[271px] md:ml-[0] ml-[308px] p-[77px] md:px-5 w-[22%] md:w-full">
          <Img
            className="h-[34px]"
            src="images/img_layer1.svg"
            alt="layerOne"
          />
          <div className="flex flex-col items-start justify-start mb-[244px] w-[34%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInterBold30"
            >
              Join Us!
            </Text>
            <Text
              className="leading-[28.00px] mt-[9px] text-blue_gray-400 text-lg w-[97%] sm:w-full"
              size="txtInterRegular18"
            >
              To begin this journey, tell us what type of account you’d be
              opening.
            </Text>
            <List
              className="flex flex-col gap-7 items-center mt-[35px] w-full"
              orientation="vertical"
            >
              <div className="bg-gray-50_05 border hover:border-0 border-blue-700_01 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[25px] sm:px-5 rounded-md hover:shadow-bs4 shadow-bs4 w-full">
                <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[52px] items-center justify-start p-4 w-[52px]"
                    style={{ backgroundImage: "url('images/img_group38.svg')" }}
                  >
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_white_a700_20x20.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start ml-7">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterMedium16"
                    >
                      Individual
                    </Text>
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-sm w-full"
                      size="txtInterRegular14Bluegray400"
                    >
                      Personal account to manage all you activities.
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowright_blue_700_01.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="bg-gray-50_05 border hover:border-0 border-blue-700_01 border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-md hover:shadow-bs4 shadow-bs4 w-full">
                <div className="flex flex-row gap-7 items-center justify-start md:ml-[0] ml-[3px] w-[85%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[52px] items-center justify-start p-4 w-[52px]"
                    style={{ backgroundImage: "url('images/img_group39.svg')" }}
                  >
                    <Img
                      className="h-5 w-5"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterMedium16"
                    >
                      Business
                    </Text>
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-sm w-full"
                      size="txtInterRegular14Bluegray400"
                    >
                      Own or belong to a company, this is for you.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-center mb-[271px] ml-14 md:ml-[0] p-[74px] md:px-5 w-[22%] md:w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[57px] w-[5%] md:w-full">
            <div className="flex flex-row gap-3.5 items-center justify-start w-full">
              <Img
                className="h-4"
                src="images/img_arrowleft_blue_gray_400.svg"
                alt="arrowleft"
              />
              <Text
                className="text-base text-blue_gray-400"
                size="txtInterSemiBold16"
              >
                Back
              </Text>
            </div>
          </div>
          <div className="flex flex-col mb-[34px] md:ml-[0] ml-[311px] md:mt-0 mt-[41px] relative w-[34%] md:w-full">
            <div className="flex flex-col items-start justify-start mx-auto py-0.5 w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterBold30"
              >
                Company Details
              </Text>
              <Text
                className="leading-[28.00px] mt-1.5 text-blue_gray-400 text-lg w-[97%] sm:w-full"
                size="txtInterRegular18"
              >
                For the purpose of registering your company Globally, your
                details are required.
              </Text>
              <Line className="bg-gray-100_03 h-px mt-4 w-full" />
              <div className="flex flex-col gap-3 items-start justify-start mt-[19px] pt-1 w-full">
                <Text
                  className="text-base text-gray-800_01 tracking-[0.50px]"
                  size="txtInterRegular16Gray80001"
                >
                  Your Proposed Company Name
                </Text>
                <Input
                  name="groupTwentySeven"
                  placeholder="Quicker"
                  className="!placeholder:text-gray-800_02 !text-gray-800_02 font-medium leading-[normal] p-0 text-left text-sm w-full"
                  wrapClassName="border border-blue-700_01 border-solid rounded-md shadow-bs5 w-full"
                  shape="round"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                ></Input>
              </div>
              <Text
                className="mt-[23px] text-base text-black-900_06 tracking-[0.50px]"
                size="txtInterRegular16Black90006"
              >
                Nature of Bussiness
              </Text>
              <Input
                name="groupTwentySix"
                placeholder="Tech company"
                className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                wrapClassName="mt-[13px] rounded-md w-full"
                shape="round"
                color="blue_gray_400"
                size="2xl"
                variant="outline"
              ></Input>
              <div className="flex flex-col gap-[13px] items-start justify-start mt-5 pt-[3px] w-full">
                <Text
                  className="text-base text-black-900_06 tracking-[0.50px]"
                  size="txtInterRegular16Black90006"
                >
                  Business Adress
                </Text>
                <Input
                  name="groupTwentyEight"
                  placeholder="Enter business address"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                  wrapClassName="rounded-md w-full"
                  shape="round"
                  color="blue_gray_400"
                  size="2xl"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[11px] pt-1 w-full">
                <Text
                  className="text-base text-black-900_06 tracking-[0.50px]"
                  size="txtInterRegular16Black90006"
                >
                  Company Email
                </Text>
                <Input
                  name="groupTwentyNine"
                  placeholder="Enter company email"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                  wrapClassName="rounded-md w-full"
                  type="email"
                  shape="round"
                  color="blue_gray_400"
                  size="2xl"
                  variant="outline"
                ></Input>
              </div>
              <Text
                className="mt-2.5 text-base text-gray-600_02"
                size="txtInterMedium16Gray60002"
              >
                Phone number
              </Text>
              <div className="bg-white-A700 border border-blue-700_01 border-solid flex flex-row items-center justify-start mb-[52px] mt-[13px] p-[22px] sm:px-5 rounded-md shadow-bs5 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start ml-2 w-[7%]">
                  <Img
                    className="h-[18px]"
                    src="images/img_close_teal_700.svg"
                    alt="close"
                  />
                </div>
                <SelectBox
                  className="sm:flex-1 font-medium leading-[normal] ml-3.5 text-blue_gray-400 text-left text-sm w-[15%] sm:w-full"
                  placeholderClassName="text-blue_gray-400"
                  indicator={
                    <Img
                      className="h-5 mr-[0] w-5"
                      src="images/img_carret_down.svg"
                      alt="carret - down"
                    />
                  }
                  isMulti={false}
                  name="groupSeventy"
                  options={optionsList}
                  isSearchable={false}
                  placeholder="+234"
                />
                <Text
                  className="ml-[35px] text-gray-800_02 text-sm"
                  size="txtInterMedium14"
                >
                  09012345997
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[426px] sm:min-w-full mt-[-19px] mx-auto rounded-md text-base text-center z-[1]"
              shape="round"
              color="blue_700_01"
              size="2xl"
              variant="fill"
            >
              Continue
            </Button>
          </div>
          <div className="flex flex-col gap-1 items-end justify-start md:ml-[0] ml-[311px] mr-2.5 w-auto">
            <Text
              className="text-gray-400_01 text-right text-sm w-auto"
              size="txtInterMedium14Gray40001"
            >
              STEP 02/03
            </Text>
            <Text
              className="text-base text-blue_gray-400 text-right w-auto"
              size="txtInterSemiBold16"
            >
              Company Info.
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-start mb-[271px] ml-14 md:ml-[0] p-[57px] md:px-5 w-[22%] md:w-full">
          <div className="flex flex-col gap-[46px] justify-start mb-[51px] mt-2.5 w-[95%] md:w-full">
            <div className="flex flex-col gap-1 items-end justify-start md:ml-[0] ml-[971px] w-auto">
              <Text
                className="text-gray-400_01 text-right text-sm w-auto"
                size="txtInterMedium14Gray40001"
              >
                STEP 01/03
              </Text>
              <Text
                className="text-base text-blue_gray-400 text-right w-auto"
                size="txtInterSemiBold16"
              >
                Directors and Shareholders details.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mr-[276px] w-[78%] md:w-full">
              <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterBold30"
                >
                  Complete Your Application
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start pt-[3px] w-[44%] md:w-full">
                    <Text
                      className="text-base text-gray-800_01 tracking-[0.50px]"
                      size="txtInterRegular16Gray80001"
                    >
                      Name
                    </Text>
                    <Input
                      name="language_One"
                      placeholder="Jovice "
                      className="!placeholder:text-gray-800_02 !text-gray-800_02 font-medium leading-[normal] p-0 text-left text-sm w-full"
                      wrapClassName="border border-blue-700_01 border-solid rounded-md shadow-bs5 w-full"
                      shape="round"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start pt-[3px] w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900_06 tracking-[0.50px]"
                      size="txtInterRegular16Black90006"
                    >
                      Email Address
                    </Text>
                    <Input
                      name="groupThirtySix"
                      placeholder="Enter email address"
                      className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                      wrapClassName="rounded-md w-full"
                      type="email"
                      shape="round"
                      color="blue_gray_400"
                      size="2xl"
                      variant="outline"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-11 w-full">
                <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start mb-[3px] pt-[3px] w-[45%] md:w-full">
                  <Text
                    className="text-base text-black-900_06 tracking-[0.50px]"
                    size="txtInterRegular16Black90006"
                  >
                    Address
                  </Text>
                  <Input
                    name="groupThirtyFour"
                    placeholder="Enter address"
                    className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                    wrapClassName="rounded-md w-full"
                    shape="round"
                    color="blue_gray_400"
                    size="2xl"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:mt-0 mt-[3px] pt-[3px] w-[45%] md:w-full">
                  <Text
                    className="text-base text-black-900_06 tracking-[0.50px]"
                    size="txtInterRegular16Black90006"
                  >
                    ID Address
                  </Text>
                  <Input
                    name="groupThirtyFive"
                    placeholder="82988482484"
                    className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                    wrapClassName="flex rounded-md w-full"
                    type="number"
                    suffix={
                      <Img
                        className="h-5 ml-[35px] my-auto"
                        src="images/img_circle_check_full.svg"
                        alt="circle check full"
                      />
                    }
                    shape="round"
                    color="blue_gray_400"
                    size="2xl"
                    variant="outline"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between mt-[50px] w-[67%] md:w-full">
                <Text
                  className="text-base text-gray-600_02"
                  size="txtInterMedium16Gray60002"
                >
                  Phone number
                </Text>
                <Text
                  className="text-base text-gray-600_02"
                  size="txtInterMedium16Gray60002"
                >
                  Date of Birth
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[13px] w-full">
                <div className="bg-white-A700 border border-black-900_7f border-solid flex flex-row items-center justify-start p-[22px] sm:px-5 rounded-md">
                  <div className="bg-white-A700 flex flex-col items-center justify-start ml-2 w-[7%]">
                    <Img
                      className="h-[18px]"
                      src="images/img_close_teal_700.svg"
                      alt="close_One"
                    />
                  </div>
                  <SelectBox
                    className="font-medium leading-[normal] ml-3.5 text-blue_gray-400 text-left text-sm w-[15%] sm:w-full"
                    placeholderClassName="text-blue_gray-400"
                    indicator={
                      <Img
                        className="h-5 mr-[0] w-5"
                        src="images/img_carret_down.svg"
                        alt="carret - down"
                      />
                    }
                    isMulti={false}
                    name="groupSeventyFour"
                    options={optionsList1}
                    isSearchable={false}
                    placeholder="+234"
                  />
                  <Text
                    className="ml-[35px] text-gray-800_02 text-sm"
                    size="txtInterMedium14"
                  >
                    09012345997
                  </Text>
                </div>
                <Input
                  name="groupThirty"
                  placeholder="Date of Birth"
                  className="!placeholder:text-gray-600_02 !text-gray-600_02 font-medium leading-[normal] p-0 text-base text-left w-full"
                  wrapClassName="border border-black-900_7f border-solid flex md:flex-1 rounded-md md:w-full"
                  prefix={
                    <div className="mb-px mr-7 bg-gray-700_02">
                      <Img
                        className="my-auto"
                        src="images/img_calendar_gray_700_02.svg"
                        alt="calendar"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                ></Input>
              </div>
              <SelectBox
                className="leading-[normal] mt-[69px] text-2xl md:text-[22px] text-black-900 text-left sm:text-xl w-[26%] sm:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-11 mr-[0] w-11"
                    src="images/img_carret_down_black_900.svg"
                    alt="carret - down"
                  />
                }
                isMulti={false}
                name="groupSeventyTwo"
                options={moreDirectorsOptionsList}
                isSearchable={false}
                placeholder="More Directors?"
              />
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[426px] sm:min-w-full md:ml-[0] ml-[369px] mt-[116px] rounded-md text-base text-center"
                shape="round"
                color="blue_700_01"
                size="2xl"
                variant="fill"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-start mb-[263px] md:ml-[0] ml-[248px] mr-[229px] md:mt-0 mt-2 p-[57px] md:px-5 w-[22%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[138px] justify-start mb-[51px] mt-2.5 w-[95%] md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[82px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-9 items-start justify-start sm:ml-[0] sm:mt-0 mt-[86px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterBold30"
                >
                  Complete Your Application
                </Text>
                <div className="flex flex-col gap-[26px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pb-[29px] pt-3 w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[23px] items-start justify-start w-auto sm:w-full">
                        <Text
                          className="leading-[160.00%] max-w-[516px] md:max-w-full text-base text-black-900_06 tracking-[0.50px]"
                          size="txtInterRegular16Black90006"
                        >
                          Amount of authorized share capital (N1,000,000 for
                          local companies and N10,000,000 if foreign shareholder
                          is involved)
                        </Text>
                        <Line className="bg-gray-600_03 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-3 pt-[30px] w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-start pb-[26px] w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-center w-auto sm:w-full">
                        <Text
                          className="text-base text-black-900_06 tracking-[0.50px] w-[349px]"
                          size="txtInterRegular16Black90006"
                        >
                          Details of company secretary (if applicable)
                        </Text>
                        <Line className="bg-gray-600_03 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start py-3 w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                      <Text
                        className="leading-[160.00%] max-w-[516px] md:max-w-full text-base text-gray-800_01 tracking-[0.50px]"
                        size="txtInterRegular16Gray80001"
                      >
                        Copies of ID documents of subscribers, directors,
                        secretary and shareholder representative (if applicable)
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <div className="border border-blue_gray-400_01 border-dashed flex flex-col items-center justify-center px-4 py-10 w-[548px] sm:w-full">
                        <div className="flex flex-row gap-6 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                          <Text
                            className="text-blue_gray-400_01 text-sm tracking-[0.50px] w-auto"
                            size="txtInterRegular14Bluegray40001"
                          >
                            Upload Additional file
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[10px] sm:text-[1px] text-blue_gray-400_01 tracking-[0.50px] w-auto"
                        size="txtInterRegular10"
                      >
                        Attach file. File size of your documents should not
                        exceed 10MB
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start mb-40 sm:ml-[0] w-full">
                <div className="flex flex-col md:gap-10 gap-[145px] justify-start w-full">
                  <div className="flex flex-col gap-1 items-end justify-start md:ml-[0] ml-[341px] w-auto">
                    <Text
                      className="text-gray-400_01 text-right text-sm w-auto"
                      size="txtInterMedium14Gray40001"
                    >
                      STEP 01/03
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtInterSemiBold16"
                    >
                      Directors and Shareholders details.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mr-[69px] pt-3 w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-start pb-4 w-full">
                      <div className="flex flex-col gap-[23px] items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-base text-black-900_06 tracking-[0.50px] w-auto"
                          size="txtInterRegular16Black90006"
                        >
                          Details of subscribers, directors and shareholder (if
                          applicable)
                        </Text>
                        <Line className="bg-gray-600_03 h-px w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start py-3 w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                    <Text
                      className="text-base text-gray-800_01 tracking-[0.50px] w-auto"
                      size="txtInterRegular16Gray80001"
                    >
                      Copies of incorporation documents of the parent company
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                    <div className="border border-blue_gray-400_01 border-dashed flex flex-col items-center justify-center px-4 py-10 w-[548px] sm:w-full">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                        <Text
                          className="text-blue_gray-400_01 text-sm tracking-[0.50px] w-auto"
                          size="txtInterRegular14Bluegray40001"
                        >
                          Upload Additional file
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-[10px] sm:text-[1px] text-blue_gray-400_01 tracking-[0.50px] w-auto"
                      size="txtInterRegular10"
                    >
                      Attach file. File size of your documents should not exceed
                      10MB
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[426px] sm:min-w-full md:ml-[0] ml-[369px] mr-[452px] rounded-md text-base text-center"
              shape="round"
              color="blue_700_01"
              size="2xl"
              variant="fill"
            >
              Sumbit and pay
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationdetailsPage;
