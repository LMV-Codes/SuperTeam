import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <Flex alignItems="center" height="5em">
      <Link to="/">
        <Heading
          _hover={{ color: "brand.400", transition: "0.3s" }}
          marginLeft="1em"
        >
          ST
        </Heading>
      </Link>
      <Box justifySelf="end" marginLeft="auto" marginRight="1em">
        <Link to="/login">
          <Button variant="superoutline">Login</Button>
        </Link>
      </Box>
    </Flex>
  );
};
