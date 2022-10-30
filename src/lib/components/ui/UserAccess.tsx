import { Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";

function UserAccess() {
  return (
    <HStack w="100%" justifyContent="end">
      <Spacer />
      <Text>
        <Link href="/signup">
          <a style={{ textDecoration: "underline", marginRight: "8px" }}>
            Sign up
          </a>
        </Link>{" "}
        or{" "}
        <Link href="/login">
          <a style={{ textDecoration: "underline", marginLeft: "8px" }}>
            Login
          </a>
        </Link>
      </Text>
    </HStack>
  );
}

export default UserAccess;
