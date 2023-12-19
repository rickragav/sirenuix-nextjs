import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
    </SessionProvider>
  );
}

export default MyApp;
