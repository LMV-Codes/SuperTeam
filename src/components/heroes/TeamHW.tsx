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
    const avgHeight = Math.round(
      heights.reduce((a, b) => a + b, 0) / heights.length
    );
    return avgHeight;
  };

  const getAverageWeight = (team: HeroData[]) => {
    let weights: Array<number> = [];
    team.forEach((hero) => weights.push(parseInt(hero.appearance.weight[1])));
    const avgWeight = Math.round(
      weights.reduce((a, b) => a + b, 0) / weights.length
    );
    return avgWeight;
  };

  const poundConverter = (weight: number) => {
    return Math.round(weight * 2.20462);
  };

  const feetConverter = (height: number) => {
    const realFeet = (height * 0.3937) / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return `${feet}'${inches}`;
  };

  const avgHeight = getAverageHeight(team);
  const avgWeight = getAverageWeight(team);
  const avgPounds = poundConverter(avgWeight);
  const avgFeet = feetConverter(avgHeight);
  return (
    <Flex
      bg="brand.50"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      padding="1em"
      borderRadius="5px"
    >
      <Heading
        size="md"
        textAlign="center"
        fontWeight="regular"
        textTransform="uppercase"
        marginBottom="1em"
      >
        Average Team Height/Weight
      </Heading>
      <Flex justifyContent="space-around">
        <Flex>
          <Text>Height:</Text>
          <Text
            marginRight="0.5em"
            marginLeft="0.5em"
            color="brand.400"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
          >
            {avgHeight}cm / {avgFeet}
          </Text>
        </Flex>
        <Flex>
          <Text>Height:</Text>
          <Text
            marginRight="0.5em"
            marginLeft="0.5em"
            color="brand.400"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
          >
            {avgWeight}kg / {avgPounds}lbs
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
