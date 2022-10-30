/* eslint-disable @typescript-eslint/dot-notation */
import { Heading, Text, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";

import fallbackIMG from "../../../../public/fallback.png";
import { NFT_MAPPING } from "../../constants";

type ToyViewerProps = {
  id: number | undefined;
};

const ToyViewer = ({ id }: ToyViewerProps) => {
  const description = id || id === 0 ? NFT_MAPPING[id].description : "Fallback";
  const img = id || id === 0 ? NFT_MAPPING[id].imgPath : fallbackIMG;
  const title = id || id === 0 ? NFT_MAPPING[id].title : "Fallback";

  return (
    <HStack justifyContent="center">
      <VStack maxW="lg" alignItems="start">
        <Image style={{ borderRadius: "10px" }} src={id ? img : fallbackIMG} />

        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};

export default ToyViewer;
