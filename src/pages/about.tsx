import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import {
  Text,
  Box,
  Button,
  Space,
  Image,
  MediaQuery,
  Title,
} from "@mantine/core";
import { PageWithLayout } from "next";
import { useMediaQuery } from "@mantine/hooks";

const AboutPage: PageWithLayout = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isSmallDesktop = useMediaQuery("(max-width: 1024px)");

  return (
    <AppLayout>
      <Box sx={{ display: "flex", flexDirection: "column", color: "#000" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
            background: "#EAD8AD",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <MediaQuery query="(max-width: 768px)" styles={{ opacity: 0.5 }}>
            <Image
              src="/images/team-page/team-ellipse1.png"
              alt="cta bg ellipse"
              width={350}
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
                width={350}
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
              width={200}
              sx={{
                position: "absolute",
                right: 0,
                top: 180,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <Title size={48} fw={700} mb={25} mt={40} sx={{ zIndex: 1 }}>
            About Us
          </Title>
          <Text ta="center" size={20} mb={40} sx={{ maxWidth: 645, zIndex: 1 }}>
            Stephen Colbert and Rob Dubbin co-founded Scripto to solve their own problem: In a highly collaborative TV environment with ambitious daily deadlines, their pre-cloud software couldn’t keep up. Now, Scripto combines the real-time flow of Google Docs with the professional writing and production formats used in TV, video games, and&nbsp;other&nbsp;media.
          </Text>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", color: "#000" }}>
        <Box
          sx={{
            minHeight: "800px",
            position: "relative",
            background: "#F0EFF1",

            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
          }}
        >
          <MediaQuery
            query="(max-width: 1024px) and (min-width: 768px)"
            styles={{ gridColumn: "1 / 5" }}
          >
            <MediaQuery
              query="(max-width: 768px) and (min-width: 480px)"
              styles={{ gridColumn: "1 / 6", opacity: 0.7 }}
            >
              <MediaQuery
                query="(max-width: 480px)"
                styles={{ gridColumn: "1 / 8", opacity: 0.7 }}
              >
                <Box
                  sx={{
                    gridColumn: "1 / 4",
                    gridRow: "1 / 2",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/team-page/goat-graphic.png"
                    width={"100%"}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                    }}
                    alt="goat"
                  />
                </Box>
              </MediaQuery>
            </MediaQuery>
          </MediaQuery>
          <MediaQuery
            query="(max-width: 1024px) and (min-width: 480px)"
            styles={{ gridColumn: "2 / 11" }}
          >
            <MediaQuery
              query="(max-width: 480px)"
              styles={{ gridColumn: "1 / 11" }}
            >
              <Box
                sx={{
                  gridColumn: "3 / 11",
                  gridRow: "1 / 2",
                  // width: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <MediaQuery query="(max-width: 1024px)" styles={{ right: 5 }}>
                  <MediaQuery
                    query="(max-width: 768px)"
                    styles={{ display: "none" }}
                  >
                    <Image
                      src="/images/team-page/bg-ellipse-1.png"
                      width={isSmallDesktop ? 600 : 650}
                      sx={{
                        position: "absolute",
                        bottom: 30,
                        right: 20,
                      }}
                      alt="goat"
                    />
                  </MediaQuery>
                </MediaQuery>
                <MediaQuery
                  query="(max-width: 768px)"
                  styles={{ background: "none", boxShadow: "none", padding: 0 }}
                >
                  <Box
                    my={50}
                    sx={{
                      width: "80%",
                      padding: "60px",
                      background: "#FBFBFD",
                      borderRadius: "10px",
                      boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      zIndex: 1,
                    }}
                  >
                    <Text size={24} fw={700} mb={24}>
                      It All Started With a Goat...
                    </Text>
                    <Text size={20} mb={24}>
                      Long ago, before Scripto existed, there was a show called
                      The Colbert Report, where some writers optimistically
                      wrote in a surprise appearance by a live goat. To
                      everyone’s surprise, the idea moved forward — which meant
                      booking a showbiz-grade goat from an ethical and TV-ready
                      animal handler, at significant expense to the production.
                    </Text>
                    <Text size={20} mb={24}>
                      Only problem was: TV being TV, the goat’s appearance was
                      cut from the script in revisions. And because they weren’t
                      using Scripto, the show didn’t find out about the script
                      change until the Tom Cruise of goats was already en route
                      to the studio.
                    </Text>
                    <Text size={20} mb={24}>
                      We all learned an important lesson that day: It’s good to
                      make changes to a script, but only if everyone else can
                      see them too. That was the first spark of an idea that led
                      to the creation of Scripto.
                    </Text>
                  </Box>
                </MediaQuery>
              </Box>
            </MediaQuery>
          </MediaQuery>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#252634",
        }}
      >
        <Box
          mt={80}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#FBFBFD",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <Text size={24} fw={700} mb={25}>
            Meet The Crew
          </Text>
          <Text ta="center" size={20} sx={{ maxWidth: 645 }}>
            At Scripto, collaboration is also important to us internally. We’re a small but mighty team supporting some of the most ambitious creative productions across the entertainment&nbsp;industry.
          </Text>
        </Box>
        <Box
          mt={60}
          mb={80}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 80,
            width: "90%",
            maxWidth: "950px",
          }}
        >
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(234, 216, 173, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/stephen-colbert.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Stephen Colbert
            </Text>
            <Text size={18} ta="center">
              Founder
            </Text>
            <Text size={18} ta="center">
              New York, NY
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(234, 216, 173, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/evelyn-mcgee-colbert.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Evelyn McGee-Colbert
            </Text>
            <Text size={18} ta="center">
              Founder
            </Text>
            <Text size={18} ta="center">
              New York, NY
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(201, 121, 111, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/rob-dubbin.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Rob Dubbin
            </Text>
            <Text size={18} ta="center">
              Founder
            </Text>
            <Text size={18} ta="center">
              The Catskills, NY
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(184, 154, 222, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/elisabeth-boonin.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Elisabeth &quot;Boon&quot; Boonin
            </Text>
            <Text size={18} ta="center">
              Engineering
            </Text>
            <Text size={18} ta="center">
              Petaluma, CA
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(201, 121, 111, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/juan-de-los-rios.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Juan de los Rios
            </Text>
            <Text size={18} ta="center">
              Engineering
            </Text>
            <Text size={18} ta="center">
              San Francisco, CA
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(234, 216, 173, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/alice-dubois.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Alice DuBois
            </Text>
            <Text size={18} ta="center">
              Product
            </Text>
            <Text size={18} ta="center">
              Los Angeles, CA
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(184, 154, 222, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/john-gravois.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              John Gravoisn
            </Text>
            <Text size={18} ta="center">
              Engineering
            </Text>
            <Text size={18} ta="center">
              Orange County, CA
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(201, 121, 111, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/mel-thomas.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Mel Thomas
            </Text>
            <Text size={18} ta="center">
              Design
            </Text>
            <Text size={18} ta="center">
              Louisville, KY
            </Text>
          </Box>
          <Box
            mb={isMobile ? 10 : isTablet ? 30 : 40}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FBFBFD",
              maxWidth: 250,
            }}
          >
            <Box
              mx="auto"
              sx={{
                width: "235px",
                height: "235px",
                borderRadius: "50%",
                border: "15px solid rgba(184, 154, 222, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                width={235}
                height={235}
                src="/images/team-page/headshots/nick-wakeham.png"
                alt="headshot"
                withPlaceholder
                fit="cover"
              />
            </Box>
            <Text ta="center" size={20} fw={700} mt={20}>
              Nick Wakeham
            </Text>
            <Text size={18} ta="center">
              Business Development
            </Text>
            <Text size={18} ta="center">
              Toronto, Ontario
            </Text>
          </Box>
        </Box>
      </Box>
      <CTA background="#252634" buttonColor="#8252C6" text="#FBFBFD" />
    </AppLayout>
  );
};

export default AboutPage;
