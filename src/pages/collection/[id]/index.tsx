import { Button, Flex, Link, Center } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

import ToyViewer from "../../../lib/components/ui/ToyViewer";

const CollectionItem = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("iddd", id);
  const parsedId = Number(id);
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  return (
    <Flex direction="column" gap={4} mb={8} w="100%">
      <NextSeo title="Collection" />
      <ToyViewer id={parsedId} />
      <Center>
        <Button w="25%">
          <Link>Send</Link>
        </Button>
      </Center>
    </Flex>
  );
};

export default CollectionItem;
