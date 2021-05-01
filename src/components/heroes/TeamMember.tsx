import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { HeroData } from "../../utils/interfaces";

interface TeamMemberProps {
  hero: HeroData;
  setSuperTeam: Function;
  superTeam: HeroData[];
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  hero,
  superTeam,
  setSuperTeam,
}) => {
  const handleRemove = (superTeam: HeroData[], heroId: string) => {
    const newTeam = superTeam.filter((teamHero) => teamHero.id !== heroId);
    setSuperTeam(newTeam);
  };

  return (
    <Flex
      flexDirection="column"
      bg="brand.50"
      padding="1em"
      borderRadius="5px"
      margin="1em"
    >
      <Flex>
        <Image
          src={hero.image.url}
          alt={hero.name}
          width="12em"
          borderRadius="5px"
        />
        <Flex flexDirection="column" marginLeft="1em" justifyContent="center">
          <Text>
            Combat: {hero.powerstats.combat}
            <br />
            Durability: {hero.powerstats.durability}
            <br />
            Intelligence: {hero.powerstats.intelligence}
            <br />
            Power: {hero.powerstats.power}
            <br />
            Speed: {hero.powerstats.speed}
            <br />
            Strength: {hero.powerstats.strength}
          </Text>
        </Flex>
      </Flex>
      <Text textAlign="center" textTransform="uppercase" marginTop="0.5em">
        {hero.name}
      </Text>
      <Flex justifyContent="space-evenly">
        <Button
          variant="superoutline"
          fontWeight="regular"
          margin="1em"
          textTransform="uppercase"
          isFullWidth
        >
          Details
        </Button>
        <Button
          variant="superdanger"
          fontWeight="regular"
          margin="1em"
          textTransform="uppercase"
          isFullWidth
          onClick={() => handleRemove(superTeam, hero.id)}
        >
          Remove
        </Button>
      </Flex>
    </Flex>
  );
};
