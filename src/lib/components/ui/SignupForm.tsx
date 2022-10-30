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
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";

import {BACKEND_API_URI, AUTH_TOKEN_HAPI_MEAL_KEY} from "../../constants";

type Inputs = {
  email: string;
  password: string;
  exampleRequired: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const dataJSON = JSON.stringify({
        email: data.email,
        password: data.password
      })

      const res = await axios.post(`${BACKEND_API_URI}/sign_up`, dataJSON, {
        headers: {
          "Content-Type": "application/json"
        }        
      });

      localStorage.setItem(AUTH_TOKEN_HAPI_MEAL_KEY, res.data.auth_token);
      console.log(`Successfully signed up: ${res.data.auth_token}`);
    } catch (error) {
      console.log(error)
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
      <Heading mb="5">Register</Heading>
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
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              message:
                "One uppercase, one lowercase, one number, & between 5-16 chars",
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
