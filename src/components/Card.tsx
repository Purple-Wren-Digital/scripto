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
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "315px", margin: "25px" }}>
      <Image src={imgSrc} width={150} height={150} mb="md" sx={{ boxShadow: "1px grey", alignSelf: "center" }} />
      <Text size={32} fw={600}>{title}</Text>
      <Text mb="md" >{text}</Text>
      <Link href={link} style={{ textDecoration: "none" }}>
        <Text size={14} color="#8252C6" >Learn More</Text>
      </Link>
    </Box>
  );
}
