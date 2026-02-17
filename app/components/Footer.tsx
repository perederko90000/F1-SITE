"use client";
import { useReveal } from "../hook/useReveal";
export default function Footer() {
    useReveal();

    return (
        <footer className="border-t border-white/10 py-12 text-center text-white/40">
            © 2026 DANIEL PEREDERKO. All rights reserved.
        </footer>
    );
}
