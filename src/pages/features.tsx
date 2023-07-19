import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Space, Image, MediaQuery, Title, List, getDefaultZIndex } from "@mantine/core";
import { PageWithLayout } from "next";

const AlternatingFeature = ({
  bgImgPath,
  imgPath,
  bgColor,
  altText,
  mainTitle,
  mainCopy,
  subTitleOne,
  subCopyOne,
  subTitleTwo,
  subCopyTwo,
  subTitleThree,
  subCopyThree,
  isImgAlignLeft,
  orderIndex,
}: {
  bgImgPath: string;
  imgPath: string;
  bgColor: string;
  altText: string;
  mainTitle: string;
  mainCopy: string;
  subTitleOne: string;
  subCopyOne: string;
  subTitleTwo: string;
  subCopyTwo: string;
  subTitleThree: string;
  subCopyThree: string;
  isImgAlignLeft: boolean;
  orderIndex: number;
}) => {
  return (
    <MediaQuery query="(max-width: 1024px)" styles={{ minHeight: "550px" }}>
      <MediaQuery
        query="(max-width: 1024px)"
        styles={
          orderIndex % 2 != 0
            ? { flexDirection: "column-reverse" }
            : { flexDirection: "column" }
        }
      >
        <Box sx={{ display: "flex", minHeight: "682px", background: bgColor }}>
          {isImgAlignLeft ? (
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
                  src={imgPath}
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt={altText}
                  sx={{
                    gridColumn: "1 / 11",
                    gridRow: "1 / 2",
                    zIndex: 2,
                  }}
                />
                <Image
                    src={bgImgPath}
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 2",
                      // transform: "scale(1.3)"
                      transform: bgImgPath == "/images/features-page/rundowns-bg.png" ? "scale(1.15)" : "scale(1.3)",
                      zIndex: 1,
                    }}
                  />
              </Box>

            </MediaQuery>
          ) : (
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
                <Box ta="left" sx={{ maxWidth: "90%", color: "#FBFBFD" }}>
                  <Text size={24} fw={700} mb={24}>
                    {mainTitle}
                  </Text>
                  <Text mb={10}>{mainCopy}</Text>
                  <List listStyleType="disc" sx={{ color: "#FBFBFD" }}>
                    <List.Item><span style={{ fontWeight: 700 }}>{subTitleOne}</span> - {subCopyOne}</List.Item>
                    <List.Item><span style={{ fontWeight: 700 }}>{subTitleTwo}</span> - {subCopyTwo}</List.Item>
                    <List.Item><span style={{ fontWeight: 700 }}>{subTitleThree}</span> - {subCopyThree}</List.Item>
                  </List>
                </Box>
              </Box>
            </MediaQuery>
          )}{" "}
          {isImgAlignLeft ? (
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
                <Box ta="left" sx={{ maxWidth: "90%", color: "#FBFBFD" }}>
                  <Text size={24} fw={700} mb={24}>
                    {mainTitle}
                  </Text>
                  <Text mb={10}>{mainCopy}</Text>
                  <List listStyleType="disc" sx={{ color: "#FBFBFD" }}>
                    <List.Item><span style={{ fontWeight: 700 }}>{subTitleOne}</span> - {subCopyOne}</List.Item>
                    <List.Item><span style={{ fontWeight: 700 }}>{subTitleTwo}</span> - {subCopyTwo}</List.Item>
                    <List.Item><span style={{ fontWeight: 700 }}>{subTitleThree}</span> - {subCopyThree}</List.Item>
                  </List>
                </Box>
              </Box>
            </MediaQuery>
          ) : (
            <MediaQuery
              query="(max-width: 1024px)"
              styles={{ width: "100%" }}
            >
              {/* <Box
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
              </Box> */}

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
                  src={imgPath}
                  width={"90%"}
                  radius={10}
                  ml="auto"
                  alt={altText}
                  sx={{
                    gridColumn: "1 / 11",
                    gridRow: "1 / 2",
                    zIndex: 2,
                  }}
                />
                <Image
                    src={bgImgPath}
                    width={"100%"}
                    alt="bg image"
                    sx={{
                      gridColumn: "1 / 11",
                      gridRow: "1 / 2",
                      // transform: "scale(1.3)"
                      transform: bgImgPath == "/images/features-page/rundowns-bg.png" ? "scale(1.15)" : "scale(1.3)",
                      zIndex: 1,
                    }}
                  />
              </Box>

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
            mainTitle={feature.mainTitle}
            mainCopy={feature.mainCopy}
            subTitleOne={feature.subTitleOne}
            subCopyOne={feature.subCopyOne}
            subTitleTwo={feature.subTitleTwo}
            subCopyTwo={feature.subCopyTwo}
            subTitleThree={feature.subTitleThree}
            subCopyThree={feature.subCopyThree}
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
      imgPath: "/images/features-page/change-tracking.gif",
      bgColor: "#301F55",
      altText: "scripto editor",
      mainTitle: "Collaborative Scriptwriting.",
      mainCopy: "Whether you’re writing in the same room, in the same Zoom, or across different time zones, Scripto keeps everyone on the same page. Every document in Scripto is fully collaborative by nature — no more trading PDFs or getting “locked out” because someone left a file open on their computer.",
      subTitleOne: "Real-time collaboration",
      subCopyOne: "Write with others in the same script at the same time.",
      subTitleTwo: "Any format",
      subCopyTwo: "Industry-standard screenplay and studio/variety formats come for free, but script formats can be customized to the requirements of your project.",
      subTitleThree: "Change Tracking",
      subCopyThree: "No matter what you're writing, planning, or producing, the only constant is change. Scripto tracks changes and saves backups as you work, providing detailed views of what’s been added and removed with every revision.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/rundowns-bg.png",
      imgPath: "/images/features-page/smart-rundowns.gif",
      bgColor: "#8252C6",
      altText: "scripto editor",
      mainTitle: "Smart Rundowns.",
      mainCopy: "Practically every line of a professional script contains instructions for someone else working on the team. You can use Scripto’s rundowns to organize and communicate about that work, crafting templates for shows, events, localization, and more. If it looks like a spreadsheet, Scripto can generate it for you with the click of a button.",
      subTitleOne: "Real-time collaboration",
      subCopyOne: "Works with others in the same rundown at the same time.",
      subTitleTwo: "Flexible formats",
      subCopyTwo: "Rundowns are highly customizable. They can be used for anything from a run-of-show for live events to a localization tracker for video game translations.",
      subTitleThree: "Auto-import",
      subCopyThree: "Import lines from a script into rows in a spreadsheet with the click of a button.",
      isImgAlignLeft: true,
    },
    {
      bgImgPath: "/images/features-page/prompter-bg.png",
      imgPath: "/images/features-page/screenplay-format.gif",
      bgColor: "#B89ADE",
      altText: "scripto editor",
      mainTitle: "Organizational Hub.",
      mainCopy: "Scripto is your project’s shared brain. Everyone on the team knows where to go to find what they need, and everything’s linkable. Keep your docs in a secure central location, and manage who has access to them. Less email, we promise.",
      subTitleOne: "Flexible folders",
      subCopyOne: "Organize folders to suit your project’s workflow, and use Favorites and Recently Edited views to keep an eye on where the work is happening.",
      subTitleTwo: "Search",
      subCopyTwo: "No more combing through folders or email for the files you need – search your whole project archive at once.",
      subTitleThree: "Manage your workspace",
      subCopyThree: "Invite collaborators to work on your project, and manage their roles and permissions.",
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
