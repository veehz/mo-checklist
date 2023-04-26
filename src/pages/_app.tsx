import Analytics from "@/components/Analytics";
import BackToTop from "@/components/BackToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <BackToTop />
      <Component {...pageProps} />
    </>
  );
}
