import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: ThemeName;
    bgImageDesk: string;
    bgImageMobile: string;
    bgColor: string;
    colors: any;
  }
}
