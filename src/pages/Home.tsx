import { Container, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { AddHero } from "../components/heroes/AddHero";
import { TeamSearch } from "../components/heroes/TeamSearch";
import { TeamMember } from "../components/heroes/TeamMember";
import { HeroData } from "../utils/interfaces";
import { TeamStats } from "../components/heroes/TeamStats";
import { useHistory } from "react-router";

export const Home: React.FC = () => {
  const [heroSearch, setTeamSearch] = useState(false);
  const [superTeam, setSuperTeam] = useState<HeroData[]>([]);
  const history = useHistory();
  const checkLogin = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  };

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex>
      <Container maxW="container.xl" bg="brand.100" minHeight="100vh">
        {heroSearch && (
          <TeamSearch
            superTeam={superTeam}
            setTeamSearch={setTeamSearch}
            setSuperTeam={setSuperTeam}
          />
        )}
        <Flex
          alignItems="center"
          marginTop="1em"
          flexWrap="wrap"
          justifyContent="center"
        >
          {superTeam.map((member: HeroData, index: number) => (
            <TeamMember
              key={index}
              hero={member}
              setSuperTeam={setSuperTeam}
              superTeam={superTeam}
            />
          ))}
          {superTeam.length < 6 && <AddHero setSearch={setTeamSearch} />}
        </Flex>
        <TeamStats team={superTeam} />
      </Container>
    </Flex>
  );
};
