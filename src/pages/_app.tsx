import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
