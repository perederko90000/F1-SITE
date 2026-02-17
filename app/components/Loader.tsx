"use client";

import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setHide(true), 2200);
        const t2 = setTimeout(() => onFinish(), 3000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] transition-opacity duration-700 ${hide ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Glow */}
            <div className="absolute w-[600px] h-[600px] bg-blue-500/30 blur-[200px]" />
            <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[200px]" />

            <div className="relative flex flex-col items-center gap-8">

                {/* Logo animado */}
                <svg
                    className="w-24 h-24 text-white"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        style={{
                            strokeDasharray: 251,
                            strokeDashoffset: 251,
                            animation: "draw 2s ease forwards",
                        }}
                    />
                </svg>

                <div className="text-white/60 uppercase tracking-[0.5em] text-sm">
                    Loading experience
                </div>
            </div>

            <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
        </div>
    );
}
