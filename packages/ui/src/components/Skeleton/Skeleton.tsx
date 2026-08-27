import React from "react";
import { Skeleton as MuiSkeleton, Box, Stack, SkeletonProps as MuiSkeletonProps } from "@mui/material";
import { SkeletonProps } from "./Skeleton.types";

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  orientation,
  width,
  height,
  animation = "wave",
  sx,
  lines = 1,
  rows = 1,
  cols = 5,
  rounded,
  ...props
}) => {
  const getBorderRadius = () => {
    if (rounded === true || rounded === "sm") return 1;
    if (rounded === "md") return 2;
    if (rounded === "lg") return 3;
    if (typeof rounded === "number" || typeof rounded === "string") return rounded;
    return undefined;
  };

  const borderRadius = getBorderRadius();

  // Base Skeleton wrapper
  const BaseSkeleton = (extraSx?: any) => (
    <MuiSkeleton
      variant={
        ["card", "list-item", "table-row", "profile"].includes(variant as string)
          ? "rectangular"
          : (variant as MuiSkeletonProps["variant"])
      }
      width={width}
      height={height}
      animation={animation}
      sx={[
        ...(borderRadius !== undefined ? [{ borderRadius }] : []),
        ...(extraSx ? [extraSx] : []), 
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...props}
    />
  );

  // Pre-defined complex structures
  if (variant === "card") {
    const isHorizontal = orientation === "horizontal";
    return (
      <Box
        sx={[
          {
            p: 2,
            border: "1px solid #E0E0E0",
            borderRadius: 2,
            width: width || "100%",
            display: isHorizontal ? "flex" : "block",
            gap: isHorizontal ? 2 : 0,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <MuiSkeleton
          variant="rectangular"
          height={isHorizontal ? 100 : 140}
          width={isHorizontal ? 100 : "100%"}
          animation={animation}
          sx={{ borderRadius: 1, flexShrink: 0 }}
        />
        <Box
          sx={{
            pt: isHorizontal ? 0 : 1.5,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <MuiSkeleton animation={animation} height={24} width="80%" />
          <MuiSkeleton animation={animation} height={20} width="60%" />
        </Box>
      </Box>
    );
  }

  if (variant === "profile") {
    const isVertical = orientation === "vertical";
    return (
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            alignItems: "center",
            gap: 2,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <MuiSkeleton
          variant="circular"
          width={width || 48}
          height={height || 48}
          animation={animation}
          sx={{ flexShrink: 0 }}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            alignItems: isVertical ? "center" : "flex-start",
            width: "100%",
          }}
        >
          <MuiSkeleton
            animation={animation}
            height={20}
            width={isVertical ? "80%" : "60%"}
          />
          <MuiSkeleton
            animation={animation}
            height={16}
            width={isVertical ? "60%" : "40%"}
          />
        </Box>
      </Box>
    );
  }

  if (variant === "list-item") {
    const isVertical = orientation === "vertical";
    return (
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            alignItems: isVertical ? "flex-start" : "center",
            gap: 2,
            py: 1,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <MuiSkeleton
          variant="rectangular"
          width={width || (isVertical ? "100%" : 40)}
          height={height || (isVertical ? 120 : 40)}
          sx={{ borderRadius: 1, flexShrink: 0 }}
          animation={animation}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            width: "100%",
          }}
        >
          <MuiSkeleton animation={animation} height={20} width="70%" />
          <MuiSkeleton animation={animation} height={16} width="40%" />
        </Box>
      </Box>
    );
  }

  if (variant === "table-row") {
    return (
      <>
        {Array.from(new Array(rows)).map((_, rowIndex) => (
          <Stack
            key={rowIndex}
            direction="row"
            spacing={2}
            sx={[
              { py: 1.5, borderBottom: "1px solid #E0E0E0" },
              ...(Array.isArray(sx) ? sx : [sx]),
            ]}
          >
            {Array.from(new Array(cols)).map((_, colIndex) => (
              <MuiSkeleton
                key={colIndex}
                animation={animation}
                height={20}
                width={`${100 / cols}%`}
              />
            ))}
          </Stack>
        ))}
      </>
    );
  }

  // Multi-line text
  if (variant === "text" && lines > 1) {
    return (
      <Box sx={[{ width: width || "100%" }, ...(Array.isArray(sx) ? sx : [sx])]}>
        {Array.from(new Array(lines)).map((_, index) => (
          <MuiSkeleton
            key={index}
            variant="text"
            height={height}
            animation={animation}
            width={index === lines - 1 ? "70%" : "100%"}
            sx={{ mb: 0.5 }}
            {...props}
          />
        ))}
      </Box>
    );
  }

  // Cascading/Staggered variant
  if (variant === "cascading") {
    const numLines = 4;
    return (
      <Box sx={[{ width: width || "100%" }, ...(Array.isArray(sx) ? sx : [sx])]}>
        {Array.from(new Array(numLines)).map((_, index) => {
          const expansionDuration = 40; // Total % of timeline to expand
          const stagger = expansionDuration * 0.3; // Next starts when current is 30% through
          const startPercent = index * stagger;
          const endPercent = startPercent + expansionDuration;
          
          return (
            <MuiSkeleton
              key={index}
              variant="text"
              height={height}
              animation="wave"
              width={index === numLines - 1 ? "70%" : `${100 - index * 4}%`}
              sx={{
                mb: 0.5,
                transformOrigin: "left",
                animation: `cascade-${index} 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                [`@keyframes cascade-${index}`]: {
                  "0%": { transform: "scaleX(0)" },
                  [`${startPercent}%`]: { transform: "scaleX(0)" },
                  [`${endPercent}%`]: { transform: "scaleX(1)" },
                  "99.99%": { transform: "scaleX(1)" },
                  "100%": { transform: "scaleX(0)" },
                },
              }}
              {...props}
            />
          );
        })}
      </Box>
    );
  }

  // Basic variants (text, circular, rectangular, rounded)
  return BaseSkeleton();
};

export default Skeleton;
