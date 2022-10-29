import { Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";

import Logo from "../../../public/hapi_logo.svg";

const Header = () => {
  return (
    <HStack
      as="header"
      justifyContent="space-between"
      width="full"
      align="center"
    >
      <HStack>
        <Logo />
        <Link href="/">
          <a>
            <Heading>HAPI MEAL</Heading>
          </a>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
