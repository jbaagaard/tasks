import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {dark} from "../styles/theme";

export default function App({Component, pageProps}: AppProps) {
    return <ThemeProvider theme={dark}>
        <Component {...pageProps} />
    </ThemeProvider>
}
