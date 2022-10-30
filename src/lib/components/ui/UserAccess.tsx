import { Link, Text, HStack, Spacer } from "@chakra-ui/react";

function UserAccess() {
  return (
    <HStack w="100%" justifyContent="end">
      <Spacer />
      <Text>
        <Link style={{ marginRight: "8px", textDecoration: "underline" }} href="/signup">
          Sign up
        </Link>{" "}
        or{" "}
        <Link style={{ marginLeft: "8px", textDecoration: "underline" }} href="/login">
          Login
        </Link>
      </Text>
    </HStack>
  );
}

export default UserAccess;
