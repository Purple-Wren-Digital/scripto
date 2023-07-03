import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Box, MediaQuery, Image, Text, List } from "@mantine/core";
import { PageWithLayout } from "next";
import Link from "next/link";

const TermsPage: PageWithLayout = () => {
  return (
    <AppLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#301F55",
          color: "#FFF",
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
          <Text ta="center" size={48} fw={700} sx={{ zIndex: 1 }}>
            Terms of Service
          </Text>
          <Text ta="center" size={20} sx={{ zIndex: 1 }}>
            Our lawyers made us do it.
          </Text>
        </Box>

        <MediaQuery
          query="(max-width: 768px)"
          styles={{ flexDirection: "column" }}
        >
          <Box
            mt={120}
            mb={80}
            sx={{ display: "flex", minHeight: "682px", background: "#FFFFFF" }}
          >
            <MediaQuery
              query="(max-width: 768px)"
              styles={{ width: "100%", marginBottom: 80 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "50%",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <List type="ordered">
                  <List.Item>TERMS</List.Item>
                  <Text>
                    By accessing the website at{" "}
                    <Link
                      href="https://app.scripto.live"
                      style={{ textDecoration: "none" }}
                    >
                      https://app.scripto.live
                    </Link>
                    , you are agreeing to be bound by these terms of service,
                    all applicable laws and regulations, and agree that you are
                    responsible for compliance with any applicable local laws.
                    If you do not agree with any of these terms, you are
                    prohibited from using or accessing this site. The materials
                    contained in this website are protected by applicable
                    copyright and trademark law.
                  </Text>
                </List>
              </Box>
            </MediaQuery>
            {/* <MediaQuery
              query="(max-width: 768px)"
              styles={{ width: "100%" }}
            ></MediaQuery> */}
          </Box>
        </MediaQuery>
        <CTA background="#FBFBFD" buttonColor="#8252C6" text="#000" />
      </Box>
    </AppLayout>
  );
};

export default TermsPage;
