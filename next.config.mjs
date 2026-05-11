/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // i18n routing — Pages Router
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "en",
        localeDetection: true, // détecte automatiquement la langue du navigateur
    },

    // ⚠️ Conservez vos autres configs ici (images, etc.)
    images: {
        // exemples — adaptez selon votre besoin
        // domains: ['...'],
    },
};

export default nextConfig;