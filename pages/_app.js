import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { useRouter } from 'next/router';
import { useEffect } from 'react'

const progress = new ProgressBar({
  size: 5,
  color: "#FD5B61",
  className: "bar-of-progress",
  delay: 100,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      progress.start();
      setTimeout(() => {
        progress.finish();
      }, 1000);
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  return <Component  {...pageProps} />
}

export default MyApp
