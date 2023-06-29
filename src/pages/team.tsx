import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Button, Space, Image} from "@mantine/core";
import { PageWithLayout } from "next";

const TeamPage: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box sx={{ display: "flex", flexDirection: "column", color: "#000" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
            background: "#EAD8AD",
          }}
        >
          <Text size={48} fw={700} mb={25}>Meet Our Team</Text>
          <Text ta="center" size={20} sx={{ maxWidth: 645}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </Box>
      <Box 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#252634"
        }}>
          <Box 
            mt={180}
            sx={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              width: "80%",
              maxWidth: "850px"
              // gap: "120px"
            }}
          >
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#B89ADE",
                border: "25px solid #EAD8AD",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#B89ADE",
                border: "25px solid #EAD8AD",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#EAD8AD",
                border: "25px solid #C9796F",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#C9796F",
                border: "25px solid #B89ADE",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#EAD8AD",
                border: "25px solid #C9796F",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#B89ADE",
                border: "25px solid #EAD8AD",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#C9796F",
                border: "25px solid #B89ADE",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#EAD8AD",
                border: "25px solid #C9796F",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "#C9796F",
                border: "25px solid #B89ADE",
                opacity: "0.5",
              }}
            ></Box>
            
          </Box>
      </Box>
      <CTA 
        background="#252634"
        buttonColor="#8252C6"
        text="#FBFBFD"
      />
    </AppLayout>
  );
};

export default TeamPage;