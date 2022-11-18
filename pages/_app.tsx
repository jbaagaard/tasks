import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { eightOOEight } from "../styles/theme";
import { PopupContainer, PopupProvider } from "../features/Popup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={eightOOEight}>
      <PopupProvider>
        <Component {...pageProps} />
        <PopupContainer />
      </PopupProvider>
    </ThemeProvider>
  );
}
