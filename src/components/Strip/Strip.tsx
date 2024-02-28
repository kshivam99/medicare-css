import React from "react";
import { Flex, Image } from "@mantine/core";
import Logo from "../../assets/images/logo.png";
import Logo2 from "../../assets/images/logo2.png";

function Strip() {
  return (
    <Flex gap={40}>
      <Image src={Logo} w={100} h={120} />
      <Image src={Logo2} w={100} h={120} />
      <Image src={Logo} w={100} h={120} />
      <Image src={Logo2} w={100} h={120} />
      <Image src={Logo} w={100} h={120} />
      <Image src={Logo2} w={100} h={120} />
      <Image src={Logo} w={100} h={120} />
    </Flex>
  );
}

export default Strip;
