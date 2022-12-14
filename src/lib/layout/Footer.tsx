import { Link, VStack } from "@chakra-ui/react";
import Image from "next/image";

import McLogo from "../../../public/mcdeueps_logo.png";

const Footer = () => {
  return (
    <VStack maxW="220px">
      <Link href="https://hapimeal.lol" isExternal rel="noopener noreferrer">
        <Image src={McLogo} />
      </Link>
    </VStack>
  );
};

export default Footer;
