import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Container, Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AxiosApi } from "../../utils/AxiosApi";
import { SearchList } from "./SearchList";
import { AiOutlineClose } from "react-icons/ai";
import { HeroData } from "../../utils/interfaces";

interface TeamSearchProps {
  setTeamSearch: Function;
  setSuperTeam: Function;
  superTeam: HeroData[];
}

export const TeamSearch: React.FC<TeamSearchProps> = ({
  setTeamSearch,
  setSuperTeam,
  superTeam,
}) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [heroData, setHeroData] = useState([]);
  return (
    <Flex
      width="100%"
      height="100%"
      bg="rgba(16, 15, 16, 0.8)"
      position="absolute"
      zIndex="10"
      justifyContent="center"
      top="0"
      left="0"
    >
      <Container maxW="container.xl">
        <Flex
          marginTop="5em"
          flexDirection="column"
          bg="brand.100"
          padding="2em"
          borderRadius="5px"
        >
          <Icon
            as={AiOutlineClose}
            fontSize="1.2em"
            marginLeft="auto"
            marginRight="0"
            _hover={{ color: "brand.400", cursor: "pointer" }}
            paddingTop="0"
            onClick={() => setTeamSearch(false)}
          />
          <Formik
            initialValues={{ search: "" }}
            onSubmit={async (values, { setErrors }) => {
              try {
                const response = await AxiosApi.get(`search/${values.search}`);
                const checkResponse = () => {
                  if (response.data.results === undefined) {
                    setHeroData([]);
                    toast({
                      title: "Error",
                      description: "Can't find a hero with that name",
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                    });
                  } else {
                    setHeroData(response.data.results);
                  }
                };
                checkResponse();
                setLoading(false);
              } catch (error) {
                toast({
                  title: "Error",
                  description: "Sorry, something went wrong",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}
          >
            {(props) => (
              <Form>
                <Flex alignItems="flex-end">
                  <Field name="search">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        id="search"
                        placeholder="Search members for your super team"
                        type="text"
                        borderRightRadius="0"
                        borderColor="brand.300"
                        bg="brand.50"
                        focusBorderColor="brand.300"
                        autoFocus
                      />
                    )}
                  </Field>
                  <Button
                    textAlign="center"
                    marginTop="1em"
                    variant="superoutline"
                    isLoading={props.isSubmitting}
                    type="submit"
                    bg="brand.300"
                    marginLeft="auto"
                    marginRight="auto"
                    fontWeight="regular"
                    borderLeftRadius="0"
                    onClick={() => setLoading(true)}
                  >
                    <Icon as={FaSearch} />
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
          <SearchList
            heroData={heroData}
            setSuperTeam={setSuperTeam}
            setTeamSearch={setTeamSearch}
            superTeam={superTeam}
            loading={loading}
          />
        </Flex>
      </Container>
    </Flex>
  );
};
