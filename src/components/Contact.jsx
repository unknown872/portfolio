import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGithub,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiCopy } from "react-icons/fi";
import { TbLoader2 } from "react-icons/tb";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import axios from "axios";

const SOCIAL_LINKS = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://linkedin.com/in/votre-profil" },
    { icon: FaGithub, name: "GitHub", url: "https://github.com/unknown872" },
    { icon: FaWhatsapp, name: "WhatsApp", url: "https://wa.me/221770957560" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/votre-handle" },
    { icon: FaTelegram, name: "Telegram", url: "https://t.me/votre-handle" },
];

const EMAIL = "youssoutraore22@yahoo.com";

function Contact() {
    const t = useTranslations("contact");
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");
    const [copied, setCopied] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            // L'API attend "subjet" (typo backend conservée)
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: "",
                subjet: formData.subject,
                message: formData.message,
            };
            const response = await axios.post("https://contact-api-virid.vercel.app/contact", payload);

            if (response.status === 200) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitStatus(""), 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email", err);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#0a0a0f] overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "100px 100px",
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 30%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 30%, transparent 80%)",
                }}
            />

            <div
                className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)" }}
            />
            <div
                className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)" }}
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

                <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 flex flex-col gap-4"
                    >
                        <button
                            onClick={handleCopyEmail}
                            className="group relative w-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden text-left"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                        <FiMail className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span className="text-[10px] font-mono font-semibold text-cyan-400/80 uppercase tracking-wider">
                                        {t("cards.email")}
                                    </span>
                                </div>

                                <AnimatePresence mode="wait">
                                    {copied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="flex items-center gap-1 text-[10px] font-mono text-cyan-400"
                                        >
                                            <FiCheck className="w-3 h-3" />
                                            <span>{t("cards.copied")}</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <FiCopy className="w-3.5 h-3.5 text-white/40" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <p className="text-white font-mono text-sm md:text-base break-all">{EMAIL}</p>
                            <p className="text-[11px] text-white/40 mt-2">{t("cards.emailHint")}</p>
                        </button>

                        <a
                            href="https://wa.me/221770957560"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-green-500/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                            <FaWhatsapp className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span className="text-[10px] font-mono font-semibold text-green-400/80 uppercase tracking-wider">
                                            {t("cards.whatsapp")}
                                        </span>
                                    </div>
                                    <p className="text-white font-mono text-sm md:text-base">+221 77 095 75 60</p>
                                    <p className="text-[11px] text-white/40 mt-2">{t("cards.whatsappHint")}</p>
                                </div>
                                <motion.div
                                    initial={false}
                                    whileHover={{ x: 2, y: -2 }}
                                    className="text-white/30 group-hover:text-green-400 transition-colors duration-300"
                                >
                                    <FiSend className="w-4 h-4" />
                                </motion.div>
                            </div>
                        </a>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                    <FiMapPin className="w-4 h-4 text-violet-400" />
                                </div>
                                <span className="text-[10px] font-mono font-semibold text-violet-400/80 uppercase tracking-wider">
                                    {t("cards.location")}
                                </span>
                            </div>
                            <p className="text-white text-sm md:text-base">{t("cards.locationValue")}</p>
                            <p className="text-[11px] text-white/40 mt-2 flex items-center gap-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                                </span>
                                {t("cards.locationHint")}
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                            <p className="text-[10px] font-mono font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                                {t("cards.social")}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {SOCIAL_LINKS.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            title={social.name}
                                            className="group/social relative w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover/social:from-cyan-500/10 group-hover/social:to-violet-500/10 transition-all duration-300" />
                                            <Icon className="relative w-4 h-4 text-white/60 group-hover/social:text-cyan-400 transition-colors duration-300" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="relative h-full p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                            <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/[0.06]">
                                <div className="flex items-center gap-2 font-mono text-[11px]">
                                    <span className="text-cyan-400/80">{">"}</span>
                                    <span className="text-white/60">{t("form.header")}</span>
                                    <span className="text-white/30">()</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                    <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
                                </div>
                            </div>

                            <AnimatePresence>
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: "auto" }}
                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={clsx(
                                            "mb-5 p-3.5 rounded-xl border flex items-center gap-2.5 font-mono text-[13px]",
                                            submitStatus === "success"
                                                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-200"
                                                : "bg-red-500/10 border-red-500/30 text-red-200"
                                        )}
                                    >
                                        {submitStatus === "success" ? (
                                            <>
                                                <FiCheck className="w-4 h-4 flex-shrink-0" />
                                                <span>{t("form.success")}</span>
                                            </>
                                        ) : (
                                            <>
                                                <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                                                <span>{t("form.error")}</span>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        label={t("form.labels.name")}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder={t("form.placeholders.name")}
                                        required
                                    />
                                    <FormField
                                        label={t("form.labels.email")}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder={t("form.placeholders.email")}
                                        required
                                    />
                                </div>

                                <FormField
                                    label={t("form.labels.subject")}
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder={t("form.placeholders.subject")}
                                    required
                                />

                                <FormField
                                    label={t("form.labels.message")}
                                    type="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder={t("form.placeholders.message")}
                                    required
                                />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                                    <p className="text-[11px] font-mono text-white/30">{t("form.requiredFields")}</p>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={!isSubmitting ? { y: -2 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        className={clsx(
                                            "group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-medium text-sm overflow-hidden transition-all duration-500",
                                            isSubmitting
                                                ? "bg-white/[0.05] text-white/50 cursor-not-allowed"
                                                : "bg-gradient-to-br from-cyan-300 to-cyan-500 text-[#0a0a0f] shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                                        )}
                                    >
                                        {!isSubmitting && (
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                        )}
                                        {isSubmitting ? (
                                            <>
                                                <TbLoader2 className="w-4 h-4 animate-spin relative z-10" />
                                                <span className="relative z-10">{t("form.submitting")}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="relative z-10">{t("form.submit")}</span>
                                                <FiSend className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FormField({ label, type, name, value, onChange, placeholder, required }) {
    const [isFocused, setIsFocused] = useState(false);
    const isTextarea = type === "textarea";

    return (
        <div className="group">
            <label className="flex items-center gap-2 text-[11px] font-mono text-white/50 mb-2">
                <span className="text-cyan-400/60">{`{`}</span>
                <span className="lowercase">{label}</span>
                {required && <span className="text-red-400/80">*</span>}
                <span className="text-cyan-400/60">{`}`}</span>
            </label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    rows={5}
                    required={required}
                    placeholder={placeholder}
                    className={clsx(
                        "w-full px-4 py-3 rounded-xl bg-white/[0.02] border text-white text-sm placeholder-white/30 transition-all duration-300 outline-none resize-none",
                        isFocused
                            ? "border-cyan-500/40 bg-white/[0.04] shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
                            : "border-white/[0.06] hover:border-white/[0.12]"
                    )}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    placeholder={placeholder}
                    className={clsx(
                        "w-full px-4 py-3 rounded-xl bg-white/[0.02] border text-white text-sm placeholder-white/30 transition-all duration-300 outline-none",
                        isFocused
                            ? "border-cyan-500/40 bg-white/[0.04] shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
                            : "border-white/[0.06] hover:border-white/[0.12]"
                    )}
                />
            )}
        </div>
    );
}

export default Contact;