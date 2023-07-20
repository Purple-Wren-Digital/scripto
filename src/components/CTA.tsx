import { Box, Button, Text, Image, MediaQuery, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CTA: React.FC<{
  background: string;
  buttonColor: string;
  text: string;
}> = ({ background, buttonColor, text }) => {
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
      {pathname == "/features" ? (
        <>
          <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
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
            styles={{
              opacity: 0.3,
              right: "50%",
              transform: "translateX(50%)",
              top: -20,
            }}
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
      ) : pathname == "/team" ? (
        <>
          <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
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
            styles={{
              opacity: 0.3,
              right: "50%",
              transform: "translateX(50%)",
              top: -20,
            }}
          >
            <Image
              src="/images/cta-bg/cta-team2.png"
              alt="cta bg ellipse"
              width={350}
              sx={{
                position: "absolute",
                right: 30,
                bottom: -20,
                zIndex: 0,
              }}
            />
          </MediaQuery>
        </>
      ) : pathname == "/studio" ? (
        <>
          <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
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
            styles={{
              opacity: 0.3,
              right: "50%",
              transform: "translateX(50%)",
              top: -20,
            }}
          >
            <Image
              src="/images/cta-bg/cta-team2.png"
              alt="cta bg ellipse"
              width={350}
              sx={{
                position: "absolute",
                right: 30,
                bottom: -20,
                zIndex: 0,
              }}
            />
          </MediaQuery>
        </>
      ) : pathname == "/games" ? (
        <>
          <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
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
            styles={{
              opacity: 0.3,
              right: "50%",
              transform: "translateX(50%)",
              top: -20,
            }}
          >
            <Image
              src="/images/cta-bg/cta-team2.png"
              alt="cta bg ellipse"
              width={350}
              sx={{
                position: "absolute",
                right: 30,
                bottom: -20,
                zIndex: 0,
              }}
            />
          </MediaQuery>
        </>
      ) : (
        <>
          <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
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
            styles={{
              opacity: 0.3,
              right: "50%",
              transform: "translateX(50%)",
              top: -20,
            }}
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

      <Title size={24} ta="center" fw={700} mt={120} mb={40} sx={{ zIndex: 2 }}>
        Ready to get started?
      </Title>
      <Text mb={25} ta="center" sx={{ maxWidth: "525px", zIndex: 2 }}>
        Scripto is free for up to 3 collaborators with our basic studio and
        screenplay formats. Sign up now and try&nbsp;it&nbsp;out!
      </Text>
      <Text mb={25} ta="center" sx={{ maxWidth: "525px", zIndex: 2 }}>
        For larger teams, we tailor plans and pricing to your team size,
        production order, and feature needs.{" "}
        <Link href="mailto:hello@scripto.live" style={{ color: text }}>
          Get in touch
        </Link>
        {" "}for a customized demo
        and free trial of our&nbsp;paid&nbsp;features.
      </Text>
      <Link
        href="https://app.scripto.live/create-account"
        style={{ textDecoration: "none" }}
      >
        <Button
          mb={120}
          h={60}
          // w={200}
          sx={{
            borderRadius: 10,
            fontSize: 18,
            background: buttonColor,
            padding: 20,
            zIndex: 2,
          }}
        >
          Get Started for Free
        </Button>
      </Link>
    </Box>
  );
};

export default CTA;
