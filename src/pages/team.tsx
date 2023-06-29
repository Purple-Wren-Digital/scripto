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
          <Text size={48} fw={700} mb={25}>About Us</Text>
          <Text ta="center" size={20} sx={{ maxWidth: 645}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", color: "#000" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
            minHeight: "800px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "30%",
              background: "#000"
            }}
          ></Box>
          <Box
            sx={{
              width: "70%",
            }}
          ></Box>
        </Box>
      </Box>
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#252634"
        }}>
          <Box
            mt={80}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
            }}
          >
            <Text size={24} fw={700} mb={25}>Meet The Crew</Text>
            <Text ta="center" size={20} sx={{ maxWidth: 645}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
          <Box 
            mt={60}
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