"use client";
import { useEffect, useState } from "react";

export function useCountUp(target: number, start: boolean, duration = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        let raf: number;
        const startTime = performance.now();

        const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            const current = Math.floor(eased * target);
            setValue(current);

            if (progress < 1) {
                raf = requestAnimationFrame(animate);
            }
        };

        raf = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(raf);
    }, [target, start, duration]);

    return value;
}
