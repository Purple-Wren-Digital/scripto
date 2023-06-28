import { AppShell, Text, Header, Box, Button } from "@mantine/core";
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
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Text size="lg" mr={15} color={"#FBFBFD"}>
              Our Team
            </Text>
            <Text size="lg" mr={15} color={"#FBFBFD"}>
              Careers
            </Text>
            <Link href="/features" style={{ textDecoration: "none" }}>
              <Text size="lg" mr={15} color={"#FBFBFD"}>
                Features
              </Text>
            </Link>
            <Text size="lg" color={"#FBFBFD"}>
              Plans
            </Text>
          </Box>
          <Box sx={{ position: "absolute", right: "50%" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text color={"#FBFBFD"}>scripto</Text>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Text size="md" mr={15} color={"#FBFBFD"}>
              Sign In
            </Text>
            <Button size="md" color={"#FBFBFD"}>
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
