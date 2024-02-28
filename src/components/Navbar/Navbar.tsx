import React from "react";
import { Button, Flex, Title, Text } from "@mantine/core";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <Flex
      align={"center"}
      justify="space-between"
      px={"24px"}
      py="20px"
      mb={"30px"}
    >
      <Flex direction={"row"} className={classes.menuItem}>
        <Title order={3} fw={700}>
          Medi
        </Title>
        <Title c="blue" order={3} fw={700}>
          care
        </Title>
      </Flex>
      <Flex gap={30} align="center">
        <Text fw={500} className={classes.menuItem}>
          About Us
        </Text>
        <Text fw={500} className={classes.menuItem}>
          Book an Appointment
        </Text>
        <Text fw={500} className={classes.menuItem}>
          For Patient
        </Text>
        <Text fw={500} className={classes.menuItem}>
          For Doctors
        </Text>
        <Text fw={500} className={classes.menuItem}>
          Lab Tests
        </Text>
        <Button variant="outline" radius="md">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
