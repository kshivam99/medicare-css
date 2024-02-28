import React, { useEffect, useState } from "react";
import { Flex, Text } from "@mantine/core";
import Grid from "../components/Grid/Grid";
import SearchBox from "../components/SearchBox/SearchBox";
import { hospitals } from "../data";
import classes from "./Search.module.css";

const Search: React.FC = () => {
  const [localData, setLocalData] = useState(hospitals);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
      setLocalData(hospitals);
    } else {
      setLocalData(
        hospitals.filter((item) =>
          item.location.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return (
    <Flex direction={"column"} align={"center"} className={classes.container}>
      <SearchBox searchText={searchText} setSearchText={setSearchText} />
      {localData.length > 0 ? (
        <Flex mt={30}>
          <Grid data={localData} />
        </Flex>
      ) : (
        <Flex mt={30}>
          <Text>Oops! 😟 No Hospitals found. Try searching with another location</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Search;
