import { Container, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AddHero } from "../components/heroes/AddHero";
import { TeamSearch } from "../components/heroes/TeamSearch";
import { TeamMember } from "../components/heroes/TeamMember";
import { HeroData } from "../utils/interfaces";

export const Home: React.FC = () => {
  const [heroSearch, setTeamSearch] = useState(false);
  const [superTeam, setSuperTeam] = useState<any>([]);
  return (
    <Flex justifyContent="center">
      <Container maxW="container.lg" bg="brand.100" minHeight="100vh">
        {heroSearch && (
          <TeamSearch
            setTeamSearch={setTeamSearch}
            setSuperTeam={setSuperTeam}
          />
        )}
        <Flex alignItems="center" marginTop="1em" flexWrap="wrap">
          {superTeam.map((member: HeroData, index: number) => (
            <TeamMember
              hero={member}
              setSuperTeam={setSuperTeam}
              superTeam={superTeam}
            />
          ))}
          <AddHero setSearch={setTeamSearch} />
        </Flex>
      </Container>
    </Flex>
  );
};
