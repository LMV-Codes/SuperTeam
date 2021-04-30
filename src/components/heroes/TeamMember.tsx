import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { HeroData } from "../../utils/interfaces";

interface TeamMemberProps {
  hero: HeroData;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ hero }) => {
  return (
    <Flex flexDirection="column" bg="brand.50" padding="1em" borderRadius="5px">
      <Flex>
        <Image
          src={hero.image.url}
          alt={hero.name}
          width="15em"
          borderRadius="5px"
        />
        <Flex flexDirection="column" marginLeft="1em" justifyContent="center">
          <Text>Combat:{hero.powerstats.combat}</Text>
          <Text>Durability: {hero.powerstats.durability}</Text>
          <Text>Intelligence:{hero.powerstats.intelligence}</Text>
          <Text>Power:{hero.powerstats.power}</Text>
          <Text>Speed:{hero.powerstats.speed}</Text>
          <Text>Strength: {hero.powerstats.strength}</Text>
        </Flex>
      </Flex>
      <Text textAlign="center" textTransform="uppercase">
        {hero.name}
      </Text>
      <Flex justifyContent="space-evenly">
        <Button variant="superoutline" fontWeight="regular" margin="1em">
          Details
        </Button>
        <Button variant="superdanger" fontWeight="regular" margin="1em">
          Remove
        </Button>
      </Flex>
    </Flex>
  );
};
