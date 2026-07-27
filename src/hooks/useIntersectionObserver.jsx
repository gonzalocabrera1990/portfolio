import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
    const elementsRef = useRef([]);

    // Función para registrar elementos en la ref
    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Leemos la clase activa desde un data-attribute (opcional) o aplicamos por defecto
                const activeClass = entry.target.dataset.animationClass || 'show';

                if (entry.isIntersecting) {
                    entry.target.classList.add(activeClass);
                } else {
                    entry.target.classList.remove(activeClass);
                }
            });
        }, {
            threshold: 0.1, // Se activa cuando el 10% del elemento es visible
            ...options
        });

        elementsRef.current.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [options]);

    return addToRefs;
}