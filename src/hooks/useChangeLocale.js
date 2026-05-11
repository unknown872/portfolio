import { useRouter } from "next/router";
import { useLocale as useNextIntlLocale } from "next-intl";

/**
 * Hook custom pour changer de langue tout en restant sur la même section.
 *
 * Préserve :
 *  - Le hash de l'URL (#contact, #portfolio...)
 *  - La position de scroll
 *
 * Utilisation :
 *   const { locale, changeLocale } = useChangeLocale();
 *   changeLocale("en");
 */
export function useChangeLocale() {
    const router = useRouter();
    const locale = useNextIntlLocale();

    const changeLocale = (nextLocale) => {
        // Si on est déjà sur la bonne locale, on ne fait rien
        if (nextLocale === locale) return;

        const { pathname, query, asPath } = router;

        // Récupère le hash actuel (#contact, #portfolio, etc.)
        const hash = typeof window !== "undefined" ? window.location.hash : "";

        // Reconstruit l'URL avec le hash préservé
        const asPathWithHash = asPath.split("#")[0] + hash;

        router.push(
            { pathname, query },
            asPathWithHash,
            {
                locale: nextLocale,
                scroll: false, // empêche Next.js de scroller en haut
            }
        );

        // Après la navigation, re-scroll vers la section si hash présent
        if (hash) {
            // Petit délai pour laisser le DOM se mettre à jour
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "instant", block: "start" });
                }
            }, 50);
        }
    };

    return { locale, changeLocale };
}