import { Flex } from "@mantine/core";
import React from "react";
import { Hospital } from "../../data";
import CardItem from "../Card/Card";
import classes from "./Grid.module.css";

function Grid({ data }: { data: Hospital[] }) {
  return (
    <Flex className={classes.container} gap={20}>
      {data.map((item, index) => (
        <CardItem
          key={index}
          name={item.name}
          location={item.location}
          image={item.image}
        />
      ))}
    </Flex>
  );
}

export default Grid;
