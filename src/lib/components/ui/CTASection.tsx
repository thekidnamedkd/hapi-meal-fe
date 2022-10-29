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

import QR from "../../../../public/hapimeal_qr.svg";
import Horrors from "../../../../public/horrors_copy.png";

const CTASection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack minH="max-content" spacing="12">
      <Image src={Horrors} />
      <Button>TRICK OR TREAT</Button>
      <Button onClick={onOpen} variant="none">
        <a>Share</a>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent top="25%" bg="#2a2a2a">
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody mx="auto">
            <QR />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
      <Spacer />
    </VStack>
  );
};

export default CTASection;
