import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Button, Space, Image} from "@mantine/core";
import { PageWithLayout } from "next";

const TeamPage: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box>
        <Text>Team Page</Text>
      </Box>
    </AppLayout>
  );
};

export default TeamPage;