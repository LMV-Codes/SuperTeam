import { Container, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AddHero } from "../components/heroes/AddHero";
import { AxiosApi } from "../utils/AxiosApi";

export const Home: React.FC = () => {
  const [heroSearch, setHeroSearch] = useState(false);
  return (
    <Flex justifyContent="center">
      <Container maxW="container.lg" bg="brand.100" minHeight="100vh">
        <AddHero setSearch={setHeroSearch} />
      </Container>
    </Flex>
  );
};
