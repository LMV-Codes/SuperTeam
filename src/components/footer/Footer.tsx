import Icon from "@chakra-ui/icon";
import { Flex, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { FaLinkedinIn, FaBriefcase, FaGithub } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <Flex
      bg="brand.50"
      height="5em"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      position="relative"
      width="100%"
      bottom="0"
    >
      <Text fontFamily="Roboto Condensed" textAlign="center">
        Made by: LMV-Codes
      </Text>
      <Flex justifyContent="center" margin="0.5em">
        <Link
          isExternal
          href="https://www.linkedin.com/in/leonardo-vazquez-a89660147/"
        >
          <Icon
            as={FaLinkedinIn}
            fontSize="1.5em"
            _hover={{ color: "brand.300" }}
          />
        </Link>
        <Link
          marginLeft="1em"
          isExternal
          href="https://lv-portfolio.netlify.app/"
        >
          <Icon
            as={FaBriefcase}
            fontSize="1.5em"
            _hover={{ color: "brand.300" }}
          />
        </Link>
        <Link marginLeft="1em" isExternal href="https://github.com/LMV-Codes">
          <Icon
            as={FaGithub}
            fontSize="1.5em"
            _hover={{ color: "brand.300" }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};
