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
  useDisclosure
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Image from "next/image";

import { NFT_MAPPING } from "../../constants";

type ConnectionBlockProps = {
    nftItem: string
}
const ConnectionBlock = ({nftItem}: ConnectionBlockProps) => {
    return (
        <Box height="100%" width="100%">
            <Link href={`/collection/${nftItem}`}>
                <Image style={{"borderRadius": "15px"}} src={NFT_MAPPING[nftItem]["imgPath"]} objectFit='contain'/>
            </Link>
        </Box>
    )
}
const Collection = () => {
  // TODO: pull NFTs in wallet from database and render here
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" gap={4} mb={8} w="100%">
      <NextSeo title="View Treat" />

      <Flex w="full">
        <Text fontSize="4xl">Your Collection</Text>
      </Flex>

      <SimpleGrid columns={2} spacing={2.5}>
        <ConnectionBlock nftItem="crystal-skologna"/>
        <ConnectionBlock nftItem="fry-guy"/>
        <ConnectionBlock nftItem="loving-clown-parent"/>
        <ConnectionBlock nftItem="master-chef"/>
        <ConnectionBlock nftItem="murderous-arnold"/>
        <ConnectionBlock nftItem="nose-man-brime-man"/>
      </SimpleGrid>

      <Flex w="full">
        {/* TODO: hook up end point to export wallet to another wallet */}
        <Button onClick={onOpen} w="25%">
          Export Entire Collection 
                    </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent mx="3" bg="rgba(0,0,0,0.8)">
                    <ModalHeader/>
                    <ModalCloseButton />
                    <ModalBody >
                        <Flex w="full" pb="5">
                            <Heading fontSize='4xl'>Export Collectibles</Heading>
                        </Flex>
                        <Container mx="auto" pb="5">
                            <FormControl>
                                <FormLabel>Wallet Address</FormLabel>
                                <Input type='string' />
                                <Center>
                                    <Button
                                        mt={4}
                                        colorScheme='orange'
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </Center>                            
                            </FormControl>
                        </Container>

                        
                    </ModalBody>
                    <ModalFooter/>
                    </ModalContent>
                </Modal>
    </Flex>
  );
};

export default Collection;
