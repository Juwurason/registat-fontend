import React from "react";

const sizeClasses = {
  txtInterRegular18Black90007: "font-inter font-normal",
  txtManropeBold215: "font-bold font-manrope",
  txtPublicSansSemiBold15: "font-publicsans font-semibold",
  txtDMSansBold24WhiteA700: "font-bold font-dmsans",
  txtDMSansRegular16Black9007f: "font-dmsans font-normal",
  txtDMSansRegular16Teal900: "font-dmsans font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtDMMonoMedium32Amber700: "font-dmmono font-medium",
  txtInterRegular7: "font-inter font-normal",
  txtInterMedium16Gray60002: "font-inter font-medium",
  txtMulishRegular16: "font-mulish font-normal",
  txtInterRegular22: "font-inter font-normal",
  txtRubikMedium35: "font-medium font-rubik",
  txtDMMonoLight14: "font-dmmono font-light",
  txtLatoMedium1672Black90005: "font-lato font-medium",
  txtInterRegular10: "font-inter font-normal",
  txtRubikRegular16: "font-normal font-rubik",
  txtMontserratRomanBold21Black900: "font-bold font-montserrat",
  txtDMMonoMedium32: "font-dmmono font-medium",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRubikRegular18: "font-normal font-rubik",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtInterMedium16Black90007: "font-inter font-medium",
  txtLatoMedium1672: "font-lato font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
  txtMontserratRomanBold21Amber70001: "font-bold font-montserrat",
  txtUrbanistRomanBold20: "font-bold font-urbanist",
  txtInterRegular16Black90006: "font-inter font-normal",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtDMSansBold24: "font-bold font-dmsans",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtDMMonoMedium48: "font-dmmono font-medium",
  txtInterRegular16Red500: "font-inter font-normal",
  txtPoppinsSemiBold35: "font-poppins font-semibold",
  txtDMSansRegular16Amber700: "font-dmsans font-normal",
  txtInterLight14: "font-inter font-light italic",
  txtDMMonoRegular32: "font-dmmono font-normal",
  txtInterRegular16Gray50004: "font-inter font-normal",
  txtAlataRegular24: "font-alata font-normal",
  txtDMSansBold34: "font-bold font-dmsans",
  txtDMSansRegular9: "font-dmsans font-normal",
  txtInterBold32: "font-bold font-inter",
  txtInterMedium36: "font-inter font-medium",
  txtDMSansMedium16: "font-dmsans font-medium",
  txtRobotoRegular13: "font-normal font-roboto",
  txtSansSerif11Amber700: "font-normal font-sansserif",
  txtInterBold30: "font-bold font-inter",
  txtDMSansMedium14: "font-dmsans font-medium",
  txtDMMonoRegular40: "font-dmmono font-normal",
  txtInterMedium18Black90007: "font-inter font-medium",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtManropeBold1911: "font-bold font-manrope",
  txtPoppinsMedium14Amber700: "font-medium font-poppins",
  txtSansSerif15Gray50002: "font-normal font-sansserif",
  txtInterRegular16Gray80001: "font-inter font-normal",
  txtMontserratRomanBold21: "font-bold font-montserrat",
  txtInterRegular14Gray50004: "font-inter font-normal",
  txtPoppinsMedium36: "font-medium font-poppins",
  txtSansSerif33: "font-normal font-sansserif",
  txtInterBold20: "font-bold font-inter",
  txtInterMedium30: "font-inter font-medium",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtInterMedium16Gray50004: "font-inter font-medium",
  txtInterExtraBold32Black900: "font-extrabold font-inter",
  txtDMSansMedium16Indigo200: "font-dmsans font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterMedium14Gray40001: "font-inter font-medium",
  txtDMSansBold34Indigo90001: "font-bold font-dmsans",
  txtInterBold14: "font-bold font-inter",
  txtInterSemiBold13Black900: "font-inter font-semibold",
  txtUrbanistRomanSemiBold14: "font-semibold font-urbanist",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtManropeBold2389: "font-bold font-manrope",
  txtSansSerif20: "font-normal font-sansserif",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoSemiBold32: "font-roboto font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPublicSansMedium13: "font-medium font-publicsans",
  txtInterRegular14Bluegray40001: "font-inter font-normal",
  txtPublicSansRegular15Teal900: "font-normal font-publicsans",
  txtPublicSansRegular15Bluegray500: "font-normal font-publicsans",
  txtRubikMedium96: "font-medium font-rubik",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtSansSerif11: "font-normal font-sansserif",
  txtSansSerif13: "font-normal font-sansserif",
  txtSansSerif15Gray90003: "font-normal font-sansserif",
  txtSansSerif15: "font-normal font-sansserif",
  txtInterExtraBold32: "font-extrabold font-inter",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtLatoSemiBold32: "font-lato font-semibold",
  txtDMMonoMedium15: "font-dmmono font-medium",
  txtRubikBold16: "font-bold font-rubik",
  txtSansSerif11Gray50002: "font-normal font-sansserif",
  txtLatoRegular1672: "font-lato font-normal",
  txtInterSemiBold13: "font-inter font-semibold",
  txtPublicSansRegular15: "font-normal font-publicsans",
  txtInterBold32Black90004: "font-bold font-inter",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtDMSansMedium16Indigo50: "font-dmsans font-medium",
  txtManropeBold1672: "font-bold font-manrope",
  txtDMSansMedium14Indigo200: "font-dmsans font-medium",
  txtManropeBold1433: "font-bold font-manrope",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtDMSansRegular15: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };