import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React from "react";
import { HeroData } from "../../utils/interfaces";
import { TeamMemberDetails } from "./TeamMemberDetails";
import { TeamMemberStats } from "./TeamMemberStats";

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
  const { isOpen, onToggle } = useDisclosure();
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
        <Flex justifyContent="center" alignContent="center">
          <Image
            src={hero.image.url}
            alt={hero.name}
            width="12em"
            borderRadius="5px"
            objectFit="cover"
          />
        </Flex>
        <Flex
          flexDirection="column"
          marginLeft="1em"
          justifyContent="space-between"
        >
          <Heading
            textAlign="center"
            as="h4"
            textTransform="uppercase"
            size="sm"
            justifySelf="flex-start"
          >
            stats
          </Heading>
          <TeamMemberStats stats={hero.powerstats} />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          marginTop="1em"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading
            textAlign="center"
            as="h4"
            textTransform="uppercase"
            size="sm"
            justifySelf="flex-start"
          >
            Details
          </Heading>
          <TeamMemberDetails hero={hero} />
        </Flex>
      </Collapse>
      <Heading
        textAlign="center"
        textTransform="uppercase"
        marginTop="0.5em"
        size="md"
        fontWeight="regular"
      >
        {hero.name}
      </Heading>
      <Text
        textAlign="center"
        fontSize="0.9em"
        textTransform="uppercase"
        fontWeight="regular"
      >
        Alignment: {hero.biography.alignment}
      </Text>
      <Flex justifyContent="space-evenly">
        <Button
          variant="superoutline"
          fontWeight="regular"
          margin="1em"
          textTransform="uppercase"
          isFullWidth
          onClick={() => onToggle()}
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
