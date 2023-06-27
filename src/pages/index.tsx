import { AppLayout } from "@/components/AppLayout";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Text, Box, Button, Space, Image } from "@mantine/core";
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
          <Text size={48} mb="md" mt={50}>
            Write.
          </Text>
          <Text size={48} mb="md">
            Plan.
          </Text>
          <Text size={48} mb="md">
            Produce.
          </Text>
          <Text size={48} mb="md">
            Together.
          </Text>
          <Text mb="md" ta={"left"}>
            Whether you're taping a show in a studio, collaborating on
            screenplays, or making a video game, Scripto helps you do your best
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box ta="center">
          <Text>Key Features</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Card
            imgSrc="/images/landing-page.png"
            title="new title"
            text="text 1"
            link="#"
          />
          <Card
            imgSrc="/images/landing-page.png"
            title="new title"
            text="text 2"
            link="#"
          />
          <Card
            imgSrc="/images/landing-page.png"
            title="new title"
            text="text 1"
            link="#"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Text>Trusted by the World's Best Companies</Text>
          <Box sx={{ display: "flex" }}>
            <Image src="#" />
            <Image src="#" />
            <Image src="#" />
            <Image src="#" />
            <Image src="#" />
            <Image src="#" />
            <Image src="#" />
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
