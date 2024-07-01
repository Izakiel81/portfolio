import {useActions} from "@/hooks/useActions";
import {useEffect, useRef} from "react";

export function Observer(value: "home" | "about" | "experience" | "projects" | "contact") {
    const { setActiveTab } = useActions();
    const cbRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(value);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        if (cbRef.current) {
            observer.observe(cbRef.current);
        }
        return () => {
            if (cbRef.current) {
                observer.unobserve(cbRef.current);
            }
        };
    }, [cbRef]);
    return cbRef;
}