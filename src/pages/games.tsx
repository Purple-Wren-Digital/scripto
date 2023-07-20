import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Space, Image, MediaQuery, Title } from "@mantine/core";
import { PageWithLayout } from "next";

const VideogamesPage: PageWithLayout = ({ features }: any) => {
  return (
    <AppLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#301F55",
          color: "#FFF",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
            background: "#FBFBFD",
            color: "#000",
            position: "relative",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <MediaQuery query="(max-width: 768px)" styles={{ opacity: 0.5 }}>
            <Image
              src="/images/team-page/team-ellipse1.png"
              alt="cta bg ellipse"
              width={300}
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ opacity: 0.5, right: -100 }}
          >
            <MediaQuery query="(max-width: 480px)" styles={{ display: "none" }}>
              <Image
                src="/images/team-page/team-ellipse2.png"
                alt="cta bg ellipse"
                width={300}
                sx={{
                  position: "absolute",
                  right: 100,
                  top: 0,
                  zIndex: 0,
                }}
              />
            </MediaQuery>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
            <Image
              src="/images/team-page/team-ellipse3.png"
              alt="cta bg ellipse"
              width={180}
              sx={{
                position: "absolute",
                right: 0,
                top: 110,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <MediaQuery
            query="(max-width: 1024px) and (min-width: 769px)"
            styles={{ right: 180 }}
          >
            <MediaQuery
              query="(max-width: 768px)"
              styles={{ opacity: 0.5, right: -30 }}
            >
              <MediaQuery
                query="(max-width: 480px)"
                styles={{ display: "none" }}
              >
                <Image
                  src="/images/features-page/key-features-ellipse.png"
                  alt="cta bg ellipse"
                  width={300}
                  sx={{
                    position: "absolute",
                    right: 400,
                    bottom: 0,
                    zIndex: 0,
                  }}
                />
              </MediaQuery>
            </MediaQuery>
          </MediaQuery>
          <Title ta="center" size={48} fw={700} sx={{ zIndex: 1 }}>
            Video Game Studios
          </Title>
          <Text ta="center" size={20} sx={{ zIndex: 1, maxWidth: "850px" }}>
            Scripto powers a collaborative writing environment tailored to the needs of narrative video games. Stop asking your writers to learn about version control, spend less time cutting and pasting, and playtest new work immediately.
          </Text>
        </Box>

        <MediaQuery
          query="(max-width: 1024px)"
          styles={{ flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", minHeight: "682px", background: "#8252C6" }}>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{ width: "100%" }}
            >

              <Box
                sx={{
                  width: "50%",
                  position: "relative",

                  display: "grid",
                  gridTemplateColumns: "repeat(10, 1fr)",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/games-page/custom-formats.png"
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt="screen image"
                  sx={{
                    gridColumn: "1 / 11",
                    gridRow: "1 / 2",
                    zIndex: 2,
                  }}
                />
                <Image
                    src="/images/features-page/video-games-bg.png"
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 2",
                      transform: "scale(1.3)",
                      zIndex: 1,
                    }}
                  />
              </Box>

            </MediaQuery>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{
                width: "100%",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "50%",
                  zIndex: 1,
                  padding: "40px",
                }}
              >
                <Box ta="left" sx={{ maxWidth: "420px" }}>
                  <Text size={24} fw={700} mb={24}>
                    Custom Formats.
                  </Text>
                  <Text size={20}>
                    Video games have their own unique production requirements that need to be represented in scripts. Scripto’s flexible format system can accommodate emotes, camera blocking, and other engine-focused directions.
                  </Text>
                </Box>
              </Box>
            </MediaQuery>
          </Box>
        </MediaQuery>

        <MediaQuery
          query="(max-width: 1024px)"
          styles={{ flexDirection: "column-reverse" }}
        >
          <Box sx={{ display: "flex", minHeight: "682px", background: "#301F55" }}>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{
                width: "100%",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "50%",
                  zIndex: 1,
                  padding: "40px",
                }}
              >
                <Box ta="left" sx={{ maxWidth: "420px" }}>
                  <Text size={24} fw={700} mb={24}>
                    Ink Different.
                  </Text>
                  <Text size={20}>
                    Scripto supports the Ink interactive scripting language, with real-time compilation and a clickable prototype game player that updates as you edit the source script.
                  </Text>
                </Box>
              </Box>
            </MediaQuery>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{ width: "100%" }}
            >

              <Box
                sx={{
                  width: "50%",
                  position: "relative",

                  display: "grid",
                  gridTemplateColumns: "repeat(10, 1fr)",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/games-page/ink-diff.png"
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt="screen image"
                  sx={{
                    gridColumn: "1 / 11",
                    gridRow: "1 / 2",
                    zIndex: 2,
                  }}
                />
                <Image
                    src="/images/features-page/rundowns-bg.png"
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 2",
                      transform: "scale(1.15)",
                      zIndex: 1,
                    }}
                  />
              </Box>
            </MediaQuery>

          </Box>
        </MediaQuery>

        <MediaQuery
          query="(max-width: 1024px)"
          styles={{ flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", minHeight: "682px", background: "#8252C6" }}>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{ width: "100%" }}
            >

              <Box
                sx={{
                  width: "50%",
                  position: "relative",

                  display: "grid",
                  gridTemplateColumns: "repeat(10, 1fr)",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/games-page/engine-ready.png"
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt="screen image"
                  sx={{
                    gridColumn: "1 / 11",
                    gridRow: "1 / 2",
                    zIndex: 2,
                  }}
                />
                <Image
                    src="/images/features-page/prompter-bg.png"
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 2",
                      transform: "scale(1.3)",
                      zIndex: 1,
                    }}
                  />
              </Box>

            </MediaQuery>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{
                width: "100%",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "50%",
                  zIndex: 1,
                  padding: "40px",
                }}
              >
                <Box ta="left" sx={{ maxWidth: "420px" }}>
                  <Text size={24} fw={700} mb={24}>
                    Engine Ready.
                  </Text>
                  <Text size={20}>
                    Scripto’s API provides clean, machine-readable JSON that updates in real time. That means your team can integrate up-to-the-second content changes into your build pipeline, dramatically tightening your iteration cycle and helping you get better results sooner.
                  </Text>
                </Box>
              </Box>
            </MediaQuery>
          </Box>
        </MediaQuery>

        <MediaQuery
          query="(max-width: 1024px)"
          styles={{ flexDirection: "column-reverse" }}
        >
          <Box sx={{ display: "flex", minHeight: "682px", background: "#B89ADE" }}>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{
                width: "100%",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "50%",
                  zIndex: 1,
                  padding: "40px",
                }}
              >
                <Box ta="left" sx={{ maxWidth: "420px" }}>
                  <Text size={24} fw={700} mb={24}>
                    Localize This.
                  </Text>
                  <Text size={20}>
                    We can integrate your game’s script format with Scripto’s Rundown feature, ro auto-generate spreadsheets and reports for VO recording and localization. Scripto takes the manual copying and pasting out of the process so you can focus on the material itself.
                  </Text>
                </Box>
              </Box>
            </MediaQuery>

            <MediaQuery
              query="(max-width: 1024px)"
              styles={{ width: "100%" }}
            >

              <Box
                sx={{
                  width: "50%",
                  position: "relative",

                  display: "grid",
                  gridTemplateColumns: "repeat(10, 1fr)",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/games-page/localize.png"
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt="screen image"
                  sx={{
                    gridColumn: "1 / 11",
                    gridRow: "1 / 2",
                    zIndex: 2,
                  }}
                />
                <Image
                    src="/images/features-page/video-games-bg.png"
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 2",
                      transform: "scale(1.3)",
                      zIndex: 1,
                    }}
                  />
              </Box>
            </MediaQuery>

          </Box>
        </MediaQuery>

        <CTA background="#FBFBFD" buttonColor="#8252C6" text="#000" />
      </Box>
    </AppLayout>
  );
};

export default VideogamesPage;