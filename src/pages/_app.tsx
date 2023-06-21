import { GlobalStyles } from "@/components/GlobalStyles";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import type { AppWithLayoutProps } from "next/app";
import { ReactNode } from "react";
import Head from "next/head";
import { theme } from "../config/theme";

const defaultGetLayout = (page: ReactNode): ReactNode => page;

export default function App({ Component, pageProps }: AppWithLayoutProps) {
  const getLayout = Component.getLayout || defaultGetLayout;
  const page = getLayout(<Component {...pageProps} />);
  return (
    <>
      <Head>
        <title>Scripto</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <GlobalStyles />
        <ModalsProvider>{page}</ModalsProvider>
      </MantineProvider>
    </>
  );
}
