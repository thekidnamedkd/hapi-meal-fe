import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect, useState } from "react";

import CollectMe from "../../../../public/collect_me.png";
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
      <Image src={CollectMe} />
      <ToyViewer id={`${randomId}`} />
    </Flex>
  );
};

export default GetCollectible;
