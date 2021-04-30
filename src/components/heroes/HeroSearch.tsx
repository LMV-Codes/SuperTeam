import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
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

interface HeroSearchProps {
  setHeroSearch: Function;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ setHeroSearch }) => {
  const toast = useToast();
  const [heroData, setHeroData] = useState([]);
  return (
    <Container
      maxW="container.lg"
      bg="brand.100"
      padding="2em"
      borderRadius="5px"
    >
      <Flex
        flexDirection="column"
        bg="brand.50"
        padding="2em"
        borderRadius="5px"
      >
        <Icon
          as={AiOutlineClose}
          fontSize="1.2em"
          marginLeft="auto"
          marginRight="0"
          _hover={{ color: "brand.300", cursor: "pointer" }}
          paddingTop="0"
          onClick={() => setHeroSearch(false)}
        />
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values, { setErrors }) => {
            try {
              const response = await AxiosApi.get(`search/${values.search}`);
              const checkResponse = () => {
                if (response.data.results === undefined) {
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
            } catch (error) {
              console.log(error);
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
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.search && form.touchedsearch}
                    >
                      <Input
                        {...field}
                        id="search"
                        placeholder="Search"
                        type="text"
                        borderRightRadius="0"
                        borderColor="brand.300"
                        bg="brand.50"
                        focusBorderColor="brand.300"
                      />
                      <FormErrorMessage>{form.errors.search}</FormErrorMessage>
                    </FormControl>
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
                >
                  <Icon as={FaSearch} />
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>

        <SearchList heroData={heroData} />
      </Flex>
    </Container>
  );
};
