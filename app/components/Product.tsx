"use client";
import { useReveal } from "../hook/useReveal";

export default function Product() {
    useReveal();

    return (
        <section className="relative max-w-7xl mx-auto px-8 py-48 grid md:grid-cols-2 gap-20 items-center">

            {/* TEXTO */}
            <div className="max-w-xl">

                <p className="uppercase tracking-[0.4em] text-white/40 mb-8 text-sm">
                    Philosophy
                </p>

                <h2 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight mb-10">
                    Built like a <br />
                    <span className="font-medium">supercar.</span>
                </h2>

                <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                    Performance in every pixel. Precision in every line of code.
                </p>

            </div>

            {/* IMAGEM */}
            <div className="relative flex justify-center md:justify-end">
                <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">

                    {/* Glow atrás */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

                    <img
                        src="/hero2.png"
                        alt=""
                        className="relative z-10 w-full h-full object-contain float-slow"
                        draggable={false}
                    />

                </div>
            </div>

        </section>
    );
}