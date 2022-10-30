/* eslint-disable sonarjs/prefer-immediate-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Button,
  Flex,
  Center,
  Modal,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";

import fallbackIMG from "../../../../public/fallback.png";
import ToyViewer from "../../../lib/components/ui/ToyViewer";

const CollectionItem = ({
  toy,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Number(id);

  const { imageUri, name, description } = toy;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" gap={4} mb={8} w="100%">
      <NextSeo title="View Treat" />
      <ToyViewer id={parsedId} />
      <Center>
        <Button onClick={onOpen} w="25%">
          Send
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent mx="3" bg="rgba(0,0,0,0.8)">
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <Flex w="full" pb="5">
              <Heading fontSize="4xl">Send Collectible</Heading>
            </Flex>
            <Flex mb="5">
              <Container flexGrow={1} w="50%">
                <Image
                  style={{ borderRadius: "15px" }}
                  src={id ? imageUri : fallbackIMG}
                  objectFit="contain"
                />
              </Container>
              <Flex flexGrow={2} direction="column" gap={2} w="50%">
                <Heading fontSize="3xl">{id ? name : "Name"}</Heading>
                <Text fontSize="xl">{id ? description : "Description"}</Text>
              </Flex>
            </Flex>
            <Container mx="auto" pb="5">
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <Center mx="auto">
                  <Button mt={4} colorScheme="orange" type="submit">
                    Submit
                  </Button>
                </Center>
              </FormControl>
            </Container>
            <Center>
              <Link>or Send Via Blockchain</Link>
            </Center>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CollectionItem;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;

  if (typeof id === "string") {
    const toy = await fetch(
      `https://hapi-meal-api.herokuapp.com/collections/${id}`
    ).then(async (res) => {
      const result = await res.json();
      console.log("rroo", result);

      return result;
    });

    if (!toy.collectionId) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        toy,
      },
    };
  }

  return {
    notFound: true,
  };
}
