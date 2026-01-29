import React, { useState, useLayoutEffect } from "react";

const RippleButton = ({ children, onClick, className = "", disabled = false, type = "button" }) => {
    const [rippleArray, setRippleArray] = useState([]);

    useLayoutEffect(() => {
        const purgeRipples = () => {
            if (rippleArray.length > 0) {
                setRippleArray([]);
            }
        };

        // Auto purge ripples if they get stuck (though they should clean themselves up)
        const timer = setTimeout(purgeRipples, 2000);
        return () => clearTimeout(timer);
    }, [rippleArray]);

    const addRipple = (event) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
        const x = event.clientX - rippleContainer.left - size / 2;
        const y = event.clientY - rippleContainer.top - size / 2;
        const newRipple = { x, y, size };

        setRippleArray([...rippleArray, newRipple]);

        if (onClick) onClick(event);
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`relative overflow-hidden outline-none ${className}`}
            onClick={addRipple}
        >
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => (
                    <span
                        key={"span" + index}
                        style={{
                            top: ripple.y,
                            left: ripple.x,
                            width: ripple.size,
                            height: ripple.size,
                        }}
                        className="absolute rounded-full bg-white/30 transform scale-0 animate-ripple pointer-events-none"
                    />
                ))}
            {children}
        </button>
    );
};

export default RippleButton;
