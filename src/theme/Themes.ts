import { SchemeColors } from "../GlobalStyles";

import LightDeskBg from "../assets/bg-desktop-light.jpg";
import LightMobileBg from "../assets/bg-mobile-light.jpg";
import DarkDeskBg from "../assets/bg-desktop-dark.jpg";
import DarkMobileBg from "../assets/bg-mobile-dark.jpg";
import { DefaultTheme } from "styled-components/dist/types";

const lightColors = {
  VeryLightGray: "hsl(0, 0%, 98%)",
  VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
  LightGrayishBlue: "hsl(233, 11%, 84%)",
  DarkGrayishBlue: "hsl(236, 9%, 61%)",
  VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
};
const lightTheme: DefaultTheme = {
  name: "light",
  bgImageDesk: LightDeskBg,
  bgImageMobile: LightMobileBg,
  bgColor: lightColors.VeryLightGray,
  borderColor: lightColors.VeryLightGrayishBlue,
  fontColor: "hsla(235, 14%, 26%, 1)",
  buttonFontColor: lightColors.DarkGrayishBlue,
  buttonHoverFontColor: lightColors.VeryDarkGrayishBlue,
  shadowColor: "rgba(194, 195, 214, 0.50)",
  listBgColor: "#fff",
  doneFontColor: lightColors.LightGrayishBlue,
};
const darkColors = {
  VeryDarkBlue: "hsl(235, 21%, 11%)",
  VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
  LightGrayishBlue: "hsl(234, 39%, 85%)",
  LightGrayishBluehover: "hsl(236, 33%, 92%)",
  DarkGrayishBlue: "hsl(234, 11%, 52%)",
  VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
  VeryDarkGrayishBlue2: " hsl(237, 14%, 26%)",
};

const darkTheme: DefaultTheme = {
  name: "dark",
  bgImageDesk: DarkDeskBg,
  bgImageMobile: DarkMobileBg,
  listBgColor: darkColors.VeryDarkDesaturatedBlue,
  fontColor: darkColors.LightGrayishBlue,
  bgColor: darkColors.VeryDarkBlue,
  borderColor: "hsla(235, 14%, 26%, 1)",
  shadowColor: "rgba(0, 0, 0, 0.50)",
  buttonFontColor: "hsla(235, 16%, 42%, 1)",
  buttonHoverFontColor: darkColors.LightGrayishBluehover,
  doneFontColor: darkColors.VeryDarkGrayishBlue,
};

export const themeMap = {
  light: { ...SchemeColors, ...lightTheme },
  dark: { ...SchemeColors, ...darkTheme },
};
