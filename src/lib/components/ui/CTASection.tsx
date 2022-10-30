import {
  Button,
  Spacer,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import QR from "../../../../public/hapimeal_qr.svg";
import Horrors from "../../../../public/horrors_copy.png";

const CTASection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack minH="max-content" spacing="12">
      <Image src={Horrors} />
      <Link href="/collectible">
        <Button variant="big" fontSize={{ sm: "28px" }}>
          TRICK OR TREAT
        </Button>
      </Link>
      <Button
        onClick={onOpen}
        variant="none"
        fontWeight="normal"
        textDecoration="underline"
      >
        <a>Share</a>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="sm"
          borderRadius="50px"
          top="25%"
          mx="3"
          bg="#2a2a2a"
        >
          <ModalHeader mb="5" />
          <ModalCloseButton p="6" right="2rem" />
          <ModalBody mx="auto">
            <QR />
          </ModalBody>
          <ModalFooter justifyContent="center" style={{ wordSpacing: ".3rem" }}>
            SHARE A HAPI MEAL
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Spacer />
    </VStack>
  );
};

export default CTASection;
