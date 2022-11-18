import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { eightOOEight } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={eightOOEight}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
