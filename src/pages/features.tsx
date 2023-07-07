import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Space, Image, MediaQuery, Title } from "@mantine/core";
import { PageWithLayout } from "next";

const AlternatingFeature = ({
  bgImgPath,
  imgPath,
  bgColor,
  altText,
  title,
  copy,
  isImgAlignLeft,
  orderIndex,
}: {
  bgImgPath: string;
  imgPath: string;
  bgColor: string;
  altText: string;
  title: string;
  copy: string;
  isImgAlignLeft: boolean;
  orderIndex: number;
}) => {
  return (
    <MediaQuery query="(max-width: 1024px)" styles={{ minHeight: "550px" }}>
      <MediaQuery
        query="(max-width: 768px)"
        styles={
          orderIndex % 2 != 0
            ? { flexDirection: "column-reverse" }
            : { flexDirection: "column" }
        }
      >
        <Box sx={{ display: "flex", minHeight: "682px", background: bgColor }}>
          {isImgAlignLeft ? (
            <MediaQuery
              query="(max-width: 1024px) and (min-width: 768px)"
              styles={{ width: "55%" }}
            >
              <MediaQuery
                query="(max-width: 768px)"
                styles={{ width: "100%", marginTop: "80px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <MediaQuery
                    query="(max-width: 768px)"
                    styles={
                      bgImgPath == "/images/features-page/prompter-bg.png"
                        ? { right: 0, top: -120 }
                        : { right: 0, top: -100 }
                    }
                  >
                    <Image
                      src={bgImgPath}
                      width={
                        bgImgPath == "/images/features-page/rundowns-bg.png"
                          ? "98%"
                          : "110%"
                      }
                      alt="bg image"
                      sx={{
                        position: "absolute",
                        right:
                          bgImgPath == "/images/features-page/rundowns-bg.png"
                            ? -30
                            : 0,
                        top:
                          bgImgPath == "/images/features-page/rundowns-bg.png"
                            ? -50
                            : -20,
                      }}
                    />
                  </MediaQuery>
                  <Image
                    src={imgPath}
                    width={"90%"}
                    radius={10}
                    ml="auto"
                    alt={altText}
                  />
                </Box>
              </MediaQuery>
            </MediaQuery>
          ) : (
            <MediaQuery
              query="(max-width: 1024px) and (min-width: 768px)"
              styles={{ width: "45%" }}
            >
              <MediaQuery
                query="(max-width: 768px)"
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
                      {title}
                    </Text>
                    <Text size={20}>{copy}</Text>
                  </Box>
                </Box>
              </MediaQuery>
            </MediaQuery>
          )}{" "}
          {isImgAlignLeft ? (
            <MediaQuery
              query="(max-width: 1024px) and (min-width: 768px)"
              styles={{ width: "45%" }}
            >
              <MediaQuery
                query="(max-width: 768px)"
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
                      {title}
                    </Text>
                    <Text size={20}>{copy}</Text>
                  </Box>
                </Box>
              </MediaQuery>
            </MediaQuery>
          ) : (
            <MediaQuery
              query="(max-width: 1024px) and (min-width: 768px)"
              styles={{ width: "55%" }}
            >
              <MediaQuery
                query="(max-width: 768px)"
                styles={{ width: "100%", marginTop: "40px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <MediaQuery
                    query="(max-width: 768px)"
                    styles={
                      bgImgPath == "/images/features-page/prompter-bg.png"
                        ? { right: 0, top: -120 }
                        : { right: 0, top: -100 }
                    }
                  >
                    <Image
                      src={bgImgPath}
                      width={
                        bgImgPath == "/images/features-page/rundowns-bg.png"
                          ? "100%"
                          : "110%"
                      }
                      alt="bg image"
                      sx={{
                        position: "absolute",
                        right:
                          bgImgPath == "/images/features-page/rundowns-bg.png"
                            ? -30
                            : 0,
                        top:
                          bgImgPath == "/images/features-page/rundowns-bg.png"
                            ? -50
                            : -20,
                      }}
                    />
                  </MediaQuery>
                  <Image
                    src={imgPath}
                    width={"90%"}
                    radius={10}
                    ml="auto"
                    alt={altText}
                  />
                </Box>
              </MediaQuery>
            </MediaQuery>
          )}
        </Box>
      </MediaQuery>
    </MediaQuery>
  );
};

const AlternatingLayout = ({ features }: any) => {
  return (
    <>
      {features?.length > 0 ? (
        features.map((feature: any, index: any) => (
          <AlternatingFeature
            key={index}
            bgImgPath={feature.bgImgPath}
            imgPath={feature.imgPath}
            bgColor={feature.bgColor}
            altText={feature.altText}
            title={feature.title}
            copy={feature.copy}
            isImgAlignLeft={index % 2 === 0}
            orderIndex={index}
          />
        ))
      ) : (
        <Space h={600} />
      )}
    </>
  );
};

const FeaturesPage: PageWithLayout = ({ features }: any) => {
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
            Key Features
          </Title>
          <Text ta="center" size={20} sx={{ zIndex: 1 }}>
            Standing ovation, please. These features are guaranteed
            show-stoppers.
          </Text>
        </Box>
        <AlternatingLayout features={features && features} />
        <CTA background="#FBFBFD" buttonColor="#8252C6" text="#000" />
      </Box>
    </AppLayout>
  );
};

FeaturesPage.getInitialProps = async () => {
  const features = [
    {
      bgImgPath: "/images/features-page/video-games-bg.png",
      imgPath: "/images/features-page/standard-screenplay.png",
      bgColor: "#301F55",
      altText: "scripto editor",
      title: "A Missing Piece.",
      copy: "If your game prioritizes narrative design or features multiple content contributors, Scripto lets you run a professional writing process in a cozy editorial environment. We support the Ink interactive scripting language and our API makes it easy to integrate with your build pipeline.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/rundowns-bg.png",
      imgPath: "/images/features-page/rundowns.png",
      bgColor: "#8252C6",
      altText: "scripto editor",
      title: "Smart Rundowns.",
      copy: "It’s a law of modern work: Everything becomes a spreadsheet eventually. Scripto’s Rundowns let you do it with the click of a button. Drag and drop any script into our customizable grids and see the magic for yourself.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/prompter-bg.png",
      imgPath: "/images/features-page/push-to-prompter.png",
      bgColor: "#B89ADE",
      altText: "scripto editor",
      title: "Push to Prompter.",
      copy: "Scripted shows using the industry-standard screenplay format can now have true collaboration in the writers room. It&apos;s also great for pre-taped sketches at variety shows. Before you buy the new Final Draft, try Scripto for free!",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/video-games-bg.png",
      imgPath: "/images/features-page/collaboration-sc.png",
      bgColor: "#301F55",
      altText: "scripto editor",
      title: "True Collaboration.",
      copy: "Write with others in the same script at the same time, with automatic and flexible industry-standard formatting for variety shows, screenplays, video games, and more. You deserve better than Google Docs!",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/prompter-bg.png",
      imgPath: "/images/features-page/side-by-side-comparison.png",
      bgColor: "#B89ADE",
      altText: "scripto editor",
      title: "Change Tracking.",
      copy: "No matter what you're writing, planning, or producing, the only constant is change. Scripto tracks changes and saves backups as you work, and generates shareable change reports you can share with your whole team. Never again will you buy a prop that got cut two drafts ago.",
      isImgAlignLeft: true,
    },
  ];
  const shuffledFeatures = features
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return { features: shuffledFeatures };
};

export default FeaturesPage;
