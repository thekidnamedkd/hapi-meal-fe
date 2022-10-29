import { HStack, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import HeaderImage from "../../../public/top_header.png";

const Header = () => {
  return (
    <>
      <HStack w="100%" justifyContent="end">
        <Spacer />
        <Text>
          <Link href="/signin">
            <a style={{ textDecoration: "underline" }}>Sign up</a>
          </Link>{" "}
          or{" "}
          <Link href="/login">
            <a style={{ textDecoration: "underline" }}>Login</a>
          </Link>
        </Text>
      </HStack>
      <HStack justifyContent="center">
        <Link href="/">
          <a style={{ paddingRight: "6%" }}>
            <Image src={HeaderImage} />
          </a>
        </Link>
      </HStack>
    </>
  );
};

export default Header;
