import { AppLayout } from "@/components/AppLayout";
import { Box, MediaQuery, Image, Text, List, Space } from "@mantine/core";
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
                <List type="ordered" mt={30}>
                  <List.Item>TERMS</List.Item>
                  <Text mb={30}>
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
                  <List.Item>USE LICENSE</List.Item>
                  <List withPadding listStyleType="none" mb={30}>
                    <List.Item>
                      a. Permission is granted to temporarily download one copy
                      of the materials (information or software) on Scripto's
                      website for personal, non-commercial transitory viewing
                      only. This is the grant of a license, not a transfer of
                      title, and under this license you may not:
                      <List withPadding listStyleType="none">
                        <List.Item>
                          i. modify or copy the materials; <Space w="lg" />
                        </List.Item>
                        <List.Item>
                          ii. use the materials for any commercial purpose, or
                          for any public display (commercial or non-commercial);
                        </List.Item>
                        <List.Item>
                          iii. attempt to decompile or reverse engineer any
                          software contained on Scripto's website;
                        </List.Item>
                        <List.Item>
                          iv. remove any copyright or other proprietary
                          notations from the materials; or
                        </List.Item>
                        <List.Item>
                          v. transfer the materials to another person or
                          "mirror" the materials on any other server.
                        </List.Item>
                      </List>
                    </List.Item>
                    <List.Item>
                      b. This license shall automatically terminate if you
                      violate any of these restrictions and may be terminated by
                      Scripto at any time. Upon terminating your viewing of
                      these materials or upon the termination of this license,
                      you must destroy any downloaded materials in your
                      possession whether in electronic or printed format.
                    </List.Item>
                  </List>
                  <List.Item>DISCLAIMER</List.Item>
                  <List withPadding listStyleType="none" mb={30}>
                    <List.Item>
                      a. The materials on Scripto's website are provided on an
                      'as is' basis. Scripto makes no warranties, expressed or
                      implied, and hereby disclaims and negates all other
                      warranties including, without limitation, implied
                      warranties or conditions of merchantability, fitness for a
                      particular purpose, or non-infringement of intellectual
                      property or other violation of rights.
                    </List.Item>
                    <List.Item>
                      b. Further, Scripto does not warrant or make any
                      representations concerning the accuracy, likely results,
                      or reliability of the use of the materials on its website
                      or otherwise relating to such materials or on any sites
                      linked to this site.
                    </List.Item>
                  </List>
                  <List.Item>LIMITATIONS</List.Item>
                  <Text mb={30}>
                    In no event shall Scripto or its suppliers be liable for any
                    damages (including, without limitation, damages for loss of
                    data or profit, or due to business interruption) arising out
                    of the use or inability to use the materials on Scripto's
                    website, even if Scripto or a Scripto authorized
                    representative has been notified orally or in writing of the
                    possibility of such damage. Because some jurisdictions do
                    not allow limitations on implied warranties, or limitations
                    of liability for consequential or incidental damages, these
                    limitations may not apply to you.
                  </Text>
                  <List.Item>ACCURACY OF MATERIALS</List.Item>
                  <Text mb={30}>
                    The materials appearing on Scripto's website could include
                    technical, typographical, or photographic errors. Scripto
                    does not warrant that any of the materials on its website
                    are accurate, complete or current. Scripto may make changes
                    to the materials contained on its website at any time
                    without notice. However Scripto does not make any commitment
                    to update the materials.
                  </Text>
                  <List.Item>LINKS</List.Item>
                  <Text mb={30}>
                    Scripto has not reviewed all of the sites linked to its
                    website and is not responsible for the contents of any such
                    linked site. The inclusion of any link does not imply
                    endorsement by Scripto of the site. Use of any such linked
                    website is at the user's own risk.
                  </Text>
                  <List.Item>MODIFICATIONS</List.Item>
                  <Text mb={30}>
                    Scripto may revise these terms of service for its website at
                    any time without notice. By using this website you are
                    agreeing to be bound by the then current version of these
                    terms of service.
                  </Text>
                  <List.Item>GOVERNING LAW</List.Item>
                  <Text mb={30}>
                    These terms and conditions are governed by and construed in
                    accordance with the laws of New York and you irrevocably
                    submit to the exclusive jurisdiction of the courts in that
                    State or location.
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
      </Box>
    </AppLayout>
  );
};

export default TermsPage;
