"use client";
import { useReveal } from "../hook/useReveal";

export default function CTA() {
    useReveal();

    return (
        <section className="max-w-7xl mx-auto px-8 py-40 text-center reveal">
            <h2 className="text-5xl md:text-6xl font-semibold mb-10">
                Ready to build something legendary?
            </h2>
            <button className="px-12 py-6 rounded-full bg-white text-black font-medium text-lg hover:scale-105 transition">
                Start a project
            </button>
        </section>
    );
}
