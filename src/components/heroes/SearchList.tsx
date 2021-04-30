import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { HeroData } from "../../utils/interfaces";

interface SearchListProps {
  heroData: HeroData[];
  setSuperTeam: Function;
}

export const SearchList: React.FC<SearchListProps> = ({
  heroData,
  setSuperTeam,
}) => {
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
            onClick={() =>
              setSuperTeam((state: HeroData[]) => [...state, hero])
            }
          >
            Add to team
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};
