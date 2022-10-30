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

type Inputs = {
  email: string;
  password: string;
  exampleRequired: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
