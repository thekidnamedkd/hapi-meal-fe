import { useEffect } from "react";
import { Button, Flex, Link, Container, Center} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import ToyViewer from "../../../lib/components/ui/ToyViewer";

const CollectionItem = () => {
    const router = useRouter();
    const {nftName} = router.query;
    useEffect(() => {
        console.log(router.query);
      }, [router.query]);

    return (
        <>
            <Flex direction="column" gap={4} mb={8} w="100%">
                <NextSeo title="View Treat" />        
                <ToyViewer nftName={nftName} />
                <Center>
                    <Button w="25%">
                        <Link>Send</Link>
                    </Button>
                </Center>
                
            </Flex>
        </>
      );
}

export default CollectionItem;