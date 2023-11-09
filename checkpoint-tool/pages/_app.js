//Code I referrenced for loading page spinner
//https://medium.com/@remoteupskill/how-to-manage-loading-elegantly-in-your-next-js-application-5debbfb4cace

import "@/styles/globals.css";
import { useEffect, useState } from "react"; // Import useState
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/loadingSpinner";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Add a state to manage loading display

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };

    const handleRouteComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return isLoading ? <LoadingSpinner /> :  <Component {...pageProps} />};

