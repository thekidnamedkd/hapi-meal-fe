import { useEffect } from "react";
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
    Container
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import Image from "next/image";
import ToyViewer from "../../../lib/components/ui/ToyViewer";
import { NFT_MAPPING } from "../../../lib/constants";
import fallbackIMG from "../../../../public/fallback.png";

const CollectionItem = () => {
    const router = useRouter();
    const {nftName} = router.query;
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        console.log(router.query);
      }, [router.query]);

    return (
        <>
            <Flex direction="column" gap={4} mb={8} w="100%">
                <NextSeo title="View Treat" />        
                <ToyViewer nftName={nftName} />
                <Center>
                    <Button onClick={onOpen} w="25%">
                        Send
                    </Button>
                </Center>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent mx="3" bg="rgba(0,0,0,0.8)">
                    <ModalHeader/>
                    <ModalCloseButton />
                    <ModalBody >
                        <Flex w="full" pb="5">
                            <Heading fontSize='4xl'>Send Collectible</Heading>
                        </Flex>
                        <Flex mb="5">
                            <Container flexGrow={1} w="50%">
                                <Image style={{"borderRadius": "15px"}} src={nftName ? NFT_MAPPING[nftName]["imgPath"] : fallbackIMG} objectFit='contain'/>
                            </Container>
                            <Flex flexGrow={2} direction="column" gap={2} w="50%">
                                <Heading fontSize='3xl'>{nftName ? NFT_MAPPING[nftName]["title"] : "Loving Clown"} </Heading>
                                <Text fontSize='xl'>{nftName ? NFT_MAPPING[nftName]["description"] : "Description"}</Text>
                            </Flex>
                        </Flex>
                        <Container mx="auto" pb="5">
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email' />
                                <Center mx="auto">
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
                        <Center>
                            <Link>or Send Via Blockchain</Link>    
                        </Center>
                        
                    </ModalBody>
                    <ModalFooter/>
                    </ModalContent>
                </Modal>
            </Flex>
        </>
      );
}

export default CollectionItem;