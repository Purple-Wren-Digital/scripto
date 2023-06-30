import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import Card from "@/components/Card";
import { Text, Box, Button, Space, Image, Flex, Avatar, MediaQuery } from "@mantine/core";
import { Carousel } from "@mantine/carousel"
import { PageWithLayout } from "next";
import Link from "next/link";

const LandingPage: PageWithLayout = () => {
  return (
    <AppLayout>
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
            styles={{ fontSize: "32px", }}
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
                <Text fw={700} sx={{ maxWidth: "100%"}}>
                  Write.
                </Text>
                <Text fw={700}>
                  Plan.
                </Text>
                <Text fw={700}>
                  Produce.
                </Text>
                <Text mb="md" fw={700}>
                  Together.
                </Text>
                <Text mb="md" ta={"left"} size={18}>
                  Whether you&apos;re taping a show in a{" "}
                  <Text td="underline" component="span">
                    studio
                  </Text>
                  , collaborating on{" "}
                  <Text td="underline" component="span">
                    screenplays
                  </Text>
                  , or making a{" "}
                  <Text td="underline" component="span">
                    video game
                  </Text>
                  , Scripto helps you do your best work and save time while you do it.
                </Text>
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
                width={"80%"}
                radius={10}
                ml="auto"
                // sx={{ position: "absolute", zIndex: 1, marginLeft: 110, overflow: "hidden" }}
                alt="script editor"
              />
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box ta="center" sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <MediaQuery
            query="(max-width: 480px)"
            styles={{ fontSize: "32px" }}
          >
            <Text mt={70} size={40} fw={700}>
              Streamlining Your Project is Easy
            </Text>
          </MediaQuery>
          <Text mb="50px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </Box>
        <MediaQuery
          query="(max-width: 768px)"
          styles={{ 
            flexDirection: "column", 
            alignItems: "center", 
            width: "100%", 
            background: "none", 
            borderRadius: "0px", 
            boxShadow: "none" 
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              background: "#FBFBFD",
              borderRadius: "50px",
              padding: "50px",
              boxShadow: "15px 20px 45px 5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card
              imgSrc="/images/collaboration.png"
              title="True Collaboration."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              link="/features"
            />
            <Card
              imgSrc="/images/rundowns.png"
              title="Smart Rundowns."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              link="/features"
            />
            <Card
              imgSrc="/images/format.png"
              title="Any Format."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              link="/features"
            />
          </Box>
        </MediaQuery>
      </Box>
      <Box
        mt={125}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text size={40} fw={700} ta="center">
          Powering the Creative Force: Teams That Choose Us.
        </Text>
        <Text ta="center">Trusted by top teams in the industry</Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
          }}
        >
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
                marginLeft: "20px",
                marginRight: "20px",
                transition: "background 250ms ease",

                '&[data-active]': {
                  background: "#000"
                },
              }
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
                    alt="patriot act"
                    src="/images/show-logos/patriot-act.png"
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
                    alt="game theory"
                    src="/images/show-logos/game-theory-with-bomani-jones.png"
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
                    alt="jim jefferies show"
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
                    alt="problem areas"
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
                    alt="tooning out the news"
                    src="/images/show-logos/tooning-out-the-news.png"
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
                    alt="finji"
                    src="/images/show-logos/finji.png"
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
                    alt="nerial"
                    src="/images/show-logos/nerial.png"
                    height={"150px"}
                    fit="contain"
                  />
                </Box>
                {/* <Box
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
                </Box> */}
              </Box>
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Box>
      <MediaQuery
        query="(max-width: 768px)"
        styles={{ flexDirection: "column" }}
      >
        <Box mt={100} sx={{ display: "flex", background: "#FBFBFD" }}>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ width: "100%" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                  backgroundImage: "url(/images/studio.png)",
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                }}
              >
                <Box
                  m={20}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "80%",
                    padding: "40px",
                  }}
                >
                  <Text size={24} fw={700} mb={40}>
                    True Collaboration.
                  </Text>
                  <Text mb={40} sx={{ maxWidth: "420px" }}>
                    Write with others in the same script at the same time, with
                    automatic and flexible industry-standard formatting for variety
                    shows, screenplays, video games, and more. You deserve better
                    than Google Docs!
                  </Text>
                  <Link href="/features" >
                    <Button
                      variant="outline"
                      h={60}
                      w={200}
                      sx={{ borderRadius: "10px" }}
                    >
                      Learn more
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ width: "100%", flexDirection: "column-reverse" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                }}
              >
                <Box
                  m={20}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "80%",
                    padding: "40px",
                  }}
                >
                  <Text size={24} fw={700} mb={40}>
                    Feature that is amazing
                  </Text>
                  <Text mb={40} sx={{ maxWidth: "420px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                  <Link href="/features" >
                    <Button
                      variant="outline"
                      h={60}
                      w={200}
                      sx={{ borderRadius: "10px" }}
                    >
                      Learn more
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                  backgroundImage: "url(/images/workspace.png)",
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
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <Box
        mt={120}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%"
          }}
        >
          <Carousel 
            mb={80}
            slideSize="100%" 
            withIndicators 
            withControls={false}
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

                '&[data-active]': {
                  background: "#000"
                },
              }
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
                }}
              >
                <Text mb={20} size={24}>
                  “Testimonial one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.”
                </Text>
                <Avatar mb={20} radius="xl" size={40} variant="filled" color="dark" />
                <Text size={14} mb={50}>
                  Maria Lopez, VP of Design at Meshery
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
                  justifyContent: "center"
                }}
              >
                <Text mb={20} size={24}>
                  “Testimonial two. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.”
                </Text>
                <Avatar mb={20} radius="xl" size={40} variant="filled" color="dark" />
                <Text size={14} mb={50}>
                  Maria Lopez, VP of Design at Meshery
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
                  justifyContent: "center"
                }}
              >
                <Text mb={20} size={24}>
                  “Testimonial three. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.”
                </Text>
                <Avatar mb={20} radius="xl" size={40} variant="filled" color="dark" />
                <Text size={14} mb={50}>
                  Maria Lopez, VP of Design at Meshery
                </Text>
              </Box>
            </Carousel.Slide>
            
          </Carousel>
        </Box>
      </Box>
      <CTA 
        background="#FBFBFD"
        buttonColor="#301F55"
        text="#000"
      />
      {/* <Footer /> */}
    </AppLayout>
  );
};

export default LandingPage;
