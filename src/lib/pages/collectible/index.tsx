import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import CollectMe from "../../../../public/collect_me.png";
import ToyViewer from "../../components/ui/ToyViewer";

const GetCollectible = () => {
  const [randomId, setRandomId] = useState<number>();

  useEffect(() => {
    const result = Math.floor(Math.random() * 5);
    setRandomId(result);
  }, []);

  return (
    <VStack direction="column" gap={4} mb={8} w="full">
      <NextSeo title="View Treat" />
      <Box maxW="500px">
        <Image src={CollectMe} />
      </Box>
      <ToyViewer id={randomId} />
      <HStack>
        <Link href={`/signup?toyId=${randomId}`}>
          <Button>Sign Up</Button>
        </Link>
        <Button variant="none">Login</Button>
      </HStack>
    </VStack>
  );
};

export default GetCollectible;
