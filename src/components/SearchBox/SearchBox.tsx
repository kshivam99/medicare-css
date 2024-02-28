import React from "react";
import { Button, Flex, Input } from "@mantine/core";
import classes from "./SearchBox.module.css";

interface SearchProps {
  searchText?: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBox({ searchText, setSearchText }: SearchProps) {
  return (
    <Flex justify={"space-between"} p={10} className={classes.container}>
      <Input
        size={"xs"}
        variant="unstyled"
        placeholder="Search Hospitals by Locations"
        className={classes.input}
        value={searchText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText && setSearchText(event.currentTarget.value)
        }
      />
      <Button size={"xs"} variant={"filled"} radius="md" classNames={classes}>
        Search
      </Button>
    </Flex>
  );
}

export default SearchBox;
