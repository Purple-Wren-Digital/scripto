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
  Accordion,
} from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
} from "react";
import Footer from "./Footer";
import Link from "next/link";
import { useMediaQuery, useDisclosure, useToggle } from "@mantine/hooks";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
const useStyles = createStyles(() => ({
  dropdown: {
    backgroundColor: "#252634",
    color: "#FBFBFD",
    padding: 10,
  },
  item: {
    "&[data-hovered]": {
      backgroundColor: "#8252C6",
    },
  },
}));
const getButtonConfigs = (isAppUser: boolean) => ({
  main: {
    label: isAppUser ? "Go To App" : "Get Started",
    href: isAppUser
      ? "https://app.scripto.live"
      : "https://app.scripto.live/create-account",
  },
  secondary: {
    label: isAppUser ? "Help" : "Sign In",
    href: isAppUser
      ? "https://help.scripto.live"
      : "https://app.scripto.live/login",
  },
});
export const AppLayout = ({ children }: { children: ReactNode }) => {
  const isMobileMenu = useMediaQuery("(max-width: 768px)");
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const { classes } = useStyles();
  const [isAppUser, setIsAppUser] = useState(false);
  useEffect(() => {
    setIsAppUser(document?.cookie.includes("isLoggedIn"));
  }, []);
  const buttonConfigs = getButtonConfigs(isAppUser);
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
            border: "none",
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
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Text size={15} mr={5} color={"#FBFBFD"}>
                          Features
                        </Text>
                        <ChevronDown
                          size={15}
                          color={"#FBFBFD"}
                          style={{ marginRight: 15 }}
                        />
                      </Box>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item>
                        <Link
                          href="/features"
                          style={{ textDecoration: "none" }}
                        >
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Key Features
                          </Text>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/studio" style={{ textDecoration: "none" }}>
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Studio TV
                          </Text>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          href="/screenplays"
                          style={{ textDecoration: "none" }}
                        >
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Writers Rooms
                          </Text>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/games" style={{ textDecoration: "none" }}>
                          <Text size={15} mr={20} color={"#FBFBFD"}>
                            Video Game Studios
                          </Text>
                        </Link>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    <Text size={15} color={"#FBFBFD"}>
                      About Us
                    </Text>
                  </Link>
                </Box>
              </MediaQuery>
              <NonSSRWrapper>
                <MediaQuery
                  query="(max-width: 1024px)"
                  styles={{ marginRight: "25px" }}
                >
                  <Box mr={50} sx={{ display: "flex", alignItems: "center" }}>
                    <Link
                      href={buttonConfigs.secondary.href}
                      style={{ textDecoration: "none" }}
                    >
                      <Text size="md" mr={20} color={"#FBFBFD"}>
                        {buttonConfigs.secondary.label}
                      </Text>
                    </Link>
                    <Link
                      href={buttonConfigs.main.href}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        size="md"
                        radius={10}
                        color={"#FBFBFD"}
                        sx={{ background: "#8252C6" }}
                      >
                        {buttonConfigs.main.label}
                      </Button>
                    </Link>
                  </Box>
                </MediaQuery>
              </NonSSRWrapper>
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
                }}
              >
                <Link
                  href="/about"
                  style={{ textDecoration: "none", marginBottom: 20 }}
                >
                  <Text size={15} color={"#FBFBFD"} onClick={toggle}>
                    About Us
                  </Text>
                </Link>
                <Link
                  href={"/features"}
                  style={{ textDecoration: "none", marginBottom: 20 }}
                >
                  <Text size={15} color={"#FBFBFD"} onClick={toggle}>
                    Key Features
                  </Text>
                </Link>
                <Link
                  href={"/studio"}
                  style={{ textDecoration: "none", marginBottom: 20 }}
                >
                  <Text size={15} color={"#FBFBFD"} onClick={toggle}>
                    Studio TV
                  </Text>
                </Link>
                <Link
                  href={"/screenplays"}
                  style={{ textDecoration: "none", marginBottom: 20 }}
                >
                  <Text size={15} color={"#FBFBFD"} onClick={toggle}>
                    Writers Rooms
                  </Text>
                </Link>
                <Link
                  href={"/games"}
                  style={{ textDecoration: "none", marginBottom: 20 }}
                >
                  <Text size={15} color={"#FBFBFD"} onClick={toggle}>
                    Video Game Studios
                  </Text>
                </Link>
                <NonSSRWrapper>
                  <Link
                    href={buttonConfigs.secondary.href}
                    style={{ textDecoration: "none", marginBottom: 20 }}
                  >
                    <Text size="md" color={"#FBFBFD"}>
                      {buttonConfigs.secondary.label}
                    </Text>
                  </Link>
                </NonSSRWrapper>
                <NonSSRWrapper>
                  <Link
                    href={buttonConfigs.main.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="md"
                      radius={10}
                      color={"#FBFBFD"}
                      sx={{ background: "#8252C6" }}
                    >
                      {buttonConfigs.main.label}
                    </Button>
                  </Link>
                </NonSSRWrapper>
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

const NonSSRWrapper = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
