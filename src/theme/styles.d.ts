import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: ThemeName;
    bgImageDesk: string;
    bgImageMobile: string;
    bgColor: string;
    listBgColor: string;
    fontColor: string;
    borderColor: string;
    shadowColor: string;
    buttonFontColor: string;
    buttonHoverFontColor: string;
    doneFontColor: string;
  }
}
