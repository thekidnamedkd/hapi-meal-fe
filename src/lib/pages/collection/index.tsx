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
  Container,
  SimpleGrid,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { chains } from "@web3modal/ethereum";
import { Web3Modal, Web3Button, useAccount } from "@web3modal/react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect, useState, useCallback, MouseEventHandler } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";
import {
  NFT_MAPPING,
  BACKEND_API_URI,
  AUTH_TOKEN_HAPI_MEAL_KEY,
} from "../../constants";

const config: any = {
  projectId: "58d47adddd7075aff19f19004b8fc882",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "lobster",
    chains: [chains.polygonMumbai],
  },
};

type Inputs = {
  adddress: string;
};

type ConnectionBlockProps = {
  id: number;
};
const ConnectionBlock = ({ id }: ConnectionBlockProps) => {
  return (
    <Box height="100%" width="100%">
      <Link href={`/collection/${id}`}>
        <Image
          style={{ borderRadius: "15px" }}
          src={NFT_MAPPING[id].imgPath}
          objectFit="contain"
        />
      </Link>
    </Box>
  );
};

const Collection = () => {
  const { account } = useAccount();
  // TODO: pull NFTs in wallet from database and render here
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCollection, setUserCollection] = useState<any>([]);
  const router = useRouter();

  const fetchUserCollection = useCallback(async (authToken: string) => {
    try {
      const res = await axios.get(`${BACKEND_API_URI}/collectibles`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (res.data == null || res.data.length === 0) {
        setUserCollection([]);
      } else {
        setUserCollection(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN_HAPI_MEAL_KEY);
    if (authToken == null) {
      return;
    }
    fetchUserCollection(authToken);
  }, [fetchUserCollection]);

  const renderConnectionBlocks = () => {
    if (userCollection == null || userCollection.length === 0) {
      return "Empty collection ...";
    }
    return userCollection.map((data: any, idx: any) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation, react/no-array-index-key
      return <ConnectionBlock id={data["collectionId"]} key={idx} />;
    });
  };

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      console.log(account.address)
      const dataBody = {
        toAddress: account.address
      }
      const dataJSON = JSON.stringify(dataBody);

      const authToken = localStorage.getItem(AUTH_TOKEN_HAPI_MEAL_KEY);

      const res = await axios.post(`${BACKEND_API_URI}/export`, dataJSON, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        },
      });
      console.log(res);
      console.log(`Successfully exported to: ${dataBody.toAddress}`);
      router.push("/collection");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex direction="column" gap={4} mb={8} w="100%">
      <NextSeo title="View Treat" />
      <Flex w="full">
        <Text fontSize="4xl">Your Collection</Text>
      </Flex>

      <SimpleGrid columns={2} spacing={2.5}>
        {renderConnectionBlocks()}
      </SimpleGrid>

      <Flex w="full" justifyContent="center">
        {/* TODO: hook up end point to export wallet to another wallet */}
        <Button onClick={onOpen} w="max-content">
          Export Entire Collection
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent mx="3" bg="rgba(0,0,0,0.8)">
          <ModalHeader>
            <Web3Button />
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Web3Modal config={config} />
            <Flex w="full" pb="5">
              <Heading fontSize="4xl">Export Collectibles</Heading>
            </Flex>
            <Container mx="auto" pb="5">
              <FormControl>
                <FormLabel>Wallet Address</FormLabel>
                <Input
                  type="string"
                  readOnly
                  value={account.isConnected ? account.address : ""}
                />
                <Center>
                  <Button mt={4} colorScheme="orange" type="submit" onClick={onSubmit}>
                    Submit
                  </Button>
                </Center>
              </FormControl>
            </Container>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Collection;
