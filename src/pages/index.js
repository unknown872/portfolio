import { useState, useEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Accueil from "@/components/Accueil";
import Header from "@/components/Header";
import { useI18n } from '../../locales';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const t = useI18n();

  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "",
        t("accueil.developer"),
        t("accueil.frontend"),
        t("accueil.backend"),
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <div className={darkMode ? "dark" : ""}>
          <Header/>
          <main>
          <Accueil/>
          <Services/>
          <Technologies/>
          <Portfolio/>
          <Contact/>
          </main>
          <Footer/>
    </div>
  );
}
