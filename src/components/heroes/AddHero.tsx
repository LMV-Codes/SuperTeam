import React from "react";
import Icon from "@chakra-ui/icon";
import { FaPlus } from "react-icons/fa";
import { Button } from "@chakra-ui/button";

interface AddHeroProps {
  setSearch: Function;
}

export const AddHero: React.FC<AddHeroProps> = ({ setSearch }) => {
  return (
    <Button
      variant="superoutline"
      color="brand.300"
      width="10em"
      height="10em"
      _hover={{ borderColor: "brand.400", color: "brand.400", bg: "brand.300" }}
      onClick={() => setSearch(true)}
    >
      <Icon as={FaPlus} fontSize="5em" />
    </Button>
  );
};
