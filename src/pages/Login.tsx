import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import CustomField from "../components/form/CustomField";
export const Login: React.FC = () => {
  const history = useHistory();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, "Email too short")
      .max(100, "Email too long")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .max(100, "Password is too long")
      .required("Password is required"),
  });
  return (
    <Container
      maxW="container.sm"
      mt="2em"
      bg="brand.100"
      padding="2em"
      borderRadius="5px"
    >
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          history.push("/");
        }}
      >
        {(props) => (
          <Form>
            <Flex flexDirection="column">
              <Heading textTransform="uppercase" textAlign="center">
                login
              </Heading>
              <CustomField fieldValue="email" />
              <CustomField fieldValue="password" isPassword />
              <Button
                textAlign="center"
                marginTop="1em"
                variant="superoutline"
                isLoading={props.isSubmitting}
                type="submit"
                marginLeft="auto"
                marginRight="auto"
                width="15em"
              >
                Login
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
