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

  useEffect(() => {
    // Small delay to ensure the page content is fully mounted
    const timer = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll("main h2, main h3, main h4, main h5"),
      ) as HTMLElement[];

      const newHeadings: HeadingData[] = elements.map((elem, index) => {
        if (!elem.id) {
          // Generate an id based on text content
          const text = elem.innerText || elem.textContent || "";
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          elem.id = slug || `heading-${index}`;
        }

        // Determine level for indentation
        const level = parseInt(elem.tagName.replace("H", ""), 10);

        return {
          id: elem.id,
          text: elem.innerText || elem.textContent || "",
          level,
          element: elem,
        };
      });

      setHeadings(newHeadings);

      if (newHeadings.length > 0) {
        setActiveId(newHeadings[0].id); // default first item
      }

      // Intersection Observer logic
      const observer = new IntersectionObserver(
        (entries) => {
          // We only care about items intersecting at the top of the screen
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-80px 0px -60% 0px", // Trigger when heading is near the top
          threshold: 0.1,
        },
      );

      elements.forEach((elem) => observer.observe(elem));

      return () => {
        elements.forEach((elem) => observer.unobserve(elem));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const theme = useTheme();
  const listRef = React.useRef<HTMLUListElement>(null);
  const itemRefs = React.useRef<Record<string, HTMLLIElement | null>>({});
  const [points, setPoints] = useState<{ id: string; x: number; y: number }[]>(
    [],
  );

  // 8px = Main branch, 24px = Sub branch
  const MAIN_X = 8;
  const BRANCH_X = 24;

  useEffect(() => {
    const updatePoints = () => {
      if (headings.length > 0) {
        const newPoints = headings.map((h) => {
          const el = itemRefs.current[h.id];
          if (!el) return { id: h.id, x: 0, y: 0 };
          const isSub = h.level > 2;
          return {
            id: h.id,
            x: isSub ? BRANCH_X : MAIN_X,
            y: el.offsetTop + el.offsetHeight / 2,
          };
        });
        setPoints(newPoints);
      }
    };

    // Use a tiny timeout to allow DOM to settle before measuring offsetTop
    const t = setTimeout(updatePoints, 50);
    window.addEventListener("resize", updatePoints);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updatePoints);
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const activePoint = points.find((p) => p.id === activeId);

  const drawPaths = () => {
    const paths = [];
    if (points.length === 0) return paths;

    // 1. Draw continuous main line
    const maxY = points[points.length - 1].y + 16;
    paths.push(
      <line
        key="main-line"
        x1={MAIN_X}
        y1={points[0].y}
        x2={MAIN_X}
        y2={maxY}
        stroke={theme.palette.divider}
        strokeWidth="2"
      />,
    );

    // 2. Find groups of subtopics to draw branches
    let inBranch = false;
    let branchStartIdx = -1;

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const isSub = p.x === BRANCH_X;

      if (isSub && !inBranch) {
        inBranch = true;
        branchStartIdx = i;
      }

      if ((!isSub || i === points.length - 1) && inBranch) {
        const branchEndIdx = isSub ? i : i - 1;

        // Draw S-curve splitting from main branch
        if (branchStartIdx > 0) {
          const prev = points[branchStartIdx - 1];
          const start = points[branchStartIdx];
          const midY = (prev.y + start.y) / 2;
          paths.push(
            <path
              key={`split-${branchStartIdx}`}
              d={`M ${MAIN_X} ${prev.y} C ${MAIN_X} ${midY}, ${BRANCH_X} ${midY}, ${BRANCH_X} ${start.y}`}
              fill="none"
              stroke={theme.palette.divider}
              strokeWidth="2"
            />,
          );
        }

        // Draw straight line for the branch itself
        if (branchStartIdx <= branchEndIdx) {
          const startY = points[branchStartIdx].y;
          const endY = points[branchEndIdx].y;
          if (startY !== endY) {
            paths.push(
              <line
                key={`branch-${branchStartIdx}`}
                x1={BRANCH_X}
                y1={startY}
                x2={BRANCH_X}
                y2={endY}
                stroke={theme.palette.divider}
                strokeWidth="2"
              />,
            );
          }
        }

        // Draw S-curve merging back to main branch
        if (!isSub) {
          const end = points[branchEndIdx];
          const next = points[i];
          const midY = (end.y + next.y) / 2;
          paths.push(
            <path
              key={`merge-${branchEndIdx}`}
              d={`M ${BRANCH_X} ${end.y} C ${BRANCH_X} ${midY}, ${MAIN_X} ${midY}, ${MAIN_X} ${next.y}`}
              fill="none"
              stroke={theme.palette.divider}
              strokeWidth="2"
            />,
          );
        }

        inBranch = false;
      }
    }

    // 3. Static dots for every item
    points.forEach((p) => {
      paths.push(
        <circle
          key={`dot-${p.id}`}
          cx={p.x}
          cy={p.y}
          r="3"
          fill={theme.palette.divider}
        />,
      );
    });

    return paths;
  };

  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          color: "text.secondary",
          letterSpacing: "0.05em",
          mb: 2,
          px: 1,
          fontSize: "0.75rem",
        }}
      >
        On This Page
      </Typography>

      <Box sx={{ position: "relative", ml: 1, mt: 1 }}>
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40px",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {drawPaths()}
        </svg>

        {/* Animated Active Dot */}
        <Box
          sx={{
            position: "absolute",
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "primary.main",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            top: activePoint ? activePoint.y : 0,
            left: activePoint ? activePoint.x : 0,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            opacity: activePoint ? 1 : 0,
            boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.15)",
          }}
        />

        <List
          disablePadding
          ref={listRef}
          sx={{ position: "relative", zIndex: 1 }}
        >
          {headings.map((heading, index) => {
            const isActive = activeId === heading.id;
            const activeIndex = headings.findIndex((h) => h.id === activeId);
            const isPast = activeIndex !== -1 && index < activeIndex;

            const isSub = heading.level > 2;

            return (
              <ListItem
                key={heading.id}
                disablePadding
                ref={(el) => {
                  itemRefs.current[heading.id] = el;
                }}
                sx={{ position: "relative", mb: 0.5 }}
              >
                <ListItemButton
                  onClick={() => {
                    heading.element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  sx={{
                    borderRadius: "4px",
                    py: 0.5,
                    pl: isSub ? "36px" : "20px", // spacing to clear the svg graph
                    color: isActive
                      ? "primary.main"
                      : isPast
                        ? "text.secondary"
                        : "text.disabled",
                    backgroundColor: "transparent",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "text.primary",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <ListItemText
                    primary={heading.text}
                    slotProps={{
                      primary: {
                        style: {
                          fontWeight: isActive ? 600 : 400,
                          fontSize: "0.8125rem",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
