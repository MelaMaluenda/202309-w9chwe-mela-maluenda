import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: {
      offWhite: string;
      cream: string;
      darkBrown: string;
      red: string;
      garnet: string;
      orange: string;
      yellow: string;
      lime: string;
      turquoise: string;
    };

    tpography: {
      mainFamily: string;
      regularFamily: string;
      placeholderFamily: string;
      mainSize: string;
      titleSize: string;
      regularSize: string;
      formSize: string;
      smallSize: string;
    };
  }
}
