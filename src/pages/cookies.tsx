import { AppLayout } from "@/components/AppLayout";
import { Box, MediaQuery, Image, Text, List, Space } from "@mantine/core";
import { PageWithLayout } from "next";
import Link from "next/link";

const CookiePage: PageWithLayout = () => {
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
            Cookie Policy
          </Text>
          <Text ta="center" size={20} sx={{ zIndex: 1 }}>
            Our official policy is: cookies are delicious.
          </Text>
        </Box>

        <MediaQuery
          query="(max-width: 768px)"
          styles={{ flexDirection: "column" }}
        >
          <Box
            pt={30}
            pb={20}
            sx={{
              display: "flex",
              minHeight: "682px",
              background: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
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
                  width: "80%",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <Box sx={{ color: "#000" }}>
                  <Text mb={5}>
                    We use cookies to help improve your experience of{" "}
                    <Link
                      href="https://app.scripto.live"
                      style={{ textDecoration: "none" }}
                    >
                      https://app.scripto.live
                    </Link>
                    . This cookie policy is part of Scripto's privacy policy,
                    and covers the use of cookies between your device and our
                    site.
                  </Text>
                  <Text mb={30}>
                    If you don’t wish to accept cookies from us, you should
                    instruct your browser to refuse cookies from{" "}
                    <Link
                      href="https://app.scripto.live"
                      style={{ textDecoration: "none" }}
                    >
                      https://app.scripto.live
                    </Link>
                    , with the understanding that we may be unable to provide
                    you with some of your desired content and services.
                  </Text>
                  <Text size={24} fw={700} mb={15}>
                    What is a cookie?
                  </Text>
                  <Text mb={5}>
                    A cookie is a small piece of data that a website stores on
                    your device when you visit, typically containing information
                    about the website itself, a unique identifier that allows
                    the site to recognise your web browser when you return,
                    additional data that serves the purpose of the cookie, and
                    the lifespan of the cookie itself.
                  </Text>
                  <Text mb={5}>
                    Cookies are used to enable certain features (eg. logging
                    in), to track site usage (eg. analytics), to store your user
                    settings (eg. timezone, notification preferences), and to
                    personalise your content (eg. advertising, language).
                  </Text>
                  <Text mb={15}>
                    Cookies set by the website you are visiting are normally
                    referred to as “first-party cookies”, and typically only
                    track your activity on that particular site. Cookies set by
                    other sites and companies (ie. third parties) are called
                    “third-party cookies”, and can be used to track you on other
                    websites that use the same third-party service.
                  </Text>
                  <Text size={24} fw={700} mb={15}>
                    How you can control or opt out of cookies
                  </Text>
                  <Text mb={5}>
                    If you do not wish to accept cookies from us, you can
                    instruct your browser to refuse cookies from our website.
                    Most browsers are configured to accept cookies by default,
                    but you can update these settings to either refuse cookies
                    altogether, or to notify you when a website is trying to set
                    or update a cookie.
                  </Text>
                  <Text mb={5}>
                    If you browse websites from multiple devices, you may need
                    to update your settings on each individual device.
                  </Text>
                  <Text mb={5}>
                    Although some cookies can be blocked with little impact on
                    your experience of a website, blocking all cookies may mean
                    you are unable to access certain features and content across
                    the sites you visit.
                  </Text>
                </Box>
              </Box>
            </MediaQuery>
            {/* <MediaQuery
              query="(max-width: 768px)"
              styles={{ width: "100%" }}
            ></MediaQuery> */}
          </Box>
        </MediaQuery>
      </Box>
    </AppLayout>
  );
};

export default CookiePage;
