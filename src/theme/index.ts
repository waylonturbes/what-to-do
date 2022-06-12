import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const overrides = {
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: "cyan" })
);
