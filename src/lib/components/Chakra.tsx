import { ChakraProvider } from "@chakra-ui/react";

import theme from "lib/styles/theme/theme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
