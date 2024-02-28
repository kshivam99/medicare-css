import React from "react";
import { Box, Flex, Image } from "@mantine/core";
import Catalogue from "../components/Catalogue/Catalogue";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { sections } from "../data";
import Section1 from "../assets/images/section1.png";
import Section2 from "../assets/images/section2.png";
import About from "../components/About/About";
import Strip from "../components/Strip/Strip";

const Home: React.FC = () => {
  return (
    <Flex direction={"column"} align="center">
      <Hero />
      <Strip />
      <About />
      <Section left={true} heading={sections[0].heading}>
        <Image src={Section1} fit='contain'/>
      </Section>
      <Section
        left={false}
        heading={sections[1].heading}
        subHeading={sections[1].subHeading}
      >
        <Image src={Section2} fit='contain' />
      </Section>
      <Catalogue />
    </Flex>
  );
};

export default Home;
