import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BottomTabBar } from "@/components";
import { ROUTES } from "@/constants";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     if ("scrollRestoration" in window.history) {
  //       window.history.scrollRestoration = "manual";
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <>
      <BottomTabBar tabArray={ROUTES} />
      <Component {...pageProps} />
    </>
  );
}
