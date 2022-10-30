import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import HeaderImage from "../../../public/top_header.png";
import UserAccess from "lib/components/ui/UserAccess";

const Header = () => {
  return (
    <>
      <UserAccess />
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
