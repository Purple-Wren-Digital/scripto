import { AppLayout } from "@/components/AppLayout";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Text, Box, Button, Space, Image, Flex } from "@mantine/core";
import { PageWithLayout } from "next";

const LandingPage: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box
        sx={{
          height: "600px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          background: "#FBFBFD",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            marginLeft: "10%",
          }}
        >
          <Text size={48} mb="md" mt={50} fw={700}>
            Write.
          </Text>
          <Text size={48} mb="md" fw={700}>
            Plan.
          </Text>
          <Text size={48} mb="md" fw={700}>
            Produce.
          </Text>
          <Text size={48} mb="md" fw={700}>
            Together.
          </Text>
          <Text mb="md" ta={"left"}>
            Whether you're taping a show in a <Text td="underline" component="span">studio</Text>, collaborating on
            <Text td="underline" component="span">screenplays</Text>, or making a <Text td="underline" component="span">video game</Text>, Scripto helps you do your best
            work and save time while you do it.
          </Text>
          <Button
            h={60}
            w={240}
            sx={{
              borderRadius: 10,
              fontSize: 18,
              background: "#876AC2",
              padding: 20,
            }}
          >
            Book a Demo
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/images/landing-page.png)",
            backgroundRepeat: "no-repeat",
            width: "70%",
            position: "relative",
          }}
        >
          <Image
            src="/images/script-editor.png"
            width={"85%"}
            sx={{ position: "absolute", zIndex: 1, marginLeft: 110 }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box ta="center">
          <Text mt={70} size={40} fw={700}>Streamlining Your Project is Easy</Text>
          <Text mb="50px" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </Box>
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            width: "90%",
            background: "#FBFBFD",
            borderRadius: "50px",
            padding: "50px"
          }}
        >
          <Card
            imgSrc="/images/collaboration.png"
            title="True Collaboration."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link="#"
          />
          <Card
            imgSrc="/images/rundowns.png"
            title="Smart Rundowns."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link="#"
          />
          <Card
            imgSrc="/images/format.png"
            title="Any Format."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link="#"
          />
        </Box>
        <Box mt={125} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Text size={40} fw={700} >Powering the Creative Force: Teams That Choose Us.</Text>
          <Text>Trusted by top teams in the industry</Text>
          <Box mt={50} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "90%" }}>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px", 
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="full frontal" src="/images/show-logos/full-frontal-with-samantha-bee.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="problem with jon" src="/images/show-logos/problem-with-jon-stewart.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="the daily show" src="/images/show-logos/daily-show.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="game theory" src="/images/show-logos/game-theory-with-bomani-jones.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="patriot act" src="/images/show-logos/patriot-act.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="the opposition" src="/images/show-logos/the-opposition-with-jordan-klepper.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="the rundown" src="/images/show-logos/rundown-with-robin-thede.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="desus and mero" src="/images/show-logos/desus-and-mero.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="a little late" src="/images/show-logos/a-little-late-with-lilly-singh.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="jim jefferies show" src="/images/show-logos/jim-jefferies-show.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="problem areas" src="/images/show-logos/wyatt-cenacs-problem-areas.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "185px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="tooning out the news" src="/images/show-logos/tooning-out-the-news.png" width={"100%"} />
            </Box>
            {/* smaller boxes */}
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "125px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="late show" src="/images/show-logos/late-show.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "125px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="finji" src="/images/show-logos/finji.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "125px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="last week tonight" src="/images/show-logos/last-week-tonight.png" width={"100%"} />
            </Box>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "20px",
                margin: "12.5px 25px",
                width: "125px", 
                height: "125px", 
                background: "#FBFBFD",
                borderRadius: "10px",
                boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image alt="nerial" src="/images/show-logos/nerial.png" width={"100%"} />
            </Box>
            
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Text>Center Box 1</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text>Feature that is amazing</Text>
              <Text>Lorem Ipsum here</Text>
              <Button variant="outline">Learn more</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text>Feature that is amazing</Text>
              <Text>Lorem Ipsum here</Text>
              <Button variant="outline">Learn more</Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Text>Center Box 4</Text>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Text>Here is a testimonial</Text>
        <Text>Here is a testimonial</Text>
      </Box>
      <Footer />
    </AppLayout>
  );
};

export default LandingPage;
