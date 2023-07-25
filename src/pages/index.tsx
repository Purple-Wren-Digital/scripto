import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import Card from "@/components/Card";
import {
  Text,
  Box,
  Button,
  Image,
  Avatar,
  MediaQuery,
  List,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { PageWithLayout } from "next";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import Banner from "../components/Banner";

const LandingPage: PageWithLayout = () => {
  const isShortCarousel = useMediaQuery("(max-width: 680px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <AppLayout>
      <Banner />
      <MediaQuery
        query="(max-width: 768px)"
        styles={{ flexDirection: "column" }}
      >
        <Box
          sx={{
            minHeight: "620px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            background: "#FBFBFD",
            overflow: "hidden",
          }}
        >
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ width: "100%", paddingRight: "10%" }}
          >
            <MediaQuery
              query="(max-width: 480px)"
              styles={{ fontSize: "32px" }}
            >
              <Box
                my={50}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  paddingLeft: "10%",
                  // marginLeft: "10%",
                  fontSize: "48px",
                }}
              >
                <Title fw={700} sx={{ maxWidth: "100%" }}>
                  Write.
                </Title>
                <Title fw={700}>Plan.</Title>
                <Title fw={700}>Produce.</Title>
                <Title mb="md" fw={700}>
                  Together.
                </Title>
                <Text mb="md" ta={"left"} size={18}>
                  Whether you&apos;re taping a show in a{" "}
                  <Text td="underline" component="span">
                    <Link style={{ color: "#0A2E49" }} href="/studio">
                      studio
                    </Link>
                  </Text>
                  , collaborating on{" "}
                  <Text td="underline" component="span">
                    <Link style={{ color: "#0A2E49" }} href="/screenplays">
                      screenplays
                    </Link>
                  </Text>
                  , or making a{" "}
                  <Text td="underline" component="span">
                    <Link style={{ color: "#0A2E49" }} href="/games">
                      video game
                    </Link>
                  </Text>
                  , Scripto helps you do your best work and save time while you
                  do it.
                </Text>
                <Text size={18} mb={10}>
                  Scripto is your team’s shared brain from conception through
                  production. Ditch last century’s soul-crushing tools and
                  unlock your project’s true potential. Made by professional
                  creators, for professional creators.
                </Text>
                <Link
                  href="https://calendly.com/nickscripto/scripto-demo"
                  style={{ textDecoration: "none" }}
                >
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
                </Link>
              </Box>
            </MediaQuery>
          </MediaQuery>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ width: "100%", paddingTop: "15%", paddingBottom: "15%" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url(/images/landing-page.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "90%",
                width: "70%",
                position: "relative",
              }}
            >
              <Image
                src="/images/script-editor.png"
                width={isMobile || isTablet ? "100%" : "85%"}
                radius={10}
                ml="auto"
                alt="script editor"
              />
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <MediaQuery
        query="(max-width: 768px)"
        styles={{ background: "#FBFBFD", overflow: "hidden" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ opacity: 0.3, top: 350 }}
          >
            <Image
              src="/images/landing-page-bg/streamline-bg-ellipse.png"
              alt="streamline bg ellipse"
              width={isMobile ? 500 : isTablet ? 520 : 400}
              sx={{
                position: "absolute",
                left: 0,
                top: 80,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <Box
            ta="center"
            sx={{ paddingLeft: "10%", paddingRight: "10%", zIndex: 1 }}
          >
            <MediaQuery
              query="(max-width: 480px)"
              styles={{ fontSize: "32px" }}
            >
              <Title mt={70} size={40} fw={700}>
                Upgrade to an Award-Winning Workflow
              </Title>
            </MediaQuery>
            <MediaQuery
              query="(max-width: 480px)"
              styles={{ marginBottom: "20px" }}
            >
              <Text mt={20} mb="50px" style={{ maxWidth: "850px" }}>
                Scripto reduces friction and enables collaboration at every step
                of the writing and production process. See why Scripto teams
                move faster and work better&nbsp;together.
              </Text>
            </MediaQuery>
          </Box>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              background: "none",
              borderRadius: "0px",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                width: "90%",
                background: "#FBFBFD",
                borderRadius: "50px",
                padding: "50px",
                boxShadow: "15px 20px 45px 5px rgba(0, 0, 0, 0.25)",
                zIndex: 1,
              }}
            >
              <Card
                imgSrc="/images/format.png"
                title="Collaborative Scriptwriting."
                text="Whether you’re writing in the same room, in the same Zoom, or across time zones, Scripto keeps everyone on the same page."
                link="/features"
              />
              <Card
                imgSrc="/images/edit.png"
                title="Intelligent Rundowns."
                text="Rundowns are customizable and script-aware, letting production teams turn a script into a spreadsheet fast."
                link="/features"
              />
              <Card
                imgSrc="/images/collaboration.png"
                title="Organizational Hub."
                text="Keep your docs in a secure central location, and manage who has access to them. Less email, we promise."
                link="/features"
              />
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <MediaQuery
        query="(max-width: 768px)"
        styles={{
          paddingTop: "40px",
          paddingBottom: "60px",
          background: "#FBFBFD",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "120px",
            paddingBottom: "120px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <MediaQuery
              query="(max-width: 480px)"
              styles={{ fontSize: "32px" }}
            >
              <Title size={40} fw={700} ta="center" sx={{ zIndex: 1 }}>
                Trusted by Top Teams For&nbsp;Years
              </Title>
            </MediaQuery>
            <Text mt={20} sx={{ zIndex: 1 }} ta="center">
              See who’s making some of your favorite TV and games with a little
              help from&nbsp;Scripto.
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {isShortCarousel ? (
              <Carousel
                slideSize="100%"
                withIndicators
                withControls={false}
                sx={{
                  width: "100%",
                }}
                styles={{
                  indicator: {
                    width: "10px",
                    height: "10px",
                    background: "none",
                    border: "1px solid #000",
                    marginLeft: "5px",
                    marginRight: "5px",
                    transition: "background 250ms ease",

                    "&[data-active]": {
                      background: "#000",
                    },
                  },
                }}
              >
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="last week tonight"
                        src="/images/show-logos/last-week-tonight.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="late show"
                        src="/images/show-logos/late-show.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="daily show"
                        src="/images/show-logos/daily-show.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="major league"
                        src="/images/show-logos/sports-league.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the problem"
                        src="/images/show-logos/problem-with-jon-stewart.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="finji"
                        src="/images/show-logos/finji.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="tooning out the news"
                        src="/images/show-logos/tooning-out-the-news.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="sketch show"
                        src="/images/show-logos/sketch-show.png"
                        width={"100%"}
                        height={"150px"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="nerial"
                        src="/images/show-logos/nerial.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="game theory"
                        src="/images/show-logos/game-theory-with-bomani-jones.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="full frontal"
                        src="/images/show-logos/full-frontal-with-samantha-bee.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="patriot act"
                        src="/images/show-logos/patriot-act.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="desus and mero"
                        src="/images/show-logos/desus-and-mero.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="pickled"
                        src="/images/show-logos/pickled.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="g word"
                        src="/images/show-logos/g_word.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the opposition"
                        src="/images/show-logos/the-opposition-with-jordan-klepper.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the rundown"
                        src="/images/show-logos/rundown-with-robin-thede.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="problem areas"
                        src="/images/show-logos/wyatt-cenacs-problem-areas.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="a little late"
                        src="/images/show-logos/a-little-late-with-lilly-singh.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="jim jefferies"
                        src="/images/show-logos/jim-jefferies-show.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the break"
                        src="/images/show-logos/the-break-michelle-wolf.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the president show"
                        src="/images/show-logos/president-show.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="nightly show"
                        src="/images/show-logos/the-nightly-show-logo.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="colbert report"
                        src="/images/show-logos/colbert-report.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
              </Carousel>
            ) : (
              <Carousel
                slideSize="100%"
                withIndicators
                sx={{
                  width: "100%",
                }}
                styles={{
                  indicator: {
                    width: "10px",
                    height: "10px",
                    background: "none",
                    border: "1px solid #000",
                    marginLeft: "20px",
                    marginRight: "20px",
                    transition: "background 250ms ease",

                    "&[data-active]": {
                      background: "#000",
                    },
                  },
                  control: {
                    border: "none",

                    "&[data-inactive]": {
                      opacity: 0,
                      cursor: "default",
                    },
                  },
                }}
              >
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="last week tonight"
                        src="/images/show-logos/last-week-tonight.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="late show"
                        src="/images/show-logos/late-show.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="daily show"
                        src="/images/show-logos/daily-show.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="major league"
                        src="/images/show-logos/sports-league.png"
                        height={"150px"}
                        width={"100%"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the problem"
                        src="/images/show-logos/problem-with-jon-stewart.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="finji"
                        src="/images/show-logos/finji.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="tooning out the news"
                        src="/images/show-logos/tooning-out-the-news.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="major league"
                        src="/images/show-logos/sketch-show.png"
                        height={"150px"}
                        width={"100%"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="nerial"
                        src="/images/show-logos/nerial.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="game theory"
                        src="/images/show-logos/game-theory-with-bomani-jones.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="full frontal"
                        src="/images/show-logos/full-frontal-with-samantha-bee.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="patriot act"
                        src="/images/show-logos/patriot-act.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="desus and mero"
                        src="/images/show-logos/desus-and-mero.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="pickled"
                        src="/images/show-logos/pickled.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="g word"
                        src="/images/show-logos/g_word.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the opposition"
                        src="/images/show-logos/the-opposition-with-jordan-klepper.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the rundown"
                        src="/images/show-logos/rundown-with-robin-thede.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="problem areas"
                        src="/images/show-logos/wyatt-cenacs-problem-areas.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
                <Carousel.Slide mb={80}>
                  <Box
                    mt={50}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="a little late"
                        src="/images/show-logos/a-little-late-with-lilly-singh.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="jim jefferies"
                        src="/images/show-logos/jim-jefferies-show.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the break"
                        src="/images/show-logos/the-break-michelle-wolf.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="the president show"
                        src="/images/show-logos/president-show.png"
                        width={"100%"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="nightly show"
                        src="/images/show-logos/the-nightly-show-logo.png"
                        height={"150px"}
                        fit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        margin: "12.5px 25px",
                        width: "285px",
                        height: "190px",
                        background: "#FBFBFD",
                        borderRadius: "10px",
                        boxShadow: "15px 20px 35px 5px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        alt="colbert report"
                        src="/images/show-logos/colbert-report.png"
                        width={"100%"}
                      />
                    </Box>
                  </Box>
                </Carousel.Slide>
              </Carousel>
            )}
          </Box>
        </Box>
      </MediaQuery>

      <MediaQuery
        query="(max-width: 768px)"
        styles={{ flexDirection: "column" }}
      >
        <Box sx={{ display: "flex", background: "#FBFBFD", width: "100%" }}>
          <MediaQuery query="(max-width: 768px)" styles={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "50%",
                backgroundImage: "url(/images/studiotv.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "#B89ADE",
                  opacity: "0.35",
                }}
              ></Box>
            </Box>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)" styles={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "50%",
                position: "relative",
              }}
            >
              <MediaQuery
                query="(max-width: 768px)"
                styles={{ display: "none" }}
              >
                <Image
                  src="/images/landing-page-bg/landing-grid-bg-ellipse.png"
                  alt="streamline bg ellipse"
                  width={220}
                  sx={{
                    position: "absolute",
                    right: -5,
                    top: -200,
                    zIndex: 1,
                  }}
                />
              </MediaQuery>
              <MediaQuery
                query="(max-width: 480px)"
                styles={{ width: "95%", padding: "20px" }}
              >
                <Box
                  m={20}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "80%",
                    padding: "40px",
                    zIndex: 2,
                  }}
                >
                  <Title size={24} fw={700} mb={40}>
                    Studio TV
                  </Title>
                  <Text mb={40} sx={{ maxWidth: "420px" }}>
                    Scripto powers the world-class writing process at
                    Emmy-winning shows like{" "}
                    <span style={{ fontStyle: "italic" }}>
                      Last Week Tonight{" "}
                    </span>
                    and
                    <span style={{ fontStyle: "italic" }}> The Late Show</span>.
                    If you’re taping a variety or talk show in studio, use the
                    same specialized workflows that help our clients stay on
                    time and on point.
                  </Text>
                  <Link href="/studio">
                    <Button
                      variant="outline"
                      h={60}
                      w={200}
                      sx={{ borderRadius: "10px" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </MediaQuery>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>

      <MediaQuery
        query="(max-width: 768px)"
        styles={{ flexDirection: "column-reverse" }}
      >
        <Box sx={{ display: "flex", background: "#FBFBFD", width: "100%" }}>
          <MediaQuery query="(max-width: 768px)" styles={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "50%",
                position: "relative",
              }}
            >
              <MediaQuery
                query="(max-width: 480px)"
                styles={{ width: "95%", padding: "20px" }}
              >
                <Box
                  m={20}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "80%",
                    padding: "40px",
                    zIndex: 2,
                  }}
                >
                  <Title size={24} fw={700} mb={40}>
                    Video Game Studios
                  </Title>
                  <Text mb={40} sx={{ maxWidth: "420px" }}>
                    If your game prioritizes narrative design or features
                    multiple content contributors, Scripto lets you run a
                    professional writing process in a cozy editorial environment
                    that integrates directly with your build pipeline.
                  </Text>
                  <Link href="/games">
                    <Button
                      variant="outline"
                      h={60}
                      w={200}
                      sx={{ borderRadius: "10px" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </MediaQuery>
            </Box>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)" styles={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "50%",
                backgroundImage: "url(/images/games.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "#B89ADE",
                  opacity: "0.35",
                }}
              ></Box>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>

      <MediaQuery
        query="(max-width: 768px)"
        styles={{ flexDirection: "column" }}
      >
        <Box sx={{ display: "flex", background: "#FBFBFD", width: "100%" }}>
          <MediaQuery query="(max-width: 768px)" styles={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "50%",
                backgroundImage: "url(/images/writers-room-1.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "#B89ADE",
                  opacity: "0.35",
                }}
              ></Box>
            </Box>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)" styles={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "50%",
                position: "relative",
              }}
            >
              <MediaQuery
                query="(max-width: 480px)"
                styles={{ width: "95%", padding: "20px" }}
              >
                <Box
                  m={20}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "80%",
                    padding: "40px",
                    zIndex: 2,
                  }}
                >
                  <Title size={24} fw={700} mb={40}>
                    Writers Rooms
                  </Title>
                  <Text mb={40} sx={{ maxWidth: "420px" }}>
                    Whether you’re writing a scripted comedy, a sketch show, or
                    a podcast, Scripto brings true collaboration to the writers
                    room.
                  </Text>
                  <Link href="/screenplays">
                    <Button
                      variant="outline"
                      h={60}
                      w={200}
                      sx={{ borderRadius: "10px" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </MediaQuery>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>

      <Box
        mt={120}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <MediaQuery query="(max-width: 480px)" styles={{ top: -300 }}>
          <Image
            src="/images/landing-page-bg/testimonial-bg-ellipse.png"
            alt="streamline bg ellipse"
            width={isMobile ? 250 : 350}
            sx={{
              position: "absolute",
              left: 0,
              top: -500,
              zIndex: 1,
            }}
          />
        </MediaQuery>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            zIndex: 2,
          }}
        >
          <Carousel
            mb={80}
            slideSize="100%"
            withIndicators
            withControls={isMobile ? false : true}
            slideGap={"50px"}
            sx={{
              width: "100%",
              maxWidth: "900px",
            }}
            styles={{
              indicator: {
                width: "10px",
                height: "10px",
                background: "none",
                border: "1px solid #000",
                marginLeft: "20px",
                marginRight: "20px",
                transition: "background 250ms ease",

                "&[data-active]": {
                  background: "#000",
                },
              },
              control: {
                border: "none",

                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
          >
            <Carousel.Slide mb={50}>
              <Box
                ta="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Text mb={20} size={24}>
                  “
                  <span style={{ fontStyle: "italic" }}>
                    Tooning Out The News
                  </span>{" "}
                  requires such a fast writing and production process. Scripto
                  allows us to efficiently and reliably collaborate on scripts,
                  punch up jokes, rewrite, export production-friendly
                  drafts,&nbsp;and&nbsp;more.”
                </Text>
                {/* <Avatar
                  mb={20}
                  radius="sm"
                  size={60}
                  variant="filled"
                  color="dark"
                /> */}
                <Image
                  alt="testimonial logo"
                  src="/images/show-logos/tooning-out-the-news.png"
                  height={40}
                  fit="contain"
                  mb={20}
                />
                <Text size={14} mb={50}>
                  RJ Fried, Executive Producer{" "}
                  <span style={{ fontStyle: "italic" }}>
                    Tooning Out The News
                  </span>
                </Text>
              </Box>
            </Carousel.Slide>
            <Carousel.Slide mb={50}>
              <Box
                ta="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Text mb={20} size={24}>
                  “It feels like this was made specifically for us, specifically
                  for this project.”
                </Text>
                {/* <Avatar
                  mb={20}
                  radius="xl"
                  size={40}
                  variant="filled"
                  color="dark"
                /> */}
                <Image
                  alt="testimonial logo"
                  src="/images/show-logos/finji.png"
                  height={40}
                  fit="contain"
                  mb={20}
                />
                <Text size={14} mb={50}>
                  Adam Saltsman, founder{" "}
                  <span style={{ fontStyle: "italic" }}>Finji</span>
                </Text>
              </Box>
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Box>
      <CTA background="#FBFBFD" buttonColor="#8252C6" text="#000" />
      {/* <Footer /> */}
    </AppLayout>
  );
};

export default LandingPage;
