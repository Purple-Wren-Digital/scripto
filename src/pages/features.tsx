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
              backgroundImage: "url(/images/features-page/video-games-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "90%",
            }}
          >
            <Image
              src="/images/features-page/standard-screenplay.png"
              width={"85%"}
              radius={10}
              ml="auto"
              alt="script editor"
            />
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
            <Box ta="left" sx={{ maxWidth: "420px" }}>
              <Text size={24} fw={700} mb={24}>A Missing Piece for Video Games.</Text>
              <Text size={20} >
                If your game prioritizes narrative design or features multiple
                content contributors, Scripto lets you run a professional writing
                process in a cozy editorial environment. We support the Ink
                interactive scripting language and our API makes it easy to
                integrate with your build pipeline.
              </Text>
            </Box>
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
            <Box ta="left" sx={{ maxWidth: "420px" }}>
              <Text size={24} fw={700} mb={24}>Smart Rundowns.</Text>
              <Text size={20}>
                It’s a law of modern work: Everything becomes a spreadsheet
                eventually. Scripto’s Rundowns let you do it with the click of a
                button. Drag and drop any script into our customizable grids and
                see the magic for yourself.
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundImage: "url(/images/features-page/rundown-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "90%",
            }}
          >
            <Image
              src="/images/features-page/rundowns.png"
              width={"85%"}
              radius={10}
              ml="auto"
              alt="script editor"
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", minHeight: "682px" }}>
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundImage: "url(/images/features-page/prompter-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "90%",
            }}
          >
            <Box ml="auto" sx={{ position: "relative", width: "85%"}}>
              <Image
                src="/images/features-page/push-to-prompter.png"
                width={"100%"}
                radius={10}
                ml="auto"
                alt="script editor"
              />
              <Image
                src="/images/features-page/prompter-view-1.png"
                width={"75%"}
                radius={10}
                sx={{ position: "absolute", bottom: "-10%", right: "-25%",  }}
                alt="script editor"
              />
            </Box>
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
            <Box ta="left" sx={{ maxWidth: "420px" }}>
              <Text size={24} fw={700} mb={24}>Push to Prompter.</Text>
              <Text size={20}>
                Scripted shows using the industry-standard screenplay format can
                now have true collaboration in the writers room. It&apos;s also great
                for pre-taped sketches at variety shows. Before you buy the new
                Final Draft, try Scripto for free!
              </Text>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", minHeight: "682px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "480px",
              }}
            >
              <Box
                sx={{
                  background: "#FBFBFD",
                  padding: "50px 20px",
                  width: "100%",
                  height: "320px",
                  borderRadius: "10px",
                }}
              >
                <Image 
                  src="/images/features-page/collaboration-sc.png"
                  width={"100%"}
                  alt="collaboration"
                />
              </Box>
              <Text mt={50} size={24} fw={700}>True Collaboration.</Text>
              <Text mt={20} mb={20} size={20}>
                Write with others in the same script at the same time, with
                automatic and flexible industry-standard formatting for variety
                shows, screenplays, video games, and more. You deserve better than
                Google Docs!
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "480px",
              }}
            >
              <Box
                sx={{
                  background: "#FBFBFD",
                  padding: "50px 20px",
                  width: "100%",
                  height: "320px",
                  borderRadius: "10px",
                }}
              >
                <Image 
                  src="/images/features-page/change-tracking-1sc.png"
                  width={"100%"}
                  alt="collaboration"
                />
              </Box>
              <Text mt={50} size={24} fw={700}>Change Tracking.</Text>
              <Text mt={20} mb={20} size={20}>
                No matter what you&apos;re writing, planning, or producing, the only
                constant is change. Scripto tracks changes and saves backups as
                you work, and generates shareable change reports you can share
                with your whole team. Never again will you buy a prop that got cut
                two drafts ago.
              </Text>
            </Box>
          </Box>
        </Box>
        <CTA
          background="#301F55"
          buttonColor="#8252C6"
          text="#FFF"
        />
      </Box>
    </AppLayout>
  );
};

export default FeaturesPage;
