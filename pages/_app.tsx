import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { eightOOEight } from "../styles/theme";
import { PopupContainer, PopupProvider } from "../features/Popup";
import { ThemeContextProvider } from "../features/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <PopupProvider>
        <Component {...pageProps} />
        <PopupContainer />
      </PopupProvider>
    </ThemeContextProvider>
  );
}
