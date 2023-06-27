import { Box, Image, Text } from "@mantine/core";
import Link from "next/link";

export default function Card({
  imgSrc,
  title,
  text,
  link,
}: {
  imgSrc: string;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Image src={imgSrc} sx={{ boxShadow: "1px grey" }} />
      <Text>{text}</Text>
      <Link href={link}>
        <Text>Learn More</Text>
      </Link>
    </Box>
  );
}
