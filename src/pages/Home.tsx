import { Flex } from "@mantine/core";
import React from "react";
import Catalogue from "../components/Catalogue/Catalogue";
import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  return (
    <Flex direction={"column"} align="center">
      <Hero />
      <Catalogue />
    </Flex>
  );
};

export default Home;
