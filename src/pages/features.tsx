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
            Collaborative script writing and production software built for creative teams.
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
      imgPath: "/images/features-page/video-game.gif",
      bgColor: "#301F55",
      altText: "scripto editor",
      title: "Any Format.",
      copy: "Been working in Word or Google Docs? You probably have a format you’re used to writing in. But you might also have to spend a lot of time manually centering speech blocks or highlighting script elements in certain colors. Scripto’s customizable format engine lets us configure scripts and rundowns to fit your project’s unique workflow, so your team can focus on what really matters: The content itself.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/rundowns-bg.png",
      imgPath: "/images/features-page/smart-rundowns.gif",
      bgColor: "#8252C6",
      altText: "scripto editor",
      title: "Smart Rundowns.",
      copy: "Practically every line of a professional script contains instructions for someone else working on the team. You can use Scripto’s rundowns to organize and communicate about that work, crafting templates for shows, events, localization, and more. If it looks like a spreadsheet, Scripto can generate it for you with the click of a button.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/prompter-bg.png",
      imgPath: "/images/features-page/screenplay-format.gif",
      bgColor: "#B89ADE",
      altText: "scripto editor",
      title: "Search.",
      copy: "Lorem ipsum dolor sit amet. Non laboriosam numquam et modi vero ab fugit assumenda. Ut voluptas quaerat ut enim possimus non necessitatibus quia et tempora quia ut maxime Quis eos quisquam expedita non perspiciatis consectetur.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/video-games-bg.png",
      imgPath: "/images/features-page/collaboration-sc.gif",
      bgColor: "#301F55",
      altText: "scripto editor",
      title: "True Collaboration.",
      copy: "Whether you’re writing in the same room, in the same Zoom, or across different time zones, Scripto keeps everyone on the same page. Every document in Scripto is fully collaborative by nature — no more trading PDFs or getting “locked out” because someone left a file open on their computer.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/prompter-bg.png",
      imgPath: "/images/features-page/change-tracking.gif",
      bgColor: "#B89ADE",
      altText: "scripto editor",
      title: "Change Tracking.",
      copy: "No matter what you’re writing, planning, or producing, the only constant is change. Scripto tracks changes and saves backups as you work, and generates shareable change reports you can share with your whole team.",
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
