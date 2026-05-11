import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "next-intl";

function Services() {
    const t = useTranslations("services");
    const tCommon = useTranslations("common");
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const SERVICES = [
        {
            icon: FaLaptopCode,
            number: "01",
            title: t("webDev.title"),
            description: t("webDev.description"),
            accent: "cyan",
        },
        {
            icon: TbDeviceMobileCode,
            number: "02",
            title: t("mobileDev.title"),
            description: t("mobileDev.description"),
            accent: "violet",
        },
        {
            icon: MdOutlineScreenSearchDesktop,
            number: "03",
            title: t("optimization.title"),
            description: t("optimization.description"),
            accent: "cyan",
        },
    ];

    return (
        <section id="services" ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0f] overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 80%)",
                }}
            />

            <div
                className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)" }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <span className="h-px w-8 bg-cyan-400/50" />
                        <span className="text-[10px] md:text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-[0.25em]">
                            {t("banner")}
                        </span>
                        <span className="h-px w-8 bg-cyan-400/50" />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
                        <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                            {t("title")}
                        </span>
                    </h2>

                    <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            isInView={isInView}
                            learnMoreLabel={tCommon("learnMore")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index, isInView, learnMoreLabel }) {
    const Icon = service.icon;
    const cardRef = useRef(null);
    const accentColor = service.accent === "cyan" ? "34,211,238" : "139,92,246";

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="group h-full"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="relative h-full p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500 overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(${accentColor}, 0.08), transparent 40%)`,
                    }}
                />

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                                style={{ background: `rgba(${accentColor}, 0.3)` }}
                            />
                            <Icon className="relative w-5 h-5 transition-colors duration-500" style={{ color: `rgb(${accentColor})` }} />
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight tracking-tight">
                        {service.title}
                    </h3>

                    <p className="text-sm md:text-[15px] text-white/55 leading-relaxed mb-8">
                        {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white/40 group-hover:text-white/80 transition-colors duration-300">
                        <span>{learnMoreLabel}</span>
                        <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Services;