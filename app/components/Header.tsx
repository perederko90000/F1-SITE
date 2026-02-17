"use client";


import { siteConfig } from "../config/site";

import { useReveal } from "../hook/useReveal";

export default function Header() {
    useReveal();
    return (
        <header className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
            <div className="font-semibold text-xl tracking-[0.3em]">
                {siteConfig.brand}
            </div>
            <nav className="flex gap-10 text-sm text-white/70 uppercase tracking-widest">
                <a className="hover:text-white transition">Product</a>
                <a className="hover:text-white transition">Technology</a>
                <a className="hover:text-white transition">Cases</a>
                <a className="hover:text-white transition">Contact</a>
            </nav>
        </header>
    );
}
