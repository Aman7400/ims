import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return (
        <VStack p={4}>
            <Heading size="sm" color="teal.400">
                IMS inc.
            </Heading>
            <Text fontSize="x-small" mb={0} color="gray.300">
                All rights reserved.  &copy;  {new Date().getFullYear()}
            </Text>
        </VStack>
    )
}