import React, { useState, useEffect, useRef } from 'react';
import './MouseCircle.css';
import './IntroBragTextSection.css'; // Assuming this is where you keep text styles

const MouseCircle = ({ textcontent, customClassNames }) => {
    // --- STATE 1: Mouse Cursor Logic ---
    const [cursor, setCursor] = useState({ x: 0, y: 0, isVisible: false });

    // --- STATE 2: Scroll Animation Logic ---
    const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
    const textRef = useRef(null); // Reference to the text element

    // 1. Handle Mouse Movement
    const handleMouseMove = (e) => {
        setCursor(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseEnter = () => setCursor(prev => ({ ...prev, isVisible: true }));
    const handleMouseLeave = () => setCursor(prev => ({ ...prev, isVisible: false }));

    // 2. Handle Scroll Detection (The "Pop Up" Effect)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // Only trigger if we haven't seen it yet (prevents blinking)
            setIsScrolledIntoView(entry.isIntersecting);
        }, { threshold: 0.1 }); // Trigger when 10% of the item is visible

        const currentRef = textRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section className={`mouseHoverEffectSection ${customClassNames}`}>

            {/* THE CUSTOM CURSOR */}
            <div
                className="custom-cursor"
                style={{
                    left: `${cursor.x}px`,
                    top: `${cursor.y}px`,
                    opacity: cursor.isVisible ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${cursor.isVisible ? 1 : 0})`,
                }}
            />

            {/* THE TEXT CONTENT */}
            <p
                ref={textRef}
                /* Logic: Base Class + (If Scrolled ? Show Class : Hide Class) */
                className={`introBragText ${isScrolledIntoView ? "pop-up-visible" : "pop-up-hidden"}`}

                /* Mouse Events attached here */
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {textcontent}
            </p>
        </section>
    );
};

export default MouseCircle;