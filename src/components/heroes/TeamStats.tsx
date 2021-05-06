import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { HeroData } from "../../utils/interfaces";
import { TeamHW } from "./TeamHW";

interface TeamStatsProps {
  team: HeroData[];
}

export const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  const getStats = (teamArray: HeroData[]) => {
    let statSum = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };
    teamArray.forEach((member) => {
      statSum.intelligence =
        parseInt(member.powerstats.intelligence) + statSum.intelligence;
      statSum.strength =
        parseInt(member.powerstats.strength) + statSum.strength;
      statSum.speed = parseInt(member.powerstats.speed) + statSum.speed;
      statSum.durability =
        parseInt(member.powerstats.durability) + statSum.durability;
      statSum.power = parseInt(member.powerstats.power) + statSum.power;
      statSum.combat = parseInt(member.powerstats.combat) + statSum.combat;
    });
    return statSum;
  };

  const getBigStat = (stats: Array<Array<string | number>>) => {
    let bigStat: Array<string | number> = ["None", 0];
    stats.forEach((stat) => {
      if (stat[1] > bigStat[1]) {
        bigStat = stat;
      }
    });
    return bigStat;
  };

  const stats = getStats(team);
  const statArray = Object.entries(stats);
  const bigStat = getBigStat(statArray);
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="brand.50"
      padding="1em"
      borderRadius="5px"
      margin="1em"
    >
      <Flex>
        <Heading
          textTransform="uppercase"
          size="md"
          fontWeight="bold"
          marginBottom="1em"
          textAlign="center"
        >
          dominant team stat:
        </Heading>
        <Heading
          textTransform="uppercase"
          size="md"
          fontWeight="bold"
          marginBottom="1em"
          color="brand.400"
          marginLeft="0.3em"
          alignSelf="center"
        >
          {bigStat[0]}
        </Heading>
      </Flex>
      <Heading
        textTransform="uppercase"
        size="md"
        fontWeight="regular"
        marginBottom="1em"
      >
        team stats
      </Heading>

      <Flex flexWrap="wrap" justifyContent="space-around">
        {statArray.map((powerstat, index) => (
          <Flex key={index}>
            <Text
              fontFamily="Roboto Condensed"
              textTransform="uppercase"
              marginLeft="0.5em"
            >
              {powerstat[0]}:
            </Text>
            <Text
              textAlign="left"
              fontFamily="Roboto Condensed"
              marginLeft="0.5em"
              fontWeight="bold"
              color="brand.400"
            >
              {powerstat[1]}
            </Text>
          </Flex>
        ))}
      </Flex>
      <TeamHW team={team} />
    </Flex>
  );
};
