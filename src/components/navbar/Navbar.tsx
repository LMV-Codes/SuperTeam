import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const checkLogin = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  };

  useEffect(() => {
    checkLogin();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    localStorage.clear();
    setUserData("");
    history.push("/login");
  };
  const decodeToken = () => {
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
            <Icon as={FaUser} marginRight="0.3em" fontSize="0.7em" />
            <Text
              marginRight="1em"
              fontFamily="Roboto Condensed"
              fontSize="0.8em"
            >
              {decodeToken()}
            </Text>
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
