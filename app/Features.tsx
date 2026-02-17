"use client";
import { useEffect, useRef } from "react";

import { useReveal } from "./hook/useReveal";

const features = [
    { title: "Extreme Performance", desc: "Designed with performance and scalability as first-class citizens." },
    { title: "Product Design", desc: "Designed with performance and scalability as first-class citizens." },
    { title: "Solid Engineering", desc: "Designed with performance and scalability as first-class citizens." },
    { title: "Business Focused", desc: "Designed with performance and scalability as first-class citizens." },
    { title: "Mobile First", desc: "Designed with performance and scalability as first-class citizens." },
    { title: "Future Proof", desc: "Designed with performance and scalability as first-class citizens." },
];
function MovingCar({
    src,
    size,
    speed,
    yOffset,
    opacity,
}: {
    src: string;
    size: number;
    speed: number;
    yOffset: number;
    opacity: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    const speedRef = useRef(speed);
    const yRef = useRef(yOffset);

    useEffect(() => {
        let x = -600 - Math.random() * 600;
        let last = performance.now();
        let raf: number;

        const animate = (now: number) => {
            if (!ref.current) return;

            const dt = (now - last) / 1000;
            last = now;

            x += speedRef.current * dt;

            const limit = window.innerWidth + 600;
            if (x > limit) {
                x = -600 - Math.random() * 600;
            }

            ref.current.style.transform = `translate(${x}px, ${yRef.current}px)`;

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(raf);
    }, []); // ✅ array fixo e vazio (nunca muda)

    return (
        <div
            ref={ref}
            style={{
                position: "absolute",
                left: 0,
                willChange: "transform",
                opacity,
            }}
        >
            <img
                src={src}
                alt=""
                className="select-none"
                style={{
                    width: size,
                    imageRendering: "pixelated",
                }}
                draggable={false}
            />
        </div>
    );
}





export default function Features() {
    useReveal();

    return (
        <section className="relative max-w-7xl mx-auto px-8 py-56 overflow-hidden">
            {/* 🏎️ FUNDO COM CARROS EM CAMADAS */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-40 flex items-center overflow-hidden">
                <MovingCar
                    src="/f1.png"
                    size={420}
                    speed={160}
                    yOffset={0}
                    opacity={1}
                />
                <MovingCar
                    src="/porsche.png"
                    size={260}
                    speed={80}
                    yOffset={60}
                    opacity={1}
                />
            </div>




            {/* 🧱 CONTEÚDO */}
            <div className="relative z-10">

                <div className="mb-32">
                    <p className="uppercase tracking-[0.4em] text-white/40 mb-8 text-sm">
                        Capabilities
                    </p>

                    <h2 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight">
                        Built like <br /> a machine.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-x-20 gap-y-24">
                    {[
                        "Extreme Performance",
                        "Product Design",
                        "Solid Engineering",
                        "Business Focused",
                        "Mobile First",
                        "Future Proof",
                    ].map((title, i) => (
                        <div key={i} className="group transition-all duration-500">

                            <div className="text-sm tracking-[0.3em] text-white/30 mb-6">
                                {String(i + 1).padStart(2, "0")}
                            </div>

                            <h3 className="text-2xl font-medium mb-4 tracking-tight">
                                {title}
                            </h3>

                            <p className="text-white/50 leading-relaxed max-w-sm">
                                Designed with performance and scalability as first-class citizens.
                            </p>

                            <div className="h-[1px] w-0 bg-white/40 mt-8 transition-all duration-700 group-hover:w-24" />
                        </div>
                    ))}
                </div>

            </div>

        </section >

    );
}
