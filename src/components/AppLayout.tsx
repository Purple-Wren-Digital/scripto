import { AppShell, Text, Header, Box, Button, Image, MediaQuery, Burger } from "@mantine/core";
import { ReactNode } from "react";
import Footer from "./Footer";
import Link from "next/link";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const isMobileMenu = useMediaQuery("(max-width: 768px)");
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <AppShell
      padding={0}
      header={
        <Header
          height={60}
          p="xs"
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            background: "#252634",
            zIndex: 10,
          }}
        >
          <Box sx={{ position: "absolute", right: "50%", transform: "translateX(50%)" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src="/images/logo-light-400w.png"
                width={100}
                alt="scripto logo"
              />
            </Link>
          </Box>

          {isMobileMenu ? (
            <Burger opened={opened} onClick={toggle} aria-label={label} color="white"  sx={{ marginLeft: "auto" }}/>
          ) : (
            <>
              <MediaQuery
                query="(max-width: 1024px)"
                styles={{ marginLeft: "25px" }}
              >
                <Box ml={50} sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Link href="/team" style={{ textDecoration: "none" }}>
                    <Text size={15} mr={20} color={"#FBFBFD"}>
                      Our Team
                    </Text>
                  </Link>
                  <Link href="/careers" style={{ textDecoration: "none" }}>
                    <Text size={15} mr={20} color={"#FBFBFD"}>
                      Careers
                    </Text>
                  </Link>
                  <Link href="/features" style={{ textDecoration: "none" }}>
                    <Text size={15} mr={20} color={"#FBFBFD"}>
                      Features
                    </Text>
                  </Link>
                  <Link href="/plans" style={{ textDecoration: "none" }}>
                    <Text size={15} color={"#FBFBFD"}>
                      Plans
                    </Text>
                  </Link>
                </Box>
              </MediaQuery>
              <MediaQuery
                query="(max-width: 1024px)"
                styles={{ marginRight: "25px" }}
              >
                <Box mr={50} sx={{ display: "flex", alignItems: "center" }}>
                  <Text size="md" mr={20} color={"#FBFBFD"}>
                    Sign In
                  </Text>
                  <Button size="md" radius={10} color={"#FBFBFD"} sx={{ background: "#8252C6"}}>
                    Get Started
                  </Button>
                </Box>
              </MediaQuery>
            </>
          )}

          {isMobileMenu && (
            <Box 
              sx={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                right: 0, 
                height: "100vh", 
                zIndex: -1, 
                background: "#252634",
                transform: opened ? "translateX(0)" : "translateX(100%)",
                transition: "transform 250ms ease-in-out",
              }}
            >
              <Box mt={100} sx={{ display: "flex", flexDirection: "column" , alignItems: "center", gap: "20px" }}>
                  <Link href="/team" style={{ textDecoration: "none" }}>
                    <Text size={15} color={"#FBFBFD"}>
                      Our Team
                    </Text>
                  </Link>
                  <Link href="/careers" style={{ textDecoration: "none" }}>
                    <Text size={15} color={"#FBFBFD"}>
                      Careers
                    </Text>
                  </Link>
                  <Link href="/features" style={{ textDecoration: "none" }}>
                    <Text size={15} color={"#FBFBFD"}>
                      Features
                    </Text>
                  </Link>
                  <Link href="/plans" style={{ textDecoration: "none" }}>
                    <Text size={15} color={"#FBFBFD"}>
                      Plans
                    </Text>
                  </Link>
                  <Text mt={50} size="md" color={"#FBFBFD"}>
                    Sign In
                  </Text>
                  <Button size="md" radius={10} color={"#FBFBFD"} sx={{ background: "#8252C6"}}>
                    Get Started
                  </Button>
                </Box>
            </Box>
          )}

        </Header>
      }
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <AppContents children={children} />
    </AppShell>
  );
};

const AppContents: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Box>{children}</Box>;
};
