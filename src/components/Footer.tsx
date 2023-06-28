import { Box, Button, Divider, Text, Image } from "@mantine/core";
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

        color: "#fff"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <Box mb={40} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Box sx={{ display: "flex" }}>
            <Link href="#" style={{ textDecoration: "none", marginLeft: "50px" }}>
              <Text size={14} fw={700} color={"#FBFBFD"}>Our Team</Text>
            </Link>
            <Link href="#" style={{ textDecoration: "none", marginLeft: "50px" }}>
              <Text size={14} fw={700} color={"#FBFBFD"}>Features</Text>
            </Link>
          </Box>
          <Box sx={{ position: "absolute", right: "50%", transform: "translateX(50%)" }}>
            <Link href="#" >
              <Image
                src="/images/logo-light-400w.png"
                width={100}
                alt="scripto logo"
              />
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Link href="#" style={{ textDecoration: "none", marginRight: "50px" }}>
              <Text size={14} fw={700} color={"#FBFBFD"}>Plans</Text>
            </Link>
            <Link href="#" style={{ textDecoration: "none", marginRight: "50px" }}>
              <Text size={14} fw={700} color={"#FBFBFD"}>Home</Text>
            </Link>
          </Box>
        </Box>
        <Divider size="sm" color="#FBFBFD" />
        <Button mt={50} h={60} w={200} radius={10} sx={{ alignSelf: "center", background: "#8252C6", fontSize: 18, }}>Get in Touch</Button>
        <Box mt={50} sx={{ display: "flex", alignSelf: "center", gap: "20px" }}>
          <Text>©️ 2010-{year}</Text>
          <Text>Privacy-Terms</Text>
        </Box>
      </Box>
    </Box>
  );
}
