import React from "react";
import { Flex, Title, Box, Image, Text, Center } from "@mantine/core";
import DocProfile from "../../assets/images/doc-profile.png";
import classes from "./Catalogue.module.css";
import { doctors } from "../../data";
import { IconArrowUpRight } from "@tabler/icons-react";

function Catalogue() {
  return (
    <Flex direction={'column'} align='center' mt={40}>
      <Title order={4}>You can find trusted doctors around the globe</Title>
      <Flex gap={20}>
        {doctors.map((doc, index) => (
          <Box key={index} className={classes.card}>
            <Box className={classes.imageContainer}>
              <Image src={DocProfile} className={classes.image} />
              <Box className={classes.info}>
                <Box className={classes.text}>
                  <Text
                    className={classes.name}
                    size={"12px"}
                    lh={1.5}
                    fw={600}
                  >
                    {doc.name}
                  </Text>
                  <Text size={"8px"} c={"grey"} className={classes.specialty}>
                    {doc.domain}
                  </Text>
                </Box>
                <Box className={classes.status}>
                  <IconArrowUpRight size='16px' color="black" />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Catalogue;
