import { Link, Text, HStack, Spacer } from "@chakra-ui/react";

function UserAccess() {
  return (
    <HStack w="100%" justifyContent="end">
      <Spacer />
      <Text>
        <Link href="/signup">
          <a style={{ marginRight: "8px", textDecoration: "underline" }}>
            Sign up
          </a>
        </Link>{" "}
        or{" "}
        <Link href="/login">
          <a style={{ marginLeft: "8px", textDecoration: "underline" }}>
            Login
          </a>
        </Link>
      </Text>
    </HStack>
  );
}

export default UserAccess;
