import { Box, Button, Divider, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
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
  });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("/features")) {
      setColors({
        background: "#C9796F",
        text: "#000",
        button: "#301F55",
      });
    } else if (router.pathname.includes("/team")) {
      setColors({
        background: "#EAD8AD",
        text: "#000",
        button: "#301F55",
      });
    } else {
      setColors({
        background: "#252634",
        text: "#FBFBFD",
        button: "#8252C6",
      });
    }
  }, [router.pathname]);

  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: colors.background,
            color: colors.text,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              alignItems: "center",
            }}
          >
            <Link
              href="/team"
              style={{ textDecoration: "none", margin: "25px" }}
            >
              <Text size={14} fw={700} color={colors.text}>
                Our Team
              </Text>
            </Link>
            <Link
              href="/features"
              style={{ textDecoration: "none", margin: "25px" }}
            >
              <Text size={14} fw={700} color={colors.text}>
                Features
              </Text>
            </Link>
            <Link
              href="/plans"
              style={{
                textDecoration: "none",
                margin: "25px",
              }}
            >
              <Text size={14} fw={700} color={colors.text}>
                Plans
              </Text>
            </Link>
            <Link href="/" style={{ margin: "25px" }}>
              <Image
                src="/images/logo-light-400w.png"
                width={100}
                alt="scripto logo"
              />
            </Link>
            {/* <Link
              href="mailto:hello@scripto.live"
              style={{
                textDecoration: "none",
                display: "flex",
                alignSelf: "center",
              }}
            >
              <Button
                mt={25}
                h={60}
                w={200}
                radius={10}
                sx={{
                  background: colors.button,
                  fontSize: 18,
                }}
              >
                Get in Touch
              </Button>
            </Link> */}
            <Box
              mt={50}
              mb={25}
              sx={{ display: "flex", alignSelf: "center", gap: "20px" }}
            >
              <Text>©️ 2010-{year}</Text>
              <Text sx={{ cursor: "pointer" }}>Privacy-Terms</Text>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          h={410}
          w={"100%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: colors.background,
            color: colors.text,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
            <Box
              mb={40}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Link
                  href="/team"
                  style={{ textDecoration: "none", marginLeft: "50px" }}
                >
                  <Text size={14} fw={700} color={colors.text}>
                    Our Team
                  </Text>
                </Link>
                <Link
                  href="/features"
                  style={{ textDecoration: "none", marginLeft: "50px" }}
                >
                  <Text size={14} fw={700} color={colors.text}>
                    Features
                  </Text>
                </Link>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: "50%",
                  transform: "translateX(50%)",
                }}
              >
                <Link href="/">
                  <Image
                    src="/images/logo-light-400w.png"
                    width={100}
                    alt="scripto logo"
                  />
                </Link>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Link
                  href="/plans"
                  style={{ textDecoration: "none", marginRight: "50px" }}
                >
                  <Text size={14} fw={700} color={colors.text}>
                    Plans
                  </Text>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", marginRight: "50px" }}
                >
                  <Text size={14} fw={700} color={colors.text}>
                    Home
                  </Text>
                </Link>
              </Box>
            </Box>
            <Divider size="sm" color={colors.text} />
            {/* <Link
              href="mailto:hello@scripto.live"
              style={{
                textDecoration: "none",
                display: "flex",
                alignSelf: "center",
              }}
            >
              <Button
                mt={50}
                h={60}
                w={200}
                radius={10}
                sx={{
                  background: colors.button,
                  fontSize: 18,
                }}
              >
                Get in Touch
              </Button>
            </Link> */}
            <Box
              mt={50}
              sx={{ display: "flex", alignSelf: "center", gap: "20px" }}
            >
              <Text>©️ 2010-{year}</Text>
              <Text
                sx={{
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy-Terms
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
