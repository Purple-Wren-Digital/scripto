import { AppShell, Text, Header, Box, Button, Image } from "@mantine/core";
import { ReactNode } from "react";
import Footer from "./Footer";
import Link from "next/link";

export const AppLayout = ({ children }: { children: ReactNode }) => {
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
            backgroundColor: "#252634",
          }}
        >
          <Box ml={50} sx={{ display: "flex", justifyContent: "space-around" }}>
            <Text size={15} mr={20} color={"#FBFBFD"}>
              Our Team
            </Text>
            <Text size={15} mr={20} color={"#FBFBFD"}>
              Careers
            </Text>
            <Link href="/features" style={{ textDecoration: "none" }}>
              <Text size={15} mr={20} color={"#FBFBFD"}>
                Features
              </Text>
            </Link>
            <Text size={15} color={"#FBFBFD"}>
              Plans
            </Text>
          </Box>
          <Box sx={{ position: "absolute", right: "50%", transform: "translateX(50%)" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              {/* <Text color={"#FBFBFD"}>scripto</Text> */}
              <Image
                src="/images/logo-light-400w.png"
                width={100}
                alt="scripto logo"
              />
            </Link>
          </Box>
          <Box mr={50} sx={{ display: "flex", alignItems: "center" }}>
            <Text size="md" mr={20} color={"#FBFBFD"}>
              Sign In
            </Text>
            <Button size="md" radius={10} color={"#FBFBFD"} sx={{ background: "#8252C6"}}>
              Get Started
            </Button>
          </Box>
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
