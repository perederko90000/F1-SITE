"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "../config/site";

export default function Hero() {
    const g1 = useRef<SVGGElement | null>(null);
    const g2 = useRef<SVGGElement | null>(null);
    const g3 = useRef<SVGGElement | null>(null);

    // 🖱️ Mouse parallax
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            if (g1.current)
                g1.current.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
            if (g2.current)
                g2.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            if (g3.current)
                g3.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // 🛞 Scroll parallax
    useEffect(() => {
        const onScroll = () => {
            const s = window.scrollY;

            if (g1.current) g1.current.style.translate = `0px ${s * 0.05}px`;
            if (g2.current) g2.current.style.translate = `0px ${s * 0.1}px`;
            if (g3.current) g3.current.style.translate = `0px ${s * 0.15}px`;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="relative max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 items-center overflow-hidden">

            {/* 🌊 WAVES BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* LAYER 1 */}
                <svg
                    className="absolute w-[120%] h-[120%] left-[-10%] top-[20%] opacity-30 animate-[waveFloat1_22s_ease-in-out_infinite]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <g ref={g1} style={{ willChange: "transform" }}>
                        <path
                            fill="#3b82f6"
                            fillOpacity="0.35"
                            d="M0,160L80,170C160,180,320,200,480,208C640,216,800,212,960,197.3C1120,183,1280,160,1360,149.3L1440,139L1440,0L0,0Z"
                        />
                    </g>
                </svg>

                {/* LAYER 2 */}
                <svg
                    className="absolute w-[130%] h-[130%] left-[-15%] top-[30%] opacity-20 animate-[waveFloat2_30s_ease-in-out_infinite]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <g ref={g2} style={{ willChange: "transform" }}>
                        <path
                            fill="#a855f7"
                            fillOpacity="0.3"
                            d="M0,200L80,190C160,180,320,160,480,165C640,170,800,200,960,210C1120,220,1280,210,1360,205L1440,200L1440,0L0,0Z"
                        />
                    </g>
                </svg>

                {/* LAYER 3 */}
                <svg
                    className="absolute w-[140%] h-[140%] left-[-20%] top-[40%] opacity-10 animate-[waveFloat1_40s_ease-in-out_infinite]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <g ref={g3} style={{ willChange: "transform" }}>
                        <path
                            fill="#22d3ee"
                            fillOpacity="0.25"
                            d="M0,220L80,210C160,200,320,180,480,175C640,170,800,190,960,205C1120,220,1280,215,1360,210L1440,205L1440,0L0,0Z"
                        />
                    </g>
                </svg>

            </div>

            {/* TEXTO */}
            <div className="relative z-10">
                <p className="text-white/50 uppercase tracking-widest mb-6">
                    {siteConfig.slogan}
                </p>

                <h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] mb-10">
                    {siteConfig.heroTitle.map((t) => (
                        <span key={t}>
                            {t}
                            <br />
                        </span>
                    ))}
                </h1>

                <p className="text-white/60 text-lg max-w-xl mb-12">
                    {siteConfig.description}
                </p>

                <div className="flex gap-6 mb-16">
                    <button className="px-10 py-5 rounded-full bg-white text-black font-medium hover:scale-105 transition">
                        {siteConfig.ctaPrimary}
                    </button>
                    <button className="px-10 py-5 rounded-full border border-white/20 hover:scale-105 transition ">
                        {siteConfig.ctaSecondary}
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                    {siteConfig.metrics.map((m) => (
                        <div key={m.label}>
                            <div className="text-3xl font-semibold">{m.value}</div>
                            <div className="text-white/50 text-sm">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMAGEM */}
            {/* IMAGEM 3D COM PARALLAX */}
            {/* IMAGEM 3D COM PARALLAX OTIMIZADO (GPU SAFE) */}
            <div className="relative z-10 flex items-center justify-center">
                <div
                    className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] transition-transform duration-200"
                    style={{
                        willChange: "transform",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                    }}
                    onMouseMove={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        const rect = el.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;

                        const rotateX = (-y / rect.height) * 8;
                        const rotateY = (x / rect.width) * 8;

                        el.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
      `;
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
                    }}
                >
                    <img
                        src="/hero.png"
                        alt="3D Object"
                        className="w-full h-full object-contain pointer-events-none select-none"
                        draggable={false}
                    />
                </div>
            </div>


        </section>
    );
}
