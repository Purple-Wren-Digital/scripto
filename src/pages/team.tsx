import { AppLayout } from "@/components/AppLayout";
import CTA from "@/components/CTA";
import { Text, Box, Button, Space, Image, MediaQuery } from "@mantine/core";
import { PageWithLayout } from "next";
import { useMediaQuery } from "@mantine/hooks";

const TeamPage: PageWithLayout = () => {
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
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ opacity: 0.5 }}
          >
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
            <MediaQuery
            query="(max-width: 480px)"
            styles={{ display: "none" }}
            >
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
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ display: "none" }}
          >
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
          <Text size={48} fw={700} mb={25} sx={{ zIndex: 1 }}>About Us</Text>
          <Text ta="center" size={20} sx={{ maxWidth: 645, zIndex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                styles={{ gridColumn: "1 / 8", opacity: 0.7}}
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
                      left: 0
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
                  position: "relative"
                }}
              >
                <MediaQuery
                  query="(max-width: 1024px)"
                  styles={{ right: 5 }}
                >
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
                      zIndex: 1
                    }}
                  >
                    <Text size={24} fw={700} mb={24} >It All Started With a Goat...</Text>
                    <Text size={20} mb={24} >
                      Long ago, before Scripto existed, there was a show called The Colbert Report, where some writers optimistically wrote in a surprise appearance by a live goat. To everyone’s surprise, the idea moved forward — which meant booking a showbiz-grade goat from an ethical and TV-ready animal handler, at significant expense to the production.
                    </Text>
                    <Text size={20} mb={24}>
                      Only problem was: TV being TV, the goat’s appearance was cut from the script in revisions. And because they weren’t using Scripto, the show didn’t find out about the script change until the Tom Cruise of goats was already en route to the studio.
                    </Text>
                    <Text size={20} mb={24}>
                      We all learned an important lesson that day: It’s good to make changes to a script, but only if everyone else can see them too. That was the first spark of an idea that led to the creation of Scripto.
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
          background: "#252634"
        }}>
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
            <Text size={24} fw={700} mb={25}>Meet The Crew</Text>
            <Text ta="center" size={20} sx={{ maxWidth: 645}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
          <Box 
            mt={60}
            sx={{ 
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 80,
              width: "90%",
              maxWidth: "950px"
            }}
          >
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#B89ADE",
                  border: "15px solid #EAD8AD",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#B89ADE",
                  border: "15px solid #EAD8AD",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#EAD8AD",
                  border: "15px solid #C9796F",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#C9796F",
                  border: "15px solid #B89ADE",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#EAD8AD",
                  border: "15px solid #C9796F",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#B89ADE",
                  border: "15px solid #EAD8AD",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#C9796F",
                  border: "15px solid #B89ADE",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#EAD8AD",
                  border: "15px solid #C9796F",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
            <Box
              mb={isMobile ? 30 : isTablet ? 40 : 80}
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
                // mb={isMobile ? 30 : isTablet ? 40 : 80}
                sx={{
                  width: "235px",
                  height: "235px",
                  borderRadius: "50%",
                  background: "#C9796F",
                  border: "15px solid #B89ADE",
                  opacity: "0.5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden"
                }}
              >
                <Image 
                  width={235}
                  height={235}
                  src={null} 
                  alt="headshot" 
                  withPlaceholder
                  fit="cover" 
                />
              </Box>
              <Text ta="center" size={20} fw={700} mt={20}>First Last</Text>
              <Text ta="center" >Title</Text>
            </Box>
          </Box>
      </Box>
      <CTA 
        background="#252634"
        buttonColor="#8252C6"
        text="#FBFBFD"
      />
    </AppLayout>
  );
};

export default TeamPage;