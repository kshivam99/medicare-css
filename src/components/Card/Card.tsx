import React from "react";
import { Card, Image, Text } from "@mantine/core";

interface CardProps {
  name: string;
  location: string;
  image: string;
}
function CardItem({ name, location, image }: CardProps) {
  return (
    <Card w={290} shadow="sm" padding="xl">
      <Card.Section>
        <Image src={image} h={160} alt="No way!" />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {name}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {location}
      </Text>
    </Card>
  );
}

export default CardItem;
