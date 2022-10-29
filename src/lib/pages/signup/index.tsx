import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import SignupForm from "lib/components/ui/SignupForm";

const Signup = () => {
  return (
    <Flex direction="column" gap={4} mb={8} w="full">
      <NextSeo title="View Treat" />

      <SignupForm />
    </Flex>
  );
};

export default Signup;
