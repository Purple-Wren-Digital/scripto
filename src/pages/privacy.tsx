import { AppLayout } from "@/components/AppLayout";
import { Box, MediaQuery, Image, Text, List, Space } from "@mantine/core";
import { PageWithLayout } from "next";
import Link from "next/link";

const PrivacyPage: PageWithLayout = () => {
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
            Privacy Policy
          </Text>
          <Text ta="center" size={20} sx={{ zIndex: 1 }}>
            Your privacy is important to us.
          </Text>
        </Box>

        <MediaQuery
          query="(max-width: 768px)"
          styles={{ flexDirection: "column" }}
        >
          <Box
            pt={60}
            pb={80}
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
                  <Text mb={30}>
                    It is Scripto's policy to respect your privacy regarding any
                    information we may collect from you across our website,{" "}
                    <Link
                      href="https://app.scripto.live"
                      style={{ textDecoration: "none" }}
                    >
                      https://app.scripto.live
                    </Link>
                    , and other sites we own and operate.
                  </Text>
                  <Text size={24} fw={700} mb={15}>
                    Information we collect
                  </Text>
                  <Text size={"md"} mb={5}>
                    LOG DATA
                  </Text>
                  <Text mb={15}>
                    When you visit our website, our servers may automatically
                    log the standard data provided by your web browser. This
                    data is considered “non-identifying information”, as it does
                    not personally identify you on its own. It may include your
                    computer’s Internet Protocol (IP) address, your browser type
                    and version, the pages you visit, the time and date of your
                    visit, the time spent on each page, and other details.
                  </Text>
                  <Text size={"md"} mb={5}>
                    PERSONAL INFORMATION
                  </Text>
                  <Text mb={15}>
                    We may ask for personal information, such as your name and
                    email address. This data is considered “identifying
                    information”, as it can personally identify you. We only
                    request personal information relevant to providing you with
                    a service, and only use it to help provide or improve this
                    service.
                  </Text>
                  <Text size={"md"} mb={5}>
                    HOW WE COLLECT INFORMATION
                  </Text>
                  <Text mb={15}>
                    We collect information by fair and lawful means, with your
                    knowledge and consent. We also let you know why we’re
                    collecting it and how it will be used. You are free to
                    refuse our request for this information, with the
                    understanding that we may be unable to provide you with some
                    of your desired services without it.
                  </Text>
                  <Text mb={5} fw={700} size={24}>
                    Use of Information
                  </Text>
                  <Text mb={15}>
                    We may use a combination of identifying and non-identifying
                    information to understand who our visitors are, how they use
                    our services, and how we may improve their experience of our
                    website in future. We do not disclose the specifics of this
                    information publicly, but may share aggregated and
                    anonymised versions of this information, for example, in
                    website and customer usage trend reports
                  </Text>
                  <Text size={24} fw={700} mb={5}>
                    Data processing and storage
                  </Text>
                  <Text mb={15}>
                    We only retain personal information for as long as necessary
                    to provide a service, or to improve our services in future.
                    While we retain this data, we will protect it within
                    commercially acceptable means to prevent loss and theft, as
                    well as unauthorised access, disclosure, copying, use or
                    modification. That said, we advise that no method of
                    electronic transmission or storage is 100% secure, and
                    cannot guarantee absolute data security.
                  </Text>
                  <Text size={24} fw={700} mb={5}>
                    Cookies
                  </Text>
                  <Text mb={5}>
                    We use “cookies” to collect information about you and your
                    activity across our site. A cookie is a small piece of data
                    that our website stores on your computer, and accesses each
                    time you visit so we can understand how you use our site and
                    serve you content based on preferences you have specified.
                  </Text>
                  <Text mb={15}>
                    If you do not wish to accept cookies from us, you should
                    instruct your browser to refuse cookies from our website,
                    understanding that we may be unable to provide you with some
                    of your desired services without them. This policy covers
                    only the use of cookies between your computer and our
                    website; it does not cover the use of cookies by any
                    third-party services we use on our site.
                  </Text>
                  <Text size={24} fw={700} mb={5}>
                    Third-party access to information
                  </Text>
                  <Text mb={5}>
                    We may use third-party services for our website and
                    marketing activity. These services may access our data
                    solely for the purpose of performing specific tasks on our
                    behalf. We do not share any personally identifying
                    information with these services without your explicit
                    consent. We do not give these services permission to
                    disclose or use any of our data for any other purpose.
                  </Text>
                  <Text mb={5}>
                    We will refuse government and law enforcement requests for
                    data if we believe a request is too broad or unrelated to
                    its stated purpose. However, we may cooperate if we believe
                    the requested information is necessary and appropriate to
                    comply with legal process, to protect our own rights and
                    property, to protect the safety of the public and any
                    person, to prevent a crime, or to prevent what we reasonably
                    believe to be illegal, legally actionable, or unethical
                    activity.
                  </Text>
                  <Text mb={15}>
                    We do not otherwise share or supply personal information to
                    third parties. We do not sell or rent your personal
                    information to marketers or third parties.
                  </Text>
                  <Text size={24} fw={700} mb={5}>
                    Limits of our policy
                  </Text>
                  <Text mb={5}>
                    This privacy policy only covers Scripto's own collecting and
                    handling of data. We only work with partners, affiliates and
                    third-party providers whose privacy policies align with
                    ours, however we cannot accept responsibility or liability
                    for their respective privacy practices.
                  </Text>
                  <Text mb={15}>
                    Our website may link to external sites that are not operated
                    by us. Please be aware that we have no control over the
                    content and policies of those sites, and cannot accept
                    responsibility or liability for their respective privacy
                    practices.
                  </Text>
                  <Text size={24} fw={700} mb={5}>
                    Changes to this policy
                  </Text>
                  <Text mb={15}>
                    At our discretion, we may update this policy to reflect
                    current acceptable practices. We will take reasonable steps
                    to let users know about changes via our website. Your
                    continued use of this site after any changes to this policy
                    will be regarded as acceptance of our practices around data
                    and personal information.
                  </Text>
                  <Text size={24} fw={700} mb={5}>
                    Your rights and responsibilities
                  </Text>
                  <Text mb={5}>
                    As our user, you have the right to be informed about how
                    your data is collected and used. You are entitled to know
                    what data we collect about you, and how it is processed. You
                    are entitled to correct and update any personal information
                    about you, and to request this information be deleted.
                  </Text>
                  <Text mb={5}>
                    You are entitled to restrict or object to our use of your
                    data, while retaining the right to use your personal
                    information for your own purposes. You have the right to opt
                    out of data about you being used in decisions based solely
                    on automated processing.
                  </Text>
                  <Text mb={15}>
                    Feel free to contact us if you have any concerns or
                    questions about how we handle your data and personal
                    information.
                  </Text>
                  <Text fw={700}>Scripto Data Controller</Text>
                  <Text fw={700}>Scripto</Text>
                  <Link href="mailto:hello@scripto.live">
                    <Text fw={700}>hello@scripto.live</Text>
                  </Link>
                  <Text mt={15} mb={15}>
                    This policy is effective as of 12 December 2018
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

export default PrivacyPage;
