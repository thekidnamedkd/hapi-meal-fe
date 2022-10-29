import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

import ToyViewer from "../../components/ui/ToyViewer";

const GetCollectible = () => {
  const [randomId, setRandomId] = useState<string>();

  useEffect(() => {
    const result = Math.floor(Math.random() * 5).toString();
    setRandomId(result);
  }, []);

  return (
    <Flex direction="column" gap={4} mb={8} w="full">
      <NextSeo title="View Treat" />

      <ToyViewer id={`${randomId}`} />
    </Flex>
  );
};

export default GetCollectible;
