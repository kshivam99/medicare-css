import React from "react";
import { Button, Flex, Input } from "@mantine/core";
import classes from "./SearchBox.module.css";

function SearchBox() {
  return (
    <Flex justify={"space-between"} p={10} className={classes.container}>
      <Input
        size={"xs"}
        variant="unstyled"
        placeholder="Search Symptoms/Doctors/Clinics"
        className={classes.input}
      />
      <Button size={"xs"} variant={"filled"} radius="md" classNames={classes}>
        Search
      </Button>
    </Flex>
  );
}

export default SearchBox;
