import type { DeepPartial, Theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
};

const customColors = {
  global: (props: any) => ({
    body: {
      color: mode("black", "black")(props),
      bg: mode("#000000", "#000000")(props),
    },
  }),
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  customColors,
  ...overridenChakraColors,
  ...extendedColors,
};
