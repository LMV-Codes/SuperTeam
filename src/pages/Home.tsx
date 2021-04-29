import { Container, Flex, Text } from "@chakra-ui/layout";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Container maxW="container.lg" bg="brand.100" minHeight="100vh">
        <Text width="70em">HomePage</Text>
      </Container>
    </Flex>
  );
};
