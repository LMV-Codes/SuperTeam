import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Icon } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

interface NavbarProps {
  userData: string | null;
  setUserData: Function;
}

interface decodedUser {
  sub: number;
  email: string;
  iat: number;
}

export const Navbar: React.FC<NavbarProps> = ({ userData, setUserData }) => {
  const logout = () => {
    localStorage.clear();
    setUserData("");
  };
  const checkData = () => {
    if (userData !== "" && userData !== null) {
      const decodedUser: decodedUser = jwt_decode(userData);
      return decodedUser.email;
    }
  };

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
        {userData ? (
          <Flex alignItems="center">
            <Icon as={FaUser} marginRight="0.3em" />
            <Text marginRight="1em">{checkData()}</Text>
            <Button variant="superdanger" onClick={() => logout()}>
              Logout
            </Button>
          </Flex>
        ) : (
          <Link to="/login">
            <Button variant="superoutline">Login</Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
};
