import { Container, Flex, Img } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { Text, SimpleGrid, Box, Link} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'

import Image from 'next/image'
import {NFT_MAPPING} from "../../constants";

type CollectionItemProps = {
    nftItem: string
}
const CollectionItem = ({nftItem}: CollectionItemProps) => {
    return (
        <Box height="100%" width="100%">
            <Image style={{"borderRadius": "15px"}} src={NFT_MAPPING[nftItem]["imgPath"]} objectFit='contain'/>
        </Box>
    )
}
const Collection = () => {
  // TODO: pull NFTs in wallet from database and render here
  return (
    <Flex direction="column" gap={4} mb={8} w="100%">
      <NextSeo title="View Treat" />
    
      <Flex w="full">
        <Text fontSize="4xl" >Your Collection</Text>  
      </Flex>

      <SimpleGrid columns={2} spacing={2.5}>
        <CollectionItem nftItem="crystalSkologna"/>
        <CollectionItem nftItem="fryGuy"/>
        <CollectionItem nftItem="lovingClownParent"/>
        <CollectionItem nftItem="masterChef"/>
        <CollectionItem nftItem="murderousArnold"/>
        <CollectionItem nftItem="noseManBrimeMan"/>
      </SimpleGrid>

      <Flex w="full">
    {/* TODO: hook up end point to export wallet to another wallet */}
      <Link href='https://chakra-ui.com' isExternal>
        Export Entire Collection <ExternalLinkIcon mx='2px' />
      </Link>
      </Flex>
    </Flex>
  );
};

export default Collection;