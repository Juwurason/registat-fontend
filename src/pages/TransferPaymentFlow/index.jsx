import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import TransferPaymentFlowExpires from "components/TransferPaymentFlowExpires";

const TransferPaymentFlowPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter gap-[18px] items-start mx-auto md:pl-10 sm:pl-5 pl-[130px] w-full">
        <div className="flex flex-col items-start justify-start md:mt-0 mt-[75px] p-12 md:px-10 sm:px-5 w-auto sm:w-full">
          <div className="flex flex-col gap-[58px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-9 items-start justify-start w-auto sm:w-full">
              <Input
                name="frame113"
                placeholder="Payment"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_07 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
                wrapClassName="w-full"
                color="gray_500_04"
                size="lg"
                variant="underline"
              ></Input>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-black-900_07 text-lg w-[82px]"
                  size="txtInterSemiBold18"
                >
                  Pay With:
                </Text>
                <div className="flex flex-row gap-[19px] items-start justify-start w-auto">
                  <div
                    className="common-pointer flex flex-row gap-2 items-center justify-center w-auto"
                    onClick={() => navigate("/cardpaymentflow")}
                  >
                    <div className="h-[15px] outline outline-[2px] outline-gray-500_04 rounded-[7px] w-[15px]"></div>
                    <Text
                      className="text-base text-gray-500_04 w-auto"
                      size="txtInterMedium16Gray50004"
                    >
                      Card
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex flex-row gap-2 items-center justify-center w-auto"
                    onClick={() => navigate("/bankpaymentflow")}
                  >
                    <div className="h-[15px] outline outline-[2px] outline-gray-500_04 rounded-[7px] w-[15px]"></div>
                    <Text
                      className="text-base text-gray-500_04 w-auto"
                      size="txtInterMedium16Gray50004"
                    >
                      Bank
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <Text
                      className="text-base text-black-900_07 w-auto"
                      size="txtInterMedium16Black90007"
                    >
                      Transfer
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[31px] justify-start w-[47%] md:w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[13px] w-[95%] md:w-full">
                  <Text
                    className="text-base text-gray-500_04"
                    size="txtInterRegular16Gray50004"
                  >
                    Transfer USD49.80 to:
                  </Text>
                  <div className="flex flex-col gap-[5px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[26px] text-black-900_07 text-lg"
                      size="txtInterSemiBold18"
                    >
                      Polaris Bank
                    </Text>
                    <div className="flex flex-row items-start justify-end w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_07 sm:text-xl w-auto"
                        size="txtInterSemiBold24"
                      >
                        030303030030
                      </Text>
                      <Img
                        className="h-4 w-[15px]"
                        src="images/img_copy05.svg"
                        alt="copyFive"
                      />
                    </div>
                  </div>
                </div>
                <TransferPaymentFlowExpires className="flex flex-row items-start justify-start pr-1.5 w-[89%] md:w-full" />
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start w-auto sm:w-full">
                <Button
                  className="!text-gray-100_04 cursor-pointer font-bold text-base text-center w-[476px]"
                  shape="round"
                  color="teal_900"
                  size="lg"
                  variant="fill"
                >
                  Confrm Payment
                </Button>
                <Text
                  className="leading-[22.00px] max-w-[475px] md:max-w-full text-gray-500_04 text-sm"
                  size="txtInterRegular14Gray50004"
                >
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50_06 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-[18px] md:px-5 w-[55%] md:w-full">
          <div className="flex flex-col gap-9 items-start justify-start mb-[278px] mt-[57px] p-12 md:px-10 sm:px-5 w-auto md:w-full">
            <Input
              name="frame121"
              placeholder="Payment Summary"
              className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_07 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
              wrapClassName="w-[94%]"
              color="gray_500_04"
              size="lg"
              variant="underline"
            ></Input>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-48 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-black-900_07 text-lg w-[198px]"
                      size="txtInterMedium18Black90007"
                    >
                      company incorporation
                    </Text>
                    <Text
                      className="text-black-900_07 text-lg w-[62px]"
                      size="txtInterMedium18Black90007"
                    >
                      $49.80
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center w-[466px] sm:w-full">
              <div className="flex flex-row items-start justify-between w-[466px] sm:w-full">
                <Text
                  className="text-black-900_07 text-lg w-[98px]"
                  size="txtInterMedium18Black90007"
                >
                  Trade mark
                </Text>
                <Text
                  className="text-black-900_07 text-lg w-[62px]"
                  size="txtInterMedium18Black90007"
                >
                  $49.80
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-[206px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-black-900_07 text-lg w-[119px]"
                  size="txtInterMedium18Black90007"
                >
                  Bank Account
                </Text>
                <Text
                  className="text-black-900_07 text-lg w-[62px]"
                  size="txtInterMedium18Black90007"
                >
                  $49.80
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-9 items-start justify-start w-auto sm:w-full">
              <Line className="bg-gray-500_04 h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <Input
                  name="frameSixtyEight"
                  placeholder="Gift or discount code"
                  className="p-0 placeholder:text-gray-500_04 text-base text-left w-full"
                  wrapClassName="outline outline-[1px] outline-gray-500_04 rounded w-[78%] sm:w-full"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer font-medium min-w-[92px] outline outline-[1px] outline-gray-500_04 text-base text-center"
                  shape="round"
                  color="gray_500_04"
                  size="lg"
                  variant="fill"
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <Line className="bg-gray-500_04 h-px w-full" />
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-[346px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-black-900_07 w-16"
                    size="txtInterMedium16Black90007"
                  >
                    Subtotal
                  </Text>
                  <Text
                    className="text-base text-black-900_07 w-[55px]"
                    size="txtInterMedium16Black90007"
                  >
                    $49.80
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <Line className="bg-gray-500_04 h-px w-[94%]" />
              <div className="flex flex-row gap-[183px] items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_07 w-[38px]"
                    size="txtInterMedium16Black90007"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-gray-500_04 text-sm w-[157px]"
                    size="txtInterRegular14Gray50004"
                  >
                    Including $2.24 in taxes
                  </Text>
                </div>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_07 w-[135px]"
                  size="txtInterMedium36"
                >
                  $147.28
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferPaymentFlowPage;
