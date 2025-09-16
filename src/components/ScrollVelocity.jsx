import React, { useEffect, useRef } from "react";

const ScrollVelocity = ({
  children,
  baseVelocity = 100,
  className = "",
  style = {},
}) => {
  const baseRef = useRef(null);
  const directionFactor = useRef(1);
  const moveBy = useRef(0);

  useEffect(() => {
    const marquee = baseRef.current;
    if (!marquee) return;

    let animationId;
    let lastScrollY = 0;

    const animate = () => {
      // Get scroll velocity
      const currentScrollY = window.scrollY;
      const scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Update direction based on scroll
      if (scrollVelocity !== 0) {
        directionFactor.current = scrollVelocity > 0 ? -1 : 1;
      }

      // Calculate movement
      moveBy.current += directionFactor.current * baseVelocity * 0.01;

      // Apply transform
      marquee.style.transform = `translateX(${moveBy.current}px)`;

      // Reset position when it goes too far
      if (Math.abs(moveBy.current) > marquee.offsetWidth) {
        moveBy.current = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [baseVelocity]);

  return (
    <div
      className={`overflow-hidden text-nowrap ${className}`}
      style={{ ...style }}
    >
      <div
        ref={baseRef}
        className="d-inline-block"
        style={{
          willChange: "transform",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollVelocity;
