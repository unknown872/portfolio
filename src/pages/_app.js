import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import "@/styles/globals.css"; // ⚠️ adaptez selon votre setup

// Import des messages
import frMessages from "../../messages/fr.json";
import enMessages from "../../messages/en.json";

const messagesMap = {
    fr: frMessages,
    en: enMessages,
};

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const locale = router.locale || "en";
    const messages = messagesMap[locale] || messagesMap.en;

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Africa/Dakar"
        >
            <Component {...pageProps} />
        </NextIntlClientProvider>
    );
}