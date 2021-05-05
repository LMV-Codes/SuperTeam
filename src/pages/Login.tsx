import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import CustomField from "../components/form/CustomField";
import { useToast } from "@chakra-ui/react";

interface LoginProps {
  setUserData: Function;
}



export const Login: React.FC<LoginProps> = ({ setUserData }) => {
  const toast = useToast();
  const history = useHistory();

  const checkLogin = () => {
    if (localStorage.getItem("token") !== null) {
      history.push("/");
    }
  };
  
  useEffect(() => {
    checkLogin();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

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
      bg="brand.100"
      padding="2em"
      borderRadius="5px"
    >
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          try {
            const response = await axios.post(
              "http://challenge-react.alkemy.org",
              {
                email: values.email,
                password: values.password,
              }
            );
            setUserData(response.data.token);
            localStorage.setItem("token", response.data.token);
            history.push("/");
          } catch (error) {
            toast({
              title: "Error",
              description: "Wrong Email or Password",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
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
