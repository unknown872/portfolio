import Head from "next/head";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Accueil from "@/components/Accueil";
import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Youssou Traore — Full-Stack Developer</title>
                <meta
                    name="description"
                    content="Portfolio de Youssou Traore, développeur full-stack"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.webp" />
            </Head>

            <div className="bg-[#0a0a0f] min-h-screen text-white antialiased">
                <Header />
                <main>
                    <Accueil />
                    <Services />
                    <Technologies />
                    <Portfolio />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}