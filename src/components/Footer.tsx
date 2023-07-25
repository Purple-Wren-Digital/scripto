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
              href="/about"
              style={{ textDecoration: "none", margin: "25px" }}
            >
              <Text size={14} fw={700} color={colors.text}>
                About Us
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
              href="/studio"
              style={{ textDecoration: "none", margin: "25px" }}
            >
              <Text size={14} fw={700} color={colors.text}>
                Studio TV
              </Text>
            </Link>
            <Link
              href="/screenplays"
              style={{ textDecoration: "none", margin: "25px" }}
            >
              <Text size={14} fw={700} color={colors.text}>
                Writers Rooms
              </Text>
            </Link>
            <Link
              href="/games"
              style={{ textDecoration: "none", margin: "25px" }}
            >
              <Text size={14} fw={700} color={colors.text}>
                Video Game Studios
              </Text>
            </Link>
            <Link href="/" style={{ margin: "25px" }}>
              <Image
                src="/images/logo-light-400w.png"
                width={100}
                alt="scripto logo"
              />
            </Link>
            <Text mt={50} mb={10}>
              ©️ 2010-{year}
            </Text>
            <Box mb={25} sx={{ display: "flex", alignSelf: "center" }}>
              <Link href="/privacy">
                <Text
                  size={14}
                  color={colors.text}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Privacy
                </Text>
              </Link>
              <Text>-</Text>
              <Link href="/terms">
                <Text
                  size={14}
                  color={colors.text}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Terms
                </Text>
              </Link>
              <Link href="/cookies" style={{ marginLeft: 5 }}>
                <Text
                  size={14}
                  color={colors.text}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Cookies
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: colors.background,
            color: colors.text,
            height: "71.7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Link
                  href="/about"
                  style={{ textDecoration: "none", marginLeft: "50px" }}
                >
                  <Text size={14} fw={700} color={colors.text}>
                    About Us
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
                <Text size={14} fw={700} color={colors.text} mr={10}>
                  ©️ 2010-{year}
                </Text>
                <Link href="/privacy">
                  <Text
                    size={14}
                    fw={700}
                    color={colors.text}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Privacy
                  </Text>
                </Link>
                <Text>-</Text>
                <Link href="/terms">
                  <Text
                    size={14}
                    fw={700}
                    color={colors.text}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Terms
                  </Text>
                </Link>
                <Link href="/cookies" style={{ marginLeft: 10 }}>
                  <Text
                    size={14}
                    fw={700}
                    color={colors.text}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Cookies
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
