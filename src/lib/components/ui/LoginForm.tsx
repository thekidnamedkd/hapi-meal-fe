/* eslint-disable no-useless-escape */
import {
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Box,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { BACKEND_API_URI, AUTH_TOKEN_HAPI_MEAL_KEY } from "../../constants";
import {CredentialContext} from "../../contexts";

type Inputs = {
  email: string;
  password: string;
  exampleRequired: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { toyId } = router.query;
  const { credential, setCredential} = useContext(CredentialContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // username: as@9jkck-1.com
    // password: 234asdvV
    try {
      const dataBody = {
        email: data.email,
        password: data.password,
      }
      const dataJSON = JSON.stringify(dataBody);

      const res = await axios.post(`${BACKEND_API_URI}/sign_in`, dataJSON, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem(AUTH_TOKEN_HAPI_MEAL_KEY, res.data.auth_token);
      setCredential(dataBody);

      if (toyId) {
        await axios({
          url: `${BACKEND_API_URI}/collections/${toyId}`,
          method: "post",
          headers: {
            Authorization: `Bearer ${res.data.auth_token}`,
          },
        });

        router.push(`/collection/${toyId}`);
      } else {
        router.push("/collection");
      }
      console.log(`Successfully logged in: ${res.data.auth_token}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="100%"
      background="#191919"
      p="20"
      borderRadius="50px"
      display="flex"
      flexDirection="column"
    >
      <Heading mb="5">Login</Heading>
      <FormControl isInvalid={Boolean(errors.email)} mb="5">
        <FormLabel>Email</FormLabel>
        <Input
          {...register("email", {
            required: {
              value: true,
              message: "Please enter your email address.",
            },
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Please enter a valid email address.",
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.password)} mb="5">
        <FormLabel>Password</FormLabel>
        <Input
          {...register("password", {
            required: {
              value: true,
              message: "Please enter a password.",
            },
          })}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <HStack justifyContent="end">
        <Button type="submit" w="max-content">
          Submit
        </Button>
      </HStack>
    </Box>
  );
}
