import { VStack, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

import Fallback from "../../../../public/fallback.png";

type Props = {
  id: string;
};

const ToyViewer = ({ id }: Props) => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="start"
      >
        <Image style={{ borderRadius: "10px" }} id={id} src={Fallback} />
      </Flex>
      <VStack alignItems="start">
        <Heading>TOY NAME - TOY ID: {`${id}`}</Heading>
        <Text>TOY DESCRIPTION</Text>
      </VStack>
    </>
  );
};

export default ToyViewer;
