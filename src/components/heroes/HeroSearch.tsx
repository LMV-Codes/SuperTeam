import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Container, Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Field, Form, Formik } from "formik";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { AxiosApi } from "../../utils/AxiosApi";

interface HeroSearchProps {
  setHeroSearch: Function;
}
export const HeroSearch: React.FC<HeroSearchProps> = ({ setHeroSearch }) => {
  const toast = useToast();
  return (
    <Container
      maxW="container.sm"
      bg="brand.100"
      padding="2em"
      borderRadius="5px"
    >
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async (values, { setErrors }) => {
          try {
            const response = await AxiosApi.get(`search/${values.search}`);
            console.log(response.data);
            return response.data;
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
    </Container>
  );
};
