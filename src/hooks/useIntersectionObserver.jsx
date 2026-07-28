import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
    const elementsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    useEffect(() => {
        // 1. Recibimos (entries, observer) en la función del callback
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const activeClass = entry.target.dataset.animationClass || 'show';

                    // Agregamos la clase que hace visible la animación
                    entry.target.classList.add(activeClass);

                    // 2. ¡AQUÍ ESTÁ EL TRUCO! 
                    // Dejamos de observar este elemento para que NUNCA vuelva a ocultarse
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0, // Se activa al asomar un 10%
            ...options
        });

        elementsRef.current.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [options]);

    return addToRefs;
}