import { Link, VStack } from "@chakra-ui/react";

import McLogo from "../../../public/mcdeueps_logo.svg";

const Footer = () => {
  return (
    <VStack>
      <Link href="https://hapimeal.lol" isExternal rel="noopener noreferrer">
        <McLogo />
      </Link>
    </VStack>
  );
};

export default Footer;
