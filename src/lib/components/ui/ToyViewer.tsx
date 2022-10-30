/* eslint-disable @typescript-eslint/dot-notation */
import { Heading, Text, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";

import fallbackIMG from "../../../../public/fallback.png";
import { NFT_MAPPING } from "../../constants";

type ToyViewerProps = {
  // nftName?: string | string[] | undefined;
  id: number | undefined;
};

const ToyViewer = ({ id }: ToyViewerProps) => {
  const description = id ? NFT_MAPPING[id].description : "Fallback";
  const img = id ? NFT_MAPPING[id].imgPath : fallbackIMG;
  const title = id ? NFT_MAPPING[id].title : "Fallback";

  return (
    <HStack justifyContent="center">
      <VStack maxW="lg">
        <Image style={{ borderRadius: "10px" }} src={id ? img : fallbackIMG} />

        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};

export default ToyViewer;
