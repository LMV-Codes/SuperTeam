import { Button } from "@chakra-ui/button";
import { Container, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { AxiosApi } from "../utils/AxiosApi";

export const Home: React.FC = () => {
  const testAxios = async () => {
    try {
      const response = await AxiosApi.get("search/batman");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex justifyContent="center">
      <Container maxW="container.lg" bg="brand.100" minHeight="100vh">
        <Text width="70em">HomePage</Text>
        <Button variant="super" onClick={() => testAxios()}>
          TestAxios
        </Button>
      </Container>
    </Flex>
  );
};
