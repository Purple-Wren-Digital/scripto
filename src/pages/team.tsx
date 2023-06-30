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
            background: "#F0EFF1",
          }}
        >
          <Box
            sx={{
              width: "30%",
              // backgroundImage: "url(/images/team-page/goat-graphic.png)",
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "center",
              // backgroundSize: "cover",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/team-page/goat-graphic.png"
              width={"100%"}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0
              }}
              alt="goat"
            />
          </Box>
          <Box
            sx={{
              width: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <Image
              src="/images/team-page/bg-ellipse-1.png"
              width={600}
              sx={{
                position: "absolute",
                bottom: 30,
                right: 20,
              }}
              alt="goat"
            />
            <Box
              my={50}
              sx={{
                width: "80%",
                padding: "60px",
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                zIndex: 1
              }}
            >
              <Text size={24} fw={700} mb={24} >It All Started With a Goat...</Text>
              <Text size={20} mb={24} >
                Long ago, before Scripto existed, there was a show called The Colbert Report, where some writers optimistically wrote in a surprise appearance by a live goat. To everyone’s surprise, the idea moved forward — which meant booking a showbiz-grade goat from an ethical and TV-ready animal handler, at significant expense to the production.
              </Text>
              <Text size={20} mb={24}>
                Only problem was: TV being TV, the goat’s appearance was cut from the script in revisions. And because they weren’t using Scripto, the show didn’t find out about the script change until the Tom Cruise of goats was already en route to the studio.
              </Text>
              <Text size={20} mb={24}>
                We all learned an important lesson that day: It’s good to make changes to a script, but only if everyone else can see them too. That was the first spark of an idea that led to the creation of Scripto.
              </Text>
            </Box>
          </Box>
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
              // display: "grid",
              // gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              width: "80%",
              maxWidth: "850px"
              // gap: "120px"
            }}
          >
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#B89ADE",
                border: "25px solid #EAD8AD",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#B89ADE",
                border: "25px solid #EAD8AD",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#EAD8AD",
                border: "25px solid #C9796F",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#C9796F",
                border: "25px solid #B89ADE",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#EAD8AD",
                border: "25px solid #C9796F",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#B89ADE",
                border: "25px solid #EAD8AD",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#C9796F",
                border: "25px solid #B89ADE",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#EAD8AD",
                border: "25px solid #C9796F",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            <Box
              mx="auto"
              mb={120}
              sx={{
                width: "225px",
                height: "225px",
                borderRadius: "50%",
                background: "#C9796F",
                border: "25px solid #B89ADE",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
            >
              <Image 
                width={225}
                height={225}
                src={null} 
                alt="headshot" 
                withPlaceholder
                fit="cover" 
              />
            </Box>
            
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