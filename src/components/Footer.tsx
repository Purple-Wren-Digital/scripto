import { Box, Button, Divider, Text, Image } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const [colors, setColors] = useState({
    background: "",
    text: "",
    button: "",
  })

  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes("/features")) {
      setColors({
        background: "#C9796F",
        text: "#000",
        button: "#301F55",
      })
    } else if (router.pathname.includes("/team")) {
      setColors({
        background: "#EAD8AD",
        text: "#000",
        button: "#301F55",
      })
    } else {
      setColors({
        background: "#252634",
        text: "#FBFBFD",
        button: "#8252C6",
      })
    }
  }, [router.pathname])

  return (
    <Box
      h={410}
      w={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "#252634",
        // color: "#FBFBFD"
        background: colors.background,
        color: colors.text,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
        <Box mb={40} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Box sx={{ display: "flex" }}>
            <Link href="#" style={{ textDecoration: "none", marginLeft: "50px" }}>
              <Text size={14} fw={700} color={colors.text}>Our Team</Text>
            </Link>
            <Link href="#" style={{ textDecoration: "none", marginLeft: "50px" }}>
              <Text size={14} fw={700} color={colors.text}>Features</Text>
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
              <Text size={14} fw={700} color={colors.text}>Plans</Text>
            </Link>
            <Link href="#" style={{ textDecoration: "none", marginRight: "50px" }}>
              <Text size={14} fw={700} color={colors.text}>Home</Text>
            </Link>
          </Box>
        </Box>
        <Divider size="sm" color={colors.text} />
        <Button mt={50} h={60} w={200} radius={10} sx={{ alignSelf: "center", background: colors.button, fontSize: 18, }}>Get in Touch</Button>
        <Box mt={50} sx={{ display: "flex", alignSelf: "center", gap: "20px" }}>
          <Text>©️ 2010-{year}</Text>
          <Text>Privacy-Terms</Text>
        </Box>
      </Box>
    </Box>
  );
}
