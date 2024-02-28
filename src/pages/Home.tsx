import { Flex } from "@mantine/core";
import React from "react";
import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  return (
    <Flex direction={"column"} align="center">
      <Hero />
    </Flex>
  );
};

export default Home;
