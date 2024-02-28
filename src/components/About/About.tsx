import React from "react";
import { Flex, Title, Text, Button, Box, Divider } from "@mantine/core";
import { IconArrowUpRight, IconFlower } from "@tabler/icons-react";
import classes from "./About.module.css";
import { info } from "../../data";

function About() {
  return (
    <Flex direction={"column"} align="center" className={classes.wrapper}>
      <Flex justify={"space-between"} className={classes.info}>
        <Title order={4}>About us</Title>
        <Flex w={500}>
          <Text size={"12px"} c={"grey"} lh={1.5}>
            We pride ourselves on offering seamless online consultations through
            our user-friendly application. With a vast network of expert doctors
            spanning various specialties, we provide personalized and efficient
            medical care. Our commitment lies in connecting you with
            professionals who bring Boxerse expertise to your fingertips,
            ensuring comprehensive and accessible healthcare solutions. Trust us
            to be your partner on your journey to better health.
          </Text>
        </Flex>

        <Flex w={180}>
          <Button
            rightSection={<IconArrowUpRight size={"16px"} />}
            variant={"outline"}
            color={"black"}
            radius="md"
          >
            Read more
          </Button>
        </Flex>
      </Flex>
      <Flex mt={40} align='center' p={20} justify={'space-between'} className={classes.top}>
        {info.map((item, index) => (
          <Box key={index} className={classes.card}>
            <Flex justify={"space-between"} className={classes.top}>
              <Flex direction={"column"}>
                <Title c={"white"} order={3}>
                  {item.title}
                </Title>
                <Text c={"white"} size="sm">
                  {item.heading}
                </Text>
              </Flex>
              <Box className={classes.circle}>
                <IconFlower size='20px' color="white"/>
              </Box>
            </Flex>
            <Divider color={"#1EBFCE"} className={classes.separator} />
            <Flex className={classes.top}>
              <Text
                c={"white"}
                size="9px"
                lh={1.2}
                className={classes.description}
              >
                {item.describe}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default About;
