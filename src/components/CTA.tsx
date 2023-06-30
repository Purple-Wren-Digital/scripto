import { Box, Button, Text, Image, MediaQuery } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CTA: React.FC<{ background: string, buttonColor: string, text: string }> = ({ background, buttonColor, text }) => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 480px)");

  const router = useRouter();
  const [pathname, setPathname] = useState(router.pathname);

  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: background,
        color: text,
        paddingLeft: "10%",
        paddingRight: "10%",
        position: "relative",
      }}
    >
      {pathname == "/" && (
        <>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ display: "none" }}
          >
            <Image
              src="/images/cta-bg/cta-ellipse1.png"
              alt="cta bg ellipse"
              width={500}
              sx={{
                position: "absolute",
                left: 60,
                bottom: 0,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ opacity: 0.3, right: "50%", transform: "translateX(50%)", top: -20, }}
          >
            <Image
              src="/images/cta-bg/cta-ellipse2.png"
              alt="cta bg ellipse"
              width={350}
              sx={{
                position: "absolute",
                right: 30,
                top: -100,
                zIndex: 0,
              }}
            />
          </MediaQuery>
        </>
      )}
      {pathname == "/features" && (
        <>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ display: "none" }}
          >
            <Image
              src="/images/cta-bg/cta-features1.png"
              alt="cta bg ellipse"
              width={500}
              sx={{
                position: "absolute",
                left: 60,
                bottom: 0,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ opacity: 0.3, right: "50%", transform: "translateX(50%)", top: -20, }}
          >
            <Image
              src="/images/cta-bg/cta-features2.png"
              alt="cta bg ellipse"
              width={350}
              sx={{
                position: "absolute",
                right: 30,
                top: -100,
                zIndex: 0,
              }}
            />
          </MediaQuery>
        </>
      )}
      {pathname == "/team" && (
        <>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ display: "none" }}
          >
            <Image
              src="/images/cta-bg/cta-team1.png"
              alt="cta bg ellipse"
              width={400}
              sx={{
                position: "absolute",
                left: 0,
                top: -80,
                zIndex: 0,
              }}
            />
          </MediaQuery>
          <MediaQuery
            query="(max-width: 768px)"
            styles={{ opacity: 0.3, right: "50%", transform: "translateX(50%)", top: -20, }}
          >
            <Image
              src="/images/cta-bg/cta-team2.png"
              alt="cta bg ellipse"
              width={350}
              sx={{
                position: "absolute",
                right: 30,
                bottom: -80,
                zIndex: 0,
              }}
            />
          </MediaQuery>
        </>
      )}


      <Text size={24} fw={700} mt={120} mb={40} sx={{ zIndex: 2 }}>
        Ready to get started?
      </Text>
      <Text mb={25} ta="center" sx={{ maxWidth: "420px", zIndex: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button
        mb={120}
        h={60}
        w={200}
        sx={{
          borderRadius: 10,
          fontSize: 18,
          background: buttonColor,
          padding: 20,
          zIndex: 2
        }}
      >
        Start free trial
      </Button>
    </Box>
  );
};

export default CTA;
