import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { HeroData } from "../../utils/interfaces";

interface TeamMemberDetailsProps {
  hero: HeroData;
}

export const TeamMemberDetails: React.FC<TeamMemberDetailsProps> = ({
  hero,
}) => {
  const worksAt = hero.work.base.split(",");
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
    work: worksAt.map((place, index) => (
      <Text key={index} textAlign="end">
        {place}
      </Text>
    )),
    aliases: hero.biography.aliases.map((alias, index) => (
      <Text key={index} textAlign="end">
        {alias}
      </Text>
    )),
  };
  const detailsArray = Object.entries(details);
  return (
    <>
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
    </>
  );
};
