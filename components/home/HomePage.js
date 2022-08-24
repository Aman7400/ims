import { Button, Container, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage() {
    return (
        <Container>
            <Text>
                Hello Stranger
            </Text>
            <Button>
                <Link href="/create">
                    Get Medical Card
                </Link>
            </Button>
        </Container>
    )
}