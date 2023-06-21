import { AppShell, Text, Header, Box } from "@mantine/core";
import { PageWithLayout } from "next";
import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header
          height={60}
          p="xs"
          display="flex"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Box>
            <Text size="lg">Scripto</Text>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Text size="md" mr={15}>
              Sign In
            </Text>
            <Text size="md">Sign Up</Text>
          </Box>
        </Header>
      }
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
