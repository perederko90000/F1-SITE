"use client";
import { useReveal } from "../hook/useReveal";
import { useCountUp } from "../hook/useCountUp";
import { useInView } from "../hook/useInView";
import { siteConfig } from "../config/site";

function parseValue(v: string) {
    const num = parseFloat(v.replace(/[^\d.]/g, ""));
    return isNaN(num) ? 0 : num;
}

export default function Metrics() {
    useReveal();
    const { ref: triggerRef, inView } = useInView<HTMLDivElement>();

    return (
        <section className="relative max-w-7xl mx-auto px-8 py-40 reveal">

            {/* 👁️ Trigger invisível */}
            <div ref={triggerRef} className="absolute top-40 h-1 w-full" />

            {/* Título */}
            <div className="text-center mb-24">
                <p className="uppercase tracking-[0.4em] text-white/40 mb-6 text-sm">
                    Impact
                </p>
                <h2 className="text-5xl md:text-7xl font-light tracking-tight">
                    Numbers that matter.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {siteConfig.metrics.map((m) => {
                    const raw = parseValue(m.value);
                    const count = useCountUp(raw, inView, 1400);

                    return (
                        <div
                            key={m.label}
                            className="group relative p-12 rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:-translate-y-2"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                            <div className="relative z-10 text-center">
                                {/* Número */}
                                <div className="text-6xl md:text-7xl font-medium tracking-tight mb-4 tabular-nums">
                                    {m.value.includes("%") && `${count}%`}
                                    {m.value.includes("M") && `${count}M+`}
                                    {!m.value.includes("%") && !m.value.includes("M") && count}
                                </div>

                                {/* Label */}
                                <div className="text-white/60 text-sm tracking-wide uppercase">
                                    {m.label}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
