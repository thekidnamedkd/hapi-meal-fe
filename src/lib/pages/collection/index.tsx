import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Text, SimpleGrid, Box, Link } from "@chakra-ui/react";
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
        <Link href="https://chakra-ui.com" isExternal>
          Export Entire Collection <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Collection;
