import { Container, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AddHero } from "../components/heroes/AddHero";
import { HeroSearch } from "../components/heroes/HeroSearch";
import { TeamMember } from "../components/heroes/TeamMember";
import { HeroData } from "../utils/interfaces";

export const Home: React.FC = () => {
  const [heroSearch, setHeroSearch] = useState(false);
  const [superTeam, setSuperTeam] = useState<any>([]);
  return (
    <Flex justifyContent="center">
      <Container maxW="container.lg" bg="brand.100" minHeight="100vh">
        {heroSearch && (
          <HeroSearch
            setHeroSearch={setHeroSearch}
            setSuperTeam={setSuperTeam}
          />
        )}
        <Flex alignItems="center">
          {superTeam.map((member: HeroData, index: number) => (
            <TeamMember hero={member} />
          ))}
          <AddHero setSearch={setHeroSearch} />
        </Flex>
      </Container>
    </Flex>
  );
};
