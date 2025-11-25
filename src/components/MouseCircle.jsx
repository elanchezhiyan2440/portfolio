import './MouseCircle.css'
import './IntroBragTextSection.css'
import React, { useState } from 'react';

// 1. The cursor is now a "dumb" component that just receives props
const CustomCursor = ({ x, y, isVisible }) => {
    return (
        <div
            className="custom-cursor"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                opacity: isVisible ? 1 : 0, // Hide when leaving the section
                transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`, // Optional pop effect
            }}
        />
    );
};

function MouseCircle({textcontent, customClassNames}) {

    const [cursor, setCursor] = useState({ x: 0, y: 0, isVisible: false });

    // 2. Events are attached to the Section, not the Window
    const handleMouseMove = (e) => {
        // We use clientX/Y for fixed positioning relative to the viewport
        setCursor(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseEnter = () => {
        setCursor(prev => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
        setCursor(prev => ({ ...prev, isVisible: false }));
    };

    return (
        <section
            className={`mouseHoverEffectSection ${customClassNames}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CustomCursor
                x={cursor.x}
                y={cursor.y}
                isVisible={cursor.isVisible}
            />

        {/* PUT CONTENT HERE */}
        <p className='introBragText'>
            {textcontent}
        </p>
        {/* PUT CONTENT HERE */}
        </section>
    );
}

export default MouseCircle