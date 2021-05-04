import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { HeroData } from "../../utils/interfaces";

interface TeamHWProps {
  team: HeroData[];
}

export const TeamHW: React.FC<TeamHWProps> = ({ team }) => {
  const getAverageHeight = (team: HeroData[]) => {
    let heights: Array<number> = [];
    team.forEach((hero) => heights.push(parseInt(hero.appearance.height[1])));
    const avgHeight = heights.reduce((a, b) => a + b, 0) / heights.length;
    return avgHeight;
  };

  const getAverageWeight = (team: HeroData[]) => {
    let weights: Array<number> = [];
    team.forEach((hero) => weights.push(parseInt(hero.appearance.weight[1])));
    const avgWeight = weights.reduce((a, b) => a + b, 0) / weights.length;
    return avgWeight;
  };

  const avgHeight = getAverageHeight(team);
  const avgWeight = getAverageWeight(team);

  return (
    <Flex
      bg="brand.50"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      marginBottom="2em"
      padding="1em"
      borderRadius="5px"
    >
      <Heading size="md" textAlign="center" textTransform="capitalize">
        Average Team Height/Weight
      </Heading>
      <Flex justifyContent="space-around">
        <Text>Height: {avgHeight}cm</Text>
        <Text>Weight: {avgWeight}kg</Text>
      </Flex>
    </Flex>
  );
};
