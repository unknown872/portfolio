import "@/styles/globals.css";
import { I18nProvider } from "../../locales";
import {useEffect, useRouter} from "react";
export default function App({ Component, pageProps }) {
  
  return (
    <I18nProvider locale={pageProps.locale}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}
