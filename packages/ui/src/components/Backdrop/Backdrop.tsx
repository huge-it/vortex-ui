"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BackdropProps } from "./Backdrop.types";

export const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClick,
  zIndex = 1300,
  color = "#4772FF",
  absolute = false,
  size = 45,
}) => {
  const [mounted, setMounted] = useState(false);
  const ringThickness = Math.max(2, Math.round(size * 0.11));

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!absolute) {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open, absolute]);

  if (!mounted || !open) return null;

  const overlay = (
    <>
      <style>{`
                @keyframes bd-rotate {
                    to { transform: rotate(360deg); }
                }
                @keyframes bd-fade-in {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>
      <div
        onClick={onClick}
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
        style={{
          position: absolute ? "absolute" : "fixed",
          inset: 0,
          zIndex,
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(2px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: onClick ? "pointer" : "default",
          animation: "bd-fade-in 0.15s ease",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: size,
            height: size,
          }}
        >
          {/* Trailer / Track */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `${ringThickness}px solid ${color}33`,
              boxSizing: "border-box",
            }}
          />
          {/* Spinner */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `conic-gradient(${color} 0deg, ${color}55 180deg, transparent 270deg)`,
              WebkitMask:
                `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #fff calc(100% - ${ringThickness}px))`,
              mask: `radial-gradient(farthest-side, transparent calc(100% - ${ringThickness}px), #fff calc(100% - ${ringThickness}px))`,
              animation: "bd-rotate 0.9s linear infinite",
            }}
          />
        </div>
      </div>
    </>
  );

  if (absolute) {
    return overlay;
  }

  return createPortal(overlay, document.body);
};
