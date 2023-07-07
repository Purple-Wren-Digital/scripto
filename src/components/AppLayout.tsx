import {
  AppShell,
  Text,
  Header,
  Box,
  Button,
  Image,
  MediaQuery,
  Burger,
  Menu,
  createStyles,
} from "@mantine/core";
import { ReactNode } from "react";
import Footer from "./Footer";
import Link from "next/link";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

const useStyles = createStyles(() => ({
  dropdown: {
    backgroundColor: "#252634",
    color: "#FBFBFD",
    padding: 10,
  },
  item: {
    '&[data-hovered]': {
      backgroundColor: '#8252C6',
    }
  },
}));

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const isMobileMenu = useMediaQuery("(max-width: 768px)");
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const { classes } = useStyles();

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
          <Box
            sx={{
              position: "absolute",
              right: "50%",
              transform: "translateX(50%)",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src="/images/logo-light-400w.png"
                width={100}
                alt="scripto logo"
              />
            </Link>
          </Box>

          {isMobileMenu ? (
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label={label}
              color="white"
              sx={{ marginLeft: "auto" }}
            />
          ) : (
            <>
              <MediaQuery
                query="(max-width: 1024px)"
                styles={{ marginLeft: "25px" }}
              >
                <Box
                  ml={50}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Link href="/team" style={{ textDecoration: "none" }}>
                    <Text size={15} mr={20} color={"#FBFBFD"}>
                      About Us
                    </Text>
                  </Link>
                  {/* <Link href="/features" style={{ textDecoration: "none" }}>
                    <Text size={15} mr={20} color={"#FBFBFD"}>
                      Features
                    </Text>
                  </Link> */}
                  <Menu
                    trigger="hover"
                    position="bottom-start"
                    withArrow
                    arrowPosition="center"
                    transitionProps={{
                      transition: "fade",
                      duration: 200,
                    }}
                    classNames={classes}
                  >
                    <Menu.Target>
                      <Link href="/features" style={{ textDecoration: "none" }}>
                        <Text size={15} mr={20} color={"#FBFBFD"}>
                          Features
                        </Text>
                      </Link>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item>
                        <Link href="/studio" style={{ textDecoration: "none" }}>
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Studio
                          </Text>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/screenplays" style={{ textDecoration: "none" }}>
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Screenplays
                          </Text>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/videogames" style={{ textDecoration: "none" }}>
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Video Games
                          </Text>
                        </Link>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Box>
              </MediaQuery>
              <MediaQuery
                query="(max-width: 1024px)"
                styles={{ marginRight: "25px" }}
              >
                <Box mr={50} sx={{ display: "flex", alignItems: "center" }}>
                  <Link
                    href="https://app.scripto.live/login"
                    style={{ textDecoration: "none" }}
                  >
                    <Text size="md" mr={20} color={"#FBFBFD"}>
                      Sign In
                    </Text>
                  </Link>
                  <Link
                    href="https://app.scripto.live/create-account"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="md"
                      radius={10}
                      color={"#FBFBFD"}
                      sx={{ background: "#8252C6" }}
                    >
                      Get Started
                    </Button>
                  </Link>
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
              <Box
                mt={100}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Link href="/team" style={{ textDecoration: "none" }}>
                  <Text size={15} color={"#FBFBFD"}>
                    About Us
                  </Text>
                </Link>
                <Link href="/features" style={{ textDecoration: "none" }}>
                  <Text size={15} color={"#FBFBFD"}>
                    Features
                  </Text>
                </Link>
                <Link
                  href="https://app.scripto.live/login"
                  style={{ textDecoration: "none" }}
                >
                  <Text size="md" color={"#FBFBFD"}>
                    Sign In
                  </Text>
                </Link>
                <Link
                  href="https://app.scripto.live/create-account"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="md"
                    radius={10}
                    color={"#FBFBFD"}
                    sx={{ background: "#8252C6" }}
                  >
                    Get Started
                  </Button>
                </Link>
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
