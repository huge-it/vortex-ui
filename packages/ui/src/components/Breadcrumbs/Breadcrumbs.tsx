import React, { ReactNode } from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";

export interface BreadcrumbItem {
  label?: string;
  href?: string;
  isNavigable?: boolean;
  icon?: ReactNode;
}

export interface BreadcrumbsProps {
  /** The array of breadcrumbs to display */
  items: BreadcrumbItem[];
  /** Callback fired when a navigable breadcrumb is clicked */
  onCrumbClick?: (crumb: BreadcrumbItem, index: number) => void;
  /** Custom separator node. Defaults to "›". */
  separator?: ReactNode;
  /** Maximum number of items to display before collapsing intermediate items */
  maxItems?: number;
  /** Custom styles for the container */
  sx?: SxProps<Theme>;
}

export const Breadcrumbs = ({
  items,
  onCrumbClick,
  separator = "›",
  maxItems,
  sx,
}: BreadcrumbsProps) => {
  if (!items || items.length === 0) return null;

  type DisplayItem = 
    | { type: "item"; crumb: BreadcrumbItem; originalIndex: number }
    | { type: "collapsed" };

  let displayItems: DisplayItem[] = [];

  if (maxItems && maxItems > 0 && items.length > maxItems) {
    const startItems = 1;
    const endItems = maxItems === 1 ? 0 : maxItems - 1;
    
    displayItems.push({ type: "item", crumb: items[0], originalIndex: 0 });
    displayItems.push({ type: "collapsed" });
    
    for (let i = items.length - endItems; i < items.length; i++) {
      displayItems.push({ type: "item", crumb: items[i], originalIndex: i });
    }
  } else {
    displayItems = items.map((crumb, index) => ({
      type: "item",
      crumb,
      originalIndex: index,
    }));
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ...sx }}>
      {displayItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                fontSize: "13px",
              }}
            >
              {separator}
            </Box>
          )}
          {item.type === "collapsed" ? (
            <Typography sx={{ color: "text.secondary", fontSize: "13px", px: 0.5, letterSpacing: 1 }}>
              ...
            </Typography>
          ) : (
            <Typography
              onClick={() => {
                if (item.crumb.isNavigable !== false && onCrumbClick) {
                  onCrumbClick(item.crumb, item.originalIndex);
                }
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color:
                  item.originalIndex === items.length - 1
                    ? "text.primary"
                    : "text.secondary",
                fontSize: "13px",
                fontWeight: item.originalIndex === items.length - 1 ? 500 : 400,
                cursor: item.crumb.isNavigable !== false ? "pointer" : "default",
                "&:hover":
                  item.crumb.isNavigable !== false
                    ? {
                        color: "text.primary",
                        textDecoration: "underline",
                      }
                    : {},
              }}
            >
              {item.crumb.icon && (
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > svg": { fontSize: "16px" },
                  }}
                >
                  {item.crumb.icon}
                </Box>
              )}
              {item.crumb.label && <span>{item.crumb.label}</span>}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};
