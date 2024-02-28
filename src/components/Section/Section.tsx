import React from "react";
import { Flex, Title, Text, Button } from "@mantine/core";
import classes from "./Section.module.css";
import { IconArrowUpRight } from "@tabler/icons-react";

interface SectionProps {
  left?: boolean;
  heading: string;
  subHeading?: string;
  children: JSX.Element;
}

function Section({ left, heading, subHeading, children }: SectionProps) {
  return (
    <Flex
      className={classes.container}
      direction={left ? "row" : "row-reverse"}
      justify="space-between"
    >
      <Flex
        direction={"column"}
        w={460}
        justify="center"
        className={classes.info}
      >
        <Title order={3}>{heading}</Title>
        <Flex mt={30}>
        <Text fw={500} c={"grey"} size='12px' lh={1.5}>{subHeading}</Text>
        </Flex>
        <Flex w={180} mt={30}>
          <Button
            rightSection={<IconArrowUpRight size={'16px'} />}
            variant={"outline"}
            color={"black"}
            radius='md'
          >
            Read more
          </Button>
        </Flex>
      </Flex>
      {children && <Flex className={classes.content}>{children}</Flex>}
    </Flex>
  );
}

export default Section;
