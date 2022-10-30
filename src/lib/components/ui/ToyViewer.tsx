import { VStack, Heading, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";

import Fallback from "../../../../public/fallback.png";

type Props = {
  id: string;
};

const ToyViewer = ({ id }: Props) => {
  return (
    <HStack justifyContent="center">
      <VStack alignItems="start">
        <Image style={{ borderRadius: "10px" }} id={id} src={Fallback} />

        <Heading>TOY NAME - TOY ID: {`${id}`}</Heading>
        <Text>TOY DESCRIPTION</Text>
      </VStack>
    </HStack>
  );
};

export default ToyViewer;
