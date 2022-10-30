import { VStack, Heading, Text, Container} from "@chakra-ui/react";
import Image from "next/image";

import fallbackIMG from "../../../../public/fallback.png";
import {NFT_MAPPING} from "../../constants";

type ToyViewerProps = {
  nftName: string;
};

const ToyViewer = ({ nftName }: ToyViewerProps) => {
  const description = nftName ? NFT_MAPPING[nftName]["description"] : "Fallback";
  const img = nftName ? NFT_MAPPING[nftName]["imgPath"] : fallbackIMG;
  const title = nftName ? NFT_MAPPING[nftName]["title"] : "Fallback";

  return (
    <VStack alignItems="start" w="100%">
      <Container height="100%" width="100%">
        <Image style={{ borderRadius: "10px"}} objectFit='contain' id={nftName} src={nftName ? img : fallbackIMG} />
      </Container>
      

      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

export default ToyViewer;
