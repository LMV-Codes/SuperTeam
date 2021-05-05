import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { HeroData } from "../../utils/interfaces";

interface SearchListProps {
  heroData: HeroData[];
  setSuperTeam: Function;
  setTeamSearch: Function;
  superTeam: HeroData[];
  loading: boolean;
}

export const SearchList: React.FC<SearchListProps> = ({
  heroData,
  setSuperTeam,
  setTeamSearch,
  superTeam,
  loading,
}) => {
  const toast = useToast();

  const getHeroesAlignment = (superTeam: HeroData[]) => {
    let goodHeroes = 0;
    let badHeroes = 0;
    superTeam.forEach((hero) => {
      if (hero.biography.alignment === "good") {
        goodHeroes = goodHeroes + 1;
      } else {
        badHeroes = badHeroes + 1;
      }
    });
    return { goodHeroes, badHeroes };
  };

  const checkIdNotRepeated = (superTeam: HeroData[], hero: HeroData) => {
    const checkId = superTeam.some((teamHero) => teamHero.id === hero.id);
    if (checkId === false) {
    }
    return checkId;
  };
  const checkHeroBalance = (superTeam: HeroData[], hero: HeroData) => {
    const { goodHeroes, badHeroes } = getHeroesAlignment(superTeam);
    if (hero.biography.alignment === "good" && goodHeroes === 3) {
      return false;
    }
    if (hero.biography.alignment === "bad" && badHeroes === 3) {
      return false;
    }
    return true;
  };
  const addHeroes = (hero: HeroData, superTeam: HeroData[]) => {
    const repeat = checkIdNotRepeated(superTeam, hero);
    const balance = checkHeroBalance(superTeam, hero);
    if (repeat === true) {
      toast({
        title: "Can't add the same hero twice",
        status: "error",
        isClosable: true,
      });
    } else if (balance === false) {
      toast({
        title: "Your team must have 3 bad and 3 good heroes",
        status: "error",
        isClosable: true,
      });
    } else {
      setSuperTeam((state: HeroData[]) => [...state, hero]);
      setTeamSearch(false);
    }
  };

  return (
    <Flex wrap="wrap" justifyContent="center">
      {!loading ? (
        <>
          {heroData.map((hero, index) => (
            <Flex
              padding="1em"
              marginTop="1em"
              bg="brand.50"
              key={index}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="5px"
              marginLeft="1em"
            >
              <Flex
                bg="brand.100"
                width="12em"
                height="16em"
                justifyContent="center"
                alignItems="center"
                borderRadius="5px"
                marginBottom="1em"
              >
                <Image
                  src={hero.image.url}
                  alt={hero.name}
                  maxWidth="12em"
                  borderRadius="5px"
                />
              </Flex>
              <Text fontFamily="Mono">{hero.name}</Text>
              <Text fontFamily="Mono">{hero.biography["full-name"]}</Text>
              <Button
                marginTop="0.5em"
                variant="superoutline"
                fontWeight="regular"
                textTransform="uppercase"
                onClick={() => addHeroes(hero, superTeam)}
              >
                Add to team
              </Button>
            </Flex>
          ))}
        </>
      ) : (
        <Spinner
          color="brand.300"
          emptyColor="brand.400"
          thickness="4px"
          marginTop="5em"
          size="xl"
        />
      )}
    </Flex>
  );
};
