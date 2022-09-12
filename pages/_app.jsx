import '../styles/globals.css'

import { Header } from "~/components/common/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />

      {/* TODO: CSSフレームワークで整える */}
      <div className="mt-24">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
