import { Box, Button, Container, Grid, GridItem, Heading, HStack, Input } from "@chakra-ui/react";

export default function NewUserForm() {
    return (
        <Container p={8} bordercolor={8} boxShadow="md" maxW="container.lg">

            <Heading>
                New Medical Profile
            </Heading>

            <Grid my={8} gap={4} templateColumns={"repeat(3,1fr)"}>

                {
                    [1, 2, 3, 4, 5, 6, 7]
                        .map((_, i) =>
                            <GridItem key={i}>
                                <Input focusBorderColor='teal.300' variant={"filled"} size="lg" placeholder='Basic usage' />
                            </GridItem>
                        )
                }


                <GridItem display={"flex"} justifyContent="flex-end" alignItems="center" colSpan={2}>

                    <Button colorScheme={"teal"}>
                       Save
                    </Button>
                    
                </GridItem>

            </Grid>

        </Container>
    )
}