import { Button, Flex, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

import ToyViewer from "../../../lib/components/ui/ToyViewer";

const CollectionItem = () => {
  const router = useRouter();
  const { nftName } = router.query;
  console.log("nftName >>>", nftName);
  console.log("nftName >>>", router.query);
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);
  return (
    <Flex direction="column" gap={4} mb={8}>
      <NextSeo title="Collection" />
      <VStack>
        <ToyViewer id={`${1}`} />
        <Button w="200px">Send</Button>
      </VStack>
    </Flex>
  );
};

export default CollectionItem;
