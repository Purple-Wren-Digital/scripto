import { Box, Image, Text, MediaQuery, Title } from "@mantine/core";
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
    <MediaQuery query="(max-width: 768px)" styles={{ textAlign: "center", marginTop: 20 }}>
      <MediaQuery query="(max-width: 480px)" styles={{ margin: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "315px",
            margin: "25px",
          }}
        >
          <Image
            src={imgSrc}
            width={150}
            height={150}
            mb="md"
            sx={{ boxShadow: "1px grey", alignSelf: "center" }}
            alt="card image"
          />
          <Title size={32} fw={600} >
            {title}
          </Title>
          <Text mt={20} mb="md">{text}</Text>
          <Link href={link} style={{ textDecoration: "none" }}>
            <Text size={14} color="#8252C6">
              Learn More
            </Text>
          </Link>
        </Box>
      </MediaQuery>
    </MediaQuery>
  );
}
