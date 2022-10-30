import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import LoginForm from "lib/components/ui/LoginForm";

const Login = () => {
  return (
    <Flex direction="column" gap={4} mb={8} w="full">
      <NextSeo title="Login" />

      <LoginForm />
    </Flex>
  );
};

export default Login;
