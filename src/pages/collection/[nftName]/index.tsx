import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import ToyViewer from "../../../lib/components/ui/ToyViewer";

const CollectionItem = () => {
    const router = useRouter();
    const {nftName} = router.query;
    console.log("nftName >>>", nftName);
    console.log("nftName >>>", router.query);
    useEffect(() => {
        console.log(router.query);
      }, [router.query]);
    return (
        <>
            <Flex direction="column" gap={4} mb={8} w="full">
                <NextSeo title="View Treat" />        
                <ToyViewer id={`${1}`} />
            </Flex>
        </>
      );
}

export default CollectionItem;