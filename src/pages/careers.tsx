import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Button, Space, Image} from "@mantine/core";
import { PageWithLayout } from "next";

const Careers: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "682px",
        }}
      >
        <Text>Careers Page</Text>
      </Box>
      <CTA 
        background="#252634"
        buttonColor="#8252C6"
        text="#FBFBFD"
      />
    </AppLayout>
  );
};

export default Careers;