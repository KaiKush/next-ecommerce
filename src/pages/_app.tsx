import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BottomTabBar } from "@/components";
import { ROUTES } from "@/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BottomTabBar tabArray={ROUTES} />
      <Component {...pageProps} />
    </>
  );
}
