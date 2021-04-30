import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

interface heroData {
  id: string;
  name: string;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
  appearance: {
    gender: string;
    race: string;
    "eye-color": string;
    "hair-color": string;
  };
  height: string[];
  wegith: string[];
  race: string;
  biography: {
    aliases: string[];
    "full-name": string;
    "alter-egos": string;
    "place-of-birth": string;
    publisher: string;
  };
  image: { url: string };
  connections: { "group-affiliations": string; relatives: string };
  work: { occupation: string; base: string };
}

interface SearchListProps {
  heroData: heroData[];
}

export const SearchList: React.FC<SearchListProps> = ({ heroData }) => {
  return (
    <Flex wrap="wrap" justifyContent="center" alignItems="center">
      {heroData.map((hero, index) => (
        <Flex
          padding="1em"
          marginTop="1em"
          bg="brand.100"
          key={index}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          borderRadius="5px"
          marginLeft="1em"
        >
          <Image
            src={hero.image.url}
            alt={hero.name}
            maxWidth="12em"
            borderRadius="5px"
          />
          <Text fontFamily="Mono">{hero.name}</Text>
          <Text fontFamily="Mono">{hero.biography["full-name"]}</Text>
          <Button
            marginTop="0.5em"
            variant="superoutline"
            fontWeight="regular"
            textTransform="uppercase"
          >
            Add to team
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};
