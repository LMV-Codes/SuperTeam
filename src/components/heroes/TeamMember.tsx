import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
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
  const [showDetails, setShowDetails] = useState(false);
  const { isOpen, onToggle } = useDisclosure()

  const handleRemove = (superTeam: HeroData[], heroId: string) => {
    const newTeam = superTeam.filter((teamHero) => teamHero.id !== heroId);
    setSuperTeam(newTeam);
  };
  const stats = Object.entries(hero.powerstats);
  const worksAt = hero.work.base.split(',')
  const details = {
    weight: hero.appearance.weight.map((weight, index) => (
      <Text textAlign="end" key={index}>
        {weight}
      </Text>
    )),
    height: hero.appearance.height.map((height, index) => (
      <Text textAlign="end" key={index}>
        {height}
      </Text>
    )),
    fullname: hero.biography["full-name"],
    haircolor: hero.appearance["hair-color"],
    eyecolor: hero.appearance["eye-color"],
    work: worksAt.map((place, index) => (<Text key={index} textAlign="end">{place}</Text>)),
    aliases: hero.biography.aliases.map((alias, index) => (
      <Text key={index} textAlign="end">
        {alias}
      </Text>
    )),
  };
  const detailsArray = Object.entries(details);
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
          {stats.map((stat, index) => (
            <Flex key={index} justifyContent="space-between">
              <Text fontFamily="Roboto Condensed" textTransform="capitalize">
                {stat[0]}:
              </Text>
              <Text
                fontWeight="bold"
                fontFamily="Roboto Condensed"
                color="brand.400"
                marginLeft="0.2em"
              >
                {stat[1]}
              </Text>
            </Flex>
          ))}
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
            {detailsArray.map((app, index) => (
              <Flex key={index} justifyContent="space-between">
                <Text fontFamily="Roboto Condensed" textTransform="capitalize">
                  {app[0]}:
                </Text>
                <Text
                  fontWeight="bold"
                  color="brand.400"
                  marginLeft="0.2em"
                  fontFamily="Roboto Condensed"
                >
                  {app[1]}
                </Text>
              </Flex>
            ))}
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
