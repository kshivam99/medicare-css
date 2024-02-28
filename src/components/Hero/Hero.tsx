import React from "react";
import {
  Flex,
  Title,
  Text,
  Box,
  Image,
  Rating,
  Avatar,
  BackgroundImage,
  Button,
  Center,
} from "@mantine/core";
import classes from "./Hero.module.css";
import HeroImg from "../../assets/images/hero-main.jpg";
import HeroImg2 from "../../assets/images/hero-bottom1.jpg";
import HeroImg3 from "../../assets/images/heroimg3.jpg";
import DoctorSample from "../../assets/images/doctor-sample.jpg";
import SearchBox from "../SearchBox/SearchBox";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";

function Hero() {
  return (
    <Flex direction={"column"} className={classes.container}>
      <Flex style={{ width: "100%" }} justify="space-between">
        <Flex
          direction={"column"}
          justify="space-between"
          className={classes.flex1}
        >
          <Box>
            <Title order={3}>Get High Quality</Title>
            <Title order={1}>Medical Services</Title>
            <Box mt={8}>
              <Text size="9px" color="grey" fw={600} lh={1.5} w={300}>
                Access top-tier medical care from licensed professionals
                anytime, anywhere through our online application
              </Text>
            </Box>
          </Box>
          <Link to="/search">
            <Box className={classes.searchboxContainer}>
              <SearchBox />
            </Box>
          </Link>
          <Flex justify={"flex-end"}>
            <Flex direction={"column"} className={classes.cards1}>
              <Text size={"12px"} lh={1.5} fw={600}>
                10k+
              </Text>
              <Text size="8px">Happy Patients</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={classes.flex2}>
          <Flex className={classes.heroMainImageContainer}>
            <Image src={HeroImg2} h={400} />
          </Flex>
        </Flex>
        <Flex
          className={classes.flex3}
          direction={"column"}
          justify="space-between"
          align={"flex-end"}
        >
          <Flex direction={"column"} className={classes.cards2}>
            <Flex mb={10}>
              <Flex direction={"column"} mr={8} align="flex-end">
                <Rating value={5} readOnly size="15" />
                <Text size="9px" fw={500}>
                  Jane Cooper
                </Text>
              </Flex>
              <Avatar src={DoctorSample} />
            </Flex>
            <Text size="9px" c={"grey"}>
              The virtual experience was seamless, and the medical advice was
              thorough and precise.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            align="center"
            justify={"space-around"}
            className={classes.cards3}
          >
            <Box className={classes.avatar}>
              <Avatar src={DoctorSample} />
            </Box>
            <Text size="9px" fw={600} lh={1.5}>
              Dr. John Neichman
            </Text>
            <Text c={"grey"} size="9px" fw={500}>
              Neurologist
            </Text>
            <Box mt={6}>
              <Button
                size={"compact-xs"}
                variant="filled"
                color="yellow"
                classNames={classes}
              >
                Appointment
              </Button>
            </Box>
          </Flex>
          <Flex className={classes.heroImgAbsolute}>
              <Center className={classes.iconBadge}>
                <IconArrowUpRight color="white" />
              </Center>
            </Flex>
          <Flex direction={"column"} className={classes.cards4}>
            <Avatar.Group spacing={"xs"}>
              <Avatar size="sm" src={DoctorSample} />
              <Avatar size="sm" src={DoctorSample} />
              <Avatar size="sm" src={DoctorSample} />
              <Avatar size="sm" src={DoctorSample} />
              <Avatar size="sm" src={DoctorSample} />
              <Avatar size="sm" src={DoctorSample} />
            </Avatar.Group>
            <Text size={"12px"} lh={1.5} fw={600}>
              150+
            </Text>
            <Text size="8px">Highly Specialised Doctors</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex className={classes.bottom} gap={30}>
        <Flex className={classes.heroBottom1}>
          <BackgroundImage src={HeroImg}>
            <Flex
              direction={"column"}
              justify="space-between"
              p={20}
              style={{ height: "100%" }}
            >
              <Box />
              <Flex justify={"space-between"}>
                <Flex direction={"column"}>
                  <Text fw={500} size="10px" color="white">
                    Emergency Contact No.
                  </Text>
                  <Title order={5} c={"white"}>
                    +180-4859-4526
                  </Title>
                </Flex>
                <Center className={classes.iconBadge}>
                  <IconArrowUpRight color="white" />
                </Center>
              </Flex>
            </Flex>
          </BackgroundImage>
        </Flex>
        <Flex className={classes.heroBottom2}>
          <Image src={HeroImg3} fit={"cover"} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Hero;
