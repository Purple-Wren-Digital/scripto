import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Text, Box, Button, Space, Image, Flex, Avatar } from "@mantine/core";
import { PageWithLayout } from "next";

const FeaturesPage: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box sx={{ display: "flex", flexDirection: "column", background: "#301F55", color: "#FFF" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
          }}
        >
          <Text size={48} fw={700}>Key Features</Text>
          <Text size={20}>
            Standing ovation, please. These features are guaranteed
            show-stoppers.
          </Text>
        </Box>
        <Box sx={{ display: "flex", minHeight: "682px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Text>IMAGE HERE</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Text>A Missing Piece for Video Games.</Text>
            <Text>
              If your game prioritizes narrative design or features multiple
              content contributors, Scripto lets you run a professional writing
              process in a cozy editorial environment. We support the Ink
              interactive scripting language and our API makes it easy to
              integrate with your build pipeline.
            </Text>
          </Box>
        </Box>
        <Box sx={{ display: "flex", minHeight: "682px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Text>Smart Rundowns.</Text>
            <Text>
              It’s a law of modern work: Everything becomes a spreadsheet
              eventually. Scripto’s Rundowns let you do it with the click of a
              button. Drag and drop any script into our customizable grids and
              see the magic for yourself.
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Text>IMAGE HERE</Text>
          </Box>
        </Box>
        <Box sx={{ display: "flex", minHeight: "682px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Text>IMAGE HERE</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Text>Push to Prompter.</Text>
            <Text>
              Scripted shows using the industry-standard screenplay format can
              now have true collaboration in the writers room. It's also great
              for pre-taped sketches at variety shows. Before you buy the new
              Final Draft, try Scripto for free!
            </Text>
          </Box>
        </Box>
        <Box sx={{ display: "flex", minHeight: "682px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Text>IMAGE HERE</Text>
            <Text>True Collaboration.</Text>
            <Text>
              Write with others in the same script at the same time, with
              automatic and flexible industry-standard formatting for variety
              shows, screenplays, video games, and more. You deserve better than
              Google Docs!
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Text>IMAGE HERE</Text>
            <Text>Change Tracking.</Text>
            <Text>
              No matter what you’re writing, planning, or producing, the only
              constant is change. Scripto tracks changes and saves backups as
              you work, and generates shareable change reports you can share
              with your whole team. Never again will you buy a prop that got cut
              two drafts ago.
            </Text>
          </Box>
        </Box>
        <CTA />
      </Box>
    </AppLayout>
  );
};

export default FeaturesPage;
