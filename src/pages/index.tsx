import { AppLayout } from "@/components/AppLayout";
import { Text, Box } from "@mantine/core";
import { PageWithLayout } from "next";

const LandingPage: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box>
        <Text>Hello</Text>
      </Box>
    </AppLayout>
  );
};

export default LandingPage;
