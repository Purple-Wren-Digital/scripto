import { Box, Button, Divider, Text } from "@mantine/core";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box
      h={410}
      w={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#252634",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Link href="#">
            <Text>Our Team</Text>
          </Link>
          <Link href="#">
            <Text>Features</Text>
          </Link>
          <Link href="#">
            <Text>Scripto</Text>
          </Link>
          <Link href="#">
            <Text>Plans</Text>
          </Link>
          <Link href="#">
            <Text>Home</Text>
          </Link>
        </Box>
        <Divider />
        <Button>Get in Touch</Button>
        <Box sx={{ display: "flex" }}>
          <Text>©️ {year}</Text>
          <Text>Privacy</Text>
          <Text>Terms</Text>
        </Box>
      </Box>
    </Box>
  );
}
