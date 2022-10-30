import { Box, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <VStack>
        <Header />
        <Box w="full" as="main">
          {children}
        </Box>
        <Footer />
      </VStack>
    </Box>
  );
};

export default Layout;
