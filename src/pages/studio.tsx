import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Space, Image, MediaQuery, Title } from "@mantine/core";
import { PageWithLayout } from "next";

const StudioPage: PageWithLayout = ({ features }: any) => {
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
          <Title ta="center" size={48} fw={700} mt={40} sx={{ zIndex: 1 }}>
            Studio TV
          </Title>
          <Text ta="center" size={20} mb={40} sx={{ zIndex: 1, maxWidth: "850px" }}>
            Scripto powers the world-class writing process at Emmy-winning shows like{" "} 
            <span style={{ fontStyle: "italic" }}>Last Week Tonight{" "}</span>
            and
            <span style={{ fontStyle: "italic" }}>{" "}The Late Show.</span>
          </Text>
        </Box>

        <MediaQuery
          query="(max-width: 1024px)"
          styles={{ flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", minHeight: "682px", background: "#301F55" }}>

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
                  src="/images/studiotv-page/side-comp.png"
                  width={"95%"}
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
                    Faster, Better, Cheaper.
                  </Text>
                  <Text size={20}>
                    Real-time collaboration between writers and production means major departments have up-to-the-second visibility into script updates, so they can pivot when the plan inevitably changes.
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
          <Box sx={{ display: "flex", minHeight: "682px", background: "#8252C6" }}>

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
                    Show Timing.
                  </Text>
                  <Text size={20}>
                    Dial in super-precise timing estimates that account for your host’s speaking cadence and the duration of media clips.
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
                  gridTemplateRows: "repeat(6, 1fr)",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/studiotv-page/show-timing.png"
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt="screen image"
                  sx={{
                    gridColumn: "3 / 11",
                    gridRow: "1 / 6",
                    zIndex: 2,
                  }}
                />
                <Box
                  ml="auto"
                  sx={{
                    gridColumn: "1 / 8",
                    gridRow: "1 / 7",
                    zIndex: 2,
                    borderRadius: "10px",
                    width: "95%",
                    boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Image
                    src="/images/studiotv-page/timing2.png"
                    width={"100%"}
                    radius={10}
                    alt="screen image"
                  />
                </Box>
                <Image
                    src="/images/features-page/prompter-bg.png"
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 6",
                      transform: "scale(1.3)",
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
          <Box sx={{ display: "flex", minHeight: "682px", background: "#301F55" }}>

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
                  src="/images/features-page/rundowns.png"
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
                    Rundowns.
                  </Text>
                  <Text size={20}>
                    Customize the rundown grid to suit the needs of your control room. Then build out rundowns 10x faster with script-to-rundown import logic that feels like magic.
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
          <Box sx={{ display: "flex", minHeight: "682px", background: "#8252C6" }}>

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
                    Push to Prompter.
                  </Text>
                  <Text size={20}>
                    Scripto integrates seamlessly with most major teleprompter systems including Autoscript WinPlus, AutoCue, Cuescript and Telescript.
                  </Text>
                  <Text size={20} mt={20}>
                    Scripto’s “live prompter” view turns any computer or monitor into a simple teleprompter. Handy for table reads, field pieces, and anything shot on your computer’s webcam.
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
                  src="/images/studiotv-page/push-to-prompter.png"
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

        <CTA background="#FBFBFD" buttonColor="#8252C6" text="#000" />
      </Box>
    </AppLayout>
  );
};

export default StudioPage;