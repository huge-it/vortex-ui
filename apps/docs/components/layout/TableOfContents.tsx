"use client";

import React, { useEffect, useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";

interface HeadingData {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll("main h2, main h3, main h4, main h5"),
      ) as HTMLElement[];

      const newHeadings: HeadingData[] = elements.map((elem, index) => {
        if (!elem.id) {
          const text = elem.innerText || elem.textContent || "";
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

          elem.id = slug || `heading-${index}`;
        }

        return {
          id: elem.id,
          text: elem.innerText || elem.textContent || "",
          level: parseInt(elem.tagName.replace("H", ""), 10),
          element: elem,
        };
      });

      setHeadings(newHeadings);

      if (newHeadings.length > 0) {
        setActiveId(newHeadings[0].id);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );

          if (visible[0]) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: "-90px 0px -65% 0px",
          threshold: 0,
        },
      );

      elements.forEach((element) => observer.observe(element));

      return () => {
        elements.forEach((element) => observer.unobserve(element));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (headings.length === 0) {
    return null;
  }

  const activeIndex = headings.findIndex((item) => item.id === activeId);
  const ITEM_HEIGHT = 36;
  const START_Y = 18;

  const pathD = headings.reduce((acc, heading, i) => {
    const x = heading.level > 2 ? 22 : 6;
    const y = START_Y + i * ITEM_HEIGHT;
    if (i === 0) return `M ${x} ${y}`;
    
    const prevX = headings[i-1].level > 2 ? 22 : 6;
    const prevY = START_Y + (i-1) * ITEM_HEIGHT;
    
    if (x === prevX) {
       return acc + ` L ${x} ${y}`;
    } else {
       return acc + ` C ${prevX} ${prevY + 16}, ${x} ${y - 16}, ${x} ${y}`;
    }
  }, "");

  const progressHeight = activeIndex >= 0 ? START_Y + activeIndex * ITEM_HEIGHT : 0;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 280,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 2,
          px: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "text.primary",
          }}
        >
          On this page
        </Typography>
      </Box>

      <Box sx={{ position: "relative", ml: 0.5 }}>
        {/* SVG Path */}
        <Box
          component="svg"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 32,
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {/* Background Path */}
          <path
            d={pathD}
            fill="none"
            stroke={theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Animated Active Path (Using clip-path for height animation) */}
          <clipPath id="progress-clip">
            <rect
              x="0"
              y="0"
              width="32"
              height={progressHeight}
              style={{ transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          </clipPath>
          
          <path
            d={pathD}
            fill="none"
            stroke={theme.palette.primary.main}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#progress-clip)"
          />

          {/* Dots on the path */}
          {headings.map((heading, i) => {
            const x = heading.level > 2 ? 22 : 6;
            const y = START_Y + i * ITEM_HEIGHT;
            const isActive = activeId === heading.id;
            const isPast = activeIndex >= i;

            return (
              <circle
                key={`dot-${heading.id}`}
                cx={x}
                cy={y}
                r={isActive ? 4 : 3}
                fill={
                  isActive 
                    ? theme.palette.primary.main 
                    : isPast 
                      ? theme.palette.primary.main 
                      : theme.palette.mode === "dark" ? "#333" : "#fff"
                }
                stroke={
                  isActive || isPast
                    ? theme.palette.primary.main
                    : theme.palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
                }
                strokeWidth="2"
                style={{ transition: "all 0.3s ease" }}
              />
            );
          })}
        </Box>

        {/* Text Items */}
        <List disablePadding sx={{ position: "relative", zIndex: 2 }}>
          {headings.map((heading, i) => {
            const isActive = activeId === heading.id;
            const isPast = activeIndex > i;
            const isSub = heading.level > 2;

            return (
              <ListItem
                key={heading.id}
                disablePadding
                sx={{
                  height: ITEM_HEIGHT,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    heading.element.scrollIntoView({
                       behavior: "smooth",
                      block: "start",
                    });
                  }}
                  sx={{
                    minHeight: ITEM_HEIGHT,
                    py: 0,
                    pr: 1.5,
                    pl: isSub ? 4.5 : 2.5,
                    borderRadius: 1,
                    color: isActive 
                      ? "primary.main" 
                      : isPast 
                        ? "text.primary" 
                        : "text.disabled",
                    transition: "color 0.2s ease-in-out",
                    bgcolor: "transparent !important",
                    "&:hover": {
                      color: isActive ? "primary.main" : "text.primary",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      overflow: "hidden",
                      fontSize: isSub ? "0.75rem" : "0.85rem",
                      lineHeight: 1.4,
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: "0.01em",
                      transition: "font-weight 0.2s ease",
                    }}
                  >
                    {heading.text}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
