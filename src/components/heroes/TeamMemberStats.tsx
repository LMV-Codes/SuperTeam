import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

interface TeamMemberStatsProps {
  stats: {
    combat: string;
    intelligence: string;
    speed: string;
    durability: string;
    power: string;
    strength: string;
  };
}

export const TeamMemberStats: React.FC<TeamMemberStatsProps> = ({ stats }) => {
  const statArray = Object.entries(stats);
  return (
    <>
      {statArray.map((stat, index) => (
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
    </>
  );
};
