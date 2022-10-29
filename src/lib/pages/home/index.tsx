import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/ui/CTASection";

const Home = () => {
  return (
    <Flex direction="column" minH="50vh" gap={4} mb={8} w="full">
      <NextSeo title="Home" />

      <CTASection />
    </Flex>
  );
};

export default Home;
