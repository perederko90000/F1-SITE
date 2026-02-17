"use client";
import { useReveal } from "../hook/useReveal";

const projects = [
    {
        title: "Autonomous Platform",
        desc: "Scalable infrastructure for autonomous systems and AI-driven operations.",
        image: "/project1.png",
    },
    {
        title: "AI Financial Engine",
        desc: "High-performance financial core powered by machine learning.",
        image: "/project2.png",
    },
    {
        title: "SaaS Growth System",
        desc: "Growth-focused SaaS platform built for scale and reliability.",
        image: "/project3.png",
    },
];

export default function Projects() {
    useReveal();

    return (
        <section className="relative max-w-7xl mx-auto px-8 py-56 reveal">

            <div className="mb-32">
                <p className="uppercase tracking-[0.4em] text-white/40 mb-8 text-sm">
                    Selected Projects
                </p>

                <h2 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight">
                    Built for <br /> the real world.
                </h2>
            </div>

            <div className="space-y-40">

                {projects.map((p, i) => (
                    <div
                        key={i}
                        className={`grid md:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""
                            }`}
                    >
                        {/* TEXTO */}
                        <div className={`${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                            <div className="text-sm tracking-[0.3em] text-white/30 mb-6">
                                {String(i + 1).padStart(2, "0")}
                            </div>

                            <h3 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
                                {p.title}
                            </h3>

                            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-10">
                                {p.desc}
                            </p>

                            <button className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition">
                                View project
                                <span className="inline-block transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>

                        {/* IMAGEM */}
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-[120px] opacity-0 group-hover:opacity-100 transition" />

                            <img
                                src={p.image}
                                alt=""
                                className="relative z-10 w-full rounded-3xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.03]"
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
