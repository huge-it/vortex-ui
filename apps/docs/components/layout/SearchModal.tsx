"use client";
import {
  ArrowForward as ArrowForwardIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  componentCategories,
  exampleCategories,
  foundationCategories,
  SidebarCategory,
  SidebarItem,
} from "./SidebarCategories";

const mapSidebarToSearchItems = (categories: SidebarCategory[]) => {
  return categories.flatMap((cat) =>
    cat.items.map((item: SidebarItem) => {
      const Icon = cat.icon || DashboardIcon;
      return {
        title: item.name,
        path: item.href,
        icon: <Icon sx={{ fontSize: 17 }} />,
        keywords: [item.name.toLowerCase(), cat.title.toLowerCase()],
      };
    }),
  );
};

const searchSections = [
  {
    label: "Components",
    items: mapSidebarToSearchItems(componentCategories),
  },
  {
    label: "Foundations",
    items: mapSidebarToSearchItems(foundationCategories),
  },
  {
    label: "Examples",
    items: mapSidebarToSearchItems(exampleCategories),
  },
];

// ─── Interfaces ─────────────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  keywords: string[];
  sectionLabel?: string;
}

export interface SearchSection {
  label: string;
  items: SearchItem[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const matchesQuery = (item: SearchItem, query: string) => {
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) ||
    item.keywords.some((k: string) => k.includes(q))
  );
};

const filterSections = (sections: SearchSection[], query: string) => {
  if (!query.trim()) return sections;
  return sections
    .map((sec) => ({
      ...sec,
      items: sec.items.filter((i: SearchItem) => matchesQuery(i, query)),
    }))
    .filter((sec) => sec.items.length > 0);
};

const flattenSections = (sections: SearchSection[]) =>
  sections.flatMap((sec) =>
    sec.items.map((item: SearchItem) => ({ ...item, sectionLabel: sec.label })),
  );

// ─── Shared styles ─────────────────────────────────────────────────────────────

const sectionLabelSx = {
  fontSize: "12px",
  fontWeight: 400,
  color: "text.secondary",
  px: 2,
  pt: "8px",
  pb: "2px",
  letterSpacing: "0.02em",
};

const kbdStyle = {
  fontFamily: "monospace",
  background: "var(--mui-palette-action-hover)",
  color: "var(--mui-palette-text-secondary)",
  padding: "1px 5px",
  borderRadius: 3,
  fontSize: 11,
};

// ─── Shared sub-components ────────────────────────────────────────────────────

const SearchBar = ({
  value,
  onChange,
  onClear,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}) => (
  <Box
    sx={{ p: "16px 24px", borderBottom: "1px solid", borderColor: "divider" }}
  >
    <TextField
      autoFocus
      fullWidth
      placeholder="Search documentation..."
      value={value}
      onChange={onChange}
      variant="standard"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start" sx={{ mr: 2 }}>
            <SearchIcon sx={{ fontSize: 24, color: "primary.main" }} />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton
              size="small"
              onClick={onClear}
              sx={{ bgcolor: "action.hover" }}
            >
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </InputAdornment>
        ) : (
          <InputAdornment position="end">
            <kbd style={{ ...kbdStyle, fontSize: "12px", padding: "2px 6px" }}>
              Esc
            </kbd>
          </InputAdornment>
        ),
        sx: {
          fontSize: "1.1rem",
          fontWeight: 400,
          color: "text.primary",
        },
      }}
    />
  </Box>
);

const EmptyState = ({ query }: { query: string }) => (
  <Box sx={{ py: 5, textAlign: "center" }}>
    <SearchIcon sx={{ fontSize: 36, color: "text.disabled", mb: 1 }} />
    <Typography variant="body2" color="text.secondary">
      No results for `&quot;`{query}`&quot;`
    </Typography>
    <Typography variant="caption" color="text.disabled">
      Try different keywords
    </Typography>
  </Box>
);

const Footer = () => (
  <>
    <Divider />
    <Box sx={{ px: 2, py: 1, bgcolor: "background.default" }}>
      <Typography variant="caption" color="text.disabled">
        <kbd style={kbdStyle}>↑↓</kbd> navigate &nbsp;
        <kbd style={kbdStyle}>↵</kbd> select &nbsp;
        <kbd style={kbdStyle}>Esc</kbd> close
      </Typography>
    </Box>
  </>
);

// ─── Variant: split-text ──────────────────────────────────────────────────────

const ItemButton = React.forwardRef<
  HTMLDivElement,
  { isSelected: boolean; onClick: () => void; children: React.ReactNode }
>(({ isSelected, onClick, children }, ref) => (
  <ListItemButton
    ref={ref}
    selected={isSelected}
    onClick={onClick}
    sx={{
      mx: "8px",
      px: "10px",
      py: "6px",
      borderRadius: "8px",
      fontSize: "13px",
      fontWeight: 400,
      color: "text.primary",
      borderLeft: "none",
      borderColor: isSelected ? "primary.main" : "transparent",
      bgcolor: isSelected ? "action.selected" : "transparent",
      "&:hover": {
        bgcolor: "action.hover",
      },
      "&.Mui-selected": {
        bgcolor: "action.selected",
        "&:hover": {
          bgcolor: "action.hover",
        },
      },
    }}
  >
    {children}
  </ListItemButton>
));

ItemButton.displayName = "ItemButton";

interface VariantProps {
  sections: SearchSection[];
  selectedIndex: number;
  onNavigate: (path: string) => void;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
const SplitText = ({
  sections,
  selectedIndex,
  onNavigate,
  itemRefs,
}: VariantProps) => {
  let globalIdx = 0;
  return (
    <Box
      sx={{
        overflowY: "auto",
        flex: 1,
        pb: 1,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#D3D6E2", // soft indigo — matches your #F0F4FF blue theme
          borderRadius: "999px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#D3D6E2", // slightly deeper on hover
        },
      }}
    >
      {sections.map((sec: SearchSection, secIdx: number) => (
        <Box key={sec.label}>
          <Typography sx={sectionLabelSx}>{sec.label}</Typography>
          <List disablePadding>
            {sec.items.map((item: SearchItem) => {
              const idx = globalIdx++;
              return (
                <ItemButton
                  key={item.path}
                  ref={(el: HTMLDivElement | null) => {
                    itemRefs.current[idx] = el;
                  }}
                  isSelected={idx === selectedIndex}
                  onClick={() => onNavigate(item.path)}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    {item.title}
                  </Typography>
                </ItemButton>
              );
            })}
          </List>
          {secIdx < sections.length - 1 && <Divider sx={{ mt: "6px" }} />}
        </Box>
      ))}
    </Box>
  );
};

// ─── Variant: split-icons ─────────────────────────────────────────────────────

const SplitIcons = ({
  sections,
  selectedIndex,
  onNavigate,
  itemRefs,
}: VariantProps) => {
  let globalIdx = 0;
  return (
    <Box
      sx={{
        overflowY: "auto",
        flex: 1,
        pb: 1,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#D3D6E2",
          borderRadius: "999px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#D3D6E2",
        },
      }}
    >
      {sections.map((sec: SearchSection, secIdx: number) => (
        <Box key={sec.label}>
          <Typography sx={sectionLabelSx}>{sec.label}</Typography>
          <List disablePadding>
            {sec.items.map((item: SearchItem) => {
              const idx = globalIdx++;
              return (
                <ItemButton
                  key={item.path}
                  ref={(el: HTMLDivElement | null) => {
                    itemRefs.current[idx] = el;
                  }}
                  isSelected={idx === selectedIndex}
                  onClick={() => onNavigate(item.path)}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: 14,
                        color: "text.secondary",
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </ItemButton>
              );
            })}
          </List>
          {secIdx < sections.length - 1 && <Divider sx={{ mt: "6px" }} />}
        </Box>
      ))}
    </Box>
  );
};

// ─── Variant: flat-icons ──────────────────────────────────────────────────────

const FlatIcons = ({
  sections,
  selectedIndex,
  onNavigate,
  itemRefs,
}: VariantProps) => {
  let globalIdx = 0;
  return (
    <Box
      sx={{
        overflowY: "auto",
        flex: 1,
        pb: 1,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#D3D6E2",
          borderRadius: "999px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#D3D6E2",
        },
      }}
    >
      {sections.map((sec: SearchSection) => (
        <Box key={sec.label}>
          <Typography sx={sectionLabelSx}>{sec.label}</Typography>
          <List disablePadding>
            {sec.items.map((item: SearchItem) => {
              const idx = globalIdx++;
              return (
                <ItemButton
                  key={item.path}
                  ref={(el: HTMLDivElement | null) => {
                    itemRefs.current[idx] = el;
                  }}
                  isSelected={idx === selectedIndex}
                  onClick={() => onNavigate(item.path)}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Box
                      sx={{
                        color: "text.secondary",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </ItemButton>
              );
            })}
          </List>
        </Box>
      ))}
    </Box>
  );
};

// ─── Variant: flat-text ───────────────────────────────────────────────────────

const FlatText = ({
  sections,
  selectedIndex,
  onNavigate,
  itemRefs,
}: VariantProps) => {
  let globalIdx = 0;
  return (
    <Box
      sx={{
        overflowY: "auto",
        flex: 1,
        pb: 1,
        pt: "4px",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#D3D6E2",
          borderRadius: "999px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#D3D6E2",
        },
      }}
    >
      <List disablePadding>
        {sections.flatMap((sec: SearchSection) =>
          sec.items.map((item: SearchItem) => {
            const idx = globalIdx++;
            return (
              <ItemButton
                key={item.path}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[idx] = el;
                }}
                isSelected={idx === selectedIndex}
                onClick={() => onNavigate(item.path)}
              >
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  {item.title}
                </Typography>
              </ItemButton>
            );
          }),
        )}
      </List>
    </Box>
  );
};

// ─── Variant map ──────────────────────────────────────────────────────────────

const VARIANT_MAP: Record<string, React.FC<VariantProps>> = {
  "split-text": SplitText,
  "split-icons": SplitIcons,
  "flat-icons": FlatIcons,
  "flat-text": FlatText,
};

export const SearchModal = ({
  open,
  onClose,
  variant = "split-text",
}: {
  open: boolean;
  onClose: () => void;
  variant?: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [prevSearchQuery, setPrevSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevOpen, setPrevOpen] = useState(open);
  const router = useRouter();

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }

  if (searchQuery !== prevSearchQuery) {
    setPrevSearchQuery(searchQuery);
    setSelectedIndex(0);
  }

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const VariantComponent = VARIANT_MAP[variant] ?? SplitText;

  const filteredSections = useMemo(
    () => filterSections(searchSections, searchQuery),
    [searchQuery],
  );

  const flatItems = useMemo(
    () => flattenSections(filteredSections),
    [filteredSections],
  );

  const navigate = (path: string) => {
    router.push(path);
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((p) => Math.min(p + 1, flatItems.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((p) => Math.max(p - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (flatItems[selectedIndex]) navigate(flatItems[selectedIndex].path);
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, selectedIndex, flatItems]);

  useEffect(() => {
    if (!open) return;

    itemRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [selectedIndex, open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "14px",
          maxHeight: "70vh",
          bgcolor: "background.paper",
          backgroundImage: "none",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <SearchBar
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          onClear={() => setSearchQuery("")}
        />

        {flatItems.length === 0 && searchQuery ? (
          <EmptyState query={searchQuery} />
        ) : (
          <VariantComponent
            sections={filteredSections}
            selectedIndex={selectedIndex}
            onNavigate={navigate}
            itemRefs={itemRefs}
          />
        )}

        <Footer />
      </DialogContent>
    </Dialog>
  );
};
