/* eslint-disable import/order */
import { Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useContext, useState } from "react";

import {CredentialContext} from "../../contexts";

export default function UserAccess() {
  
  // {email: 'AAAadfa@gmail.com', password: 'asdfasdf1Avb'}
  const { credential, setCredential} = useContext(CredentialContext);;
  console.log("json credentials >>>", credential);
  if (credential.email !== "" && credential.password !== "") {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment      
      <HStack w="100%" justifyContent="end" pt="15px">
        <Link href="/collection" style={{ textDecoration: "underline", marginRight: "8px" }}>            
              My Collection            
        </Link>
        <Text style={{textDecoration: "underline", marginLeft: "8px" }}>
            {`${credential.email}`}
        </Text>
      </HStack>
    );
  } else {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment      
      <HStack w="100%" justifyContent="end" pt="15px">
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
}

