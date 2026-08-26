"use client";
import React, { useState, useRef, useCallback, Children } from "react";
import {
  Box,
  Paper,
  ClickAwayListener,
  Popper,
  Typography,
} from "@mui/material";
import { TextField, TextFieldProps } from "../TextField";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const SEARCH_THRESHOLD = 2;

/* ─── Custom scrollbar styles injected once ─── */
const scrollbarStyles = `
  .custom-select-menu::-webkit-scrollbar {
    width: 5px;
  }
  .custom-select-menu::-webkit-scrollbar-track {
    background: transparent;
    margin: 6px 0;
  }
  .custom-select-menu::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 35px;
    max-height: 54px;
    min-height: 54px;
  }
  .custom-select-menu::-webkit-scrollbar-thumb:hover {
    background: #BDBDBD;
  }
`;

if (typeof document !== "undefined") {
  const styleTag = document.getElementById("custom-select-scrollbar");
  if (!styleTag) {
    const s = document.createElement("style");
    s.id = "custom-select-scrollbar";
    s.textContent = scrollbarStyles;
    document.head.appendChild(s);
  }
}

/* ─── Helper ─── */
const getFocusable = () =>
  Array.from(
    document.querySelectorAll(
      'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
    ),
  ).filter((el: Element & { offsetParent?: Element | null }) => el.offsetParent !== null);

export interface SearchableSelectProps extends Omit<TextFieldProps, 'onChange'> {
  children?: React.ReactNode;
  bgColor?: string;
  label?: string;
  value?: string | number;
  onChange?: (e: { target: { value: string | number } }) => void;
  disabled?: boolean;
}

export interface SearchableSelectOptionProps {
  value?: string | number;
  children?: React.ReactNode;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const SearchableSelect = ({
  children,
  bgColor,
  label,
  onChange,
  value,
  disabled,
  ...props
}: SearchableSelectProps) => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const anchorRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const childArray = Children.toArray(children).filter(Boolean) as React.ReactElement<SearchableSelectOptionProps>[];
  const showSearch = childArray.length > SEARCH_THRESHOLD;

  // Build a map: value -> { label, subtitle, icon }
  const labelMap: Record<string | number, { label: string; subtitle: string; icon: React.ReactNode }> = {};
  childArray.forEach((child) => {
    if (child.props?.value !== undefined) {
      labelMap[child.props.value as string | number] = {
        label: child.props?.children?.toString() || "",
        subtitle: child.props?.subtitle || "",
        icon: child.props?.icon || null,
      };
    }
  });

  const filteredChildren =
    showSearch && inputValue
      ? childArray.filter((child) => {
          const text = child.props?.children?.toString()?.toLowerCase() || "";
          const sub = child.props?.subtitle?.toLowerCase() || "";
          const q = inputValue.toLowerCase();
          return text.includes(q) || sub.includes(q);
        })
      : childArray;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setDisplayValue(e.target.value);
    setOpen(true);
    setFocusedIndex(-1);
  };

  const handleInputFocus = () => {
    if (!disabled) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFocusedIndex(-1);
    if (value !== undefined && labelMap[value]) {
      setDisplayValue(labelMap[value].label);
      setInputValue("");
    } else {
      setInputValue("");
    }
  };

  const handleSelect = (child: React.ReactElement<SearchableSelectOptionProps>) => {
    const selectedValue = child.props?.value;
    const selectedLabel = child.props?.children?.toString() || "";

    setDisplayValue(selectedLabel);
    setInputValue("");
    setOpen(false);
    setFocusedIndex(-1);

    if (onChange && selectedValue !== undefined) onChange({ target: { value: selectedValue } });

    // Advance focus to next field
    setTimeout(() => {
      const focusable = getFocusable();
      const current = anchorRef.current?.querySelector("input");
      const idx = focusable.findIndex((el) => el === current);
      if (idx !== -1 && focusable[idx + 1]) (focusable[idx + 1] as HTMLElement).focus();
    }, 0);
  };

  const focusItem = (index: number) => {
    setFocusedIndex(index);
    menuItemRefs.current[index]?.focus();
  };

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter") setOpen(true);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filteredChildren.length > 0) focusItem(filteredChildren.length - 1);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [open, filteredChildren]
  );

  const handleItemKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number, child: React.ReactElement<SearchableSelectOptionProps>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusItem((index + 1) % filteredChildren.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index === 0) {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        } else {
          focusItem(index - 1);
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const next = index + 1;
        if (next < filteredChildren.length) {
          focusItem(next);
        } else {
          setFocusedIndex(-1);
          anchorRef.current?.querySelector("input")?.focus();
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(child);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [filteredChildren, onChange]
  );

  // What to show in the input text field
  const shownValue = open
    ? inputValue !== ""
      ? inputValue
      : displayValue
    : displayValue;

  // Icon of currently selected value (shown inside the input)
  const selectedIcon =
    value !== undefined && labelMap[value]?.icon ? labelMap[value].icon : null;

  // When an icon is selected and we're NOT typing, shift input text to the right
  const hasIcon = !!selectedIcon && !open;

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box ref={wrapperRef} sx={{ display: "contents" }}>
        <Box
          ref={anchorRef}
          sx={{ position: "relative", display: "inline-flex", width: "100%" }}
        >
          {/* Selected icon shown inside the input field, left side */}
          {hasIcon && (
            <Box
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
                mt: label ? "6px" : 0,
              }}
            >
              {selectedIcon}
            </Box>
          )}

          <TextField
            fullWidth
            size="small"
            label={label}
            value={shownValue}
            onChange={handleInputChange as any}
            onFocus={handleInputFocus}
            onKeyDown={handleInputKeyDown}
            autoComplete="off"
            disabled={disabled}
            bgColor={bgColor}
            {...props}
            InputProps={{
              sx: {
                ...(hasIcon && {
                  "& .VortexUIFilledInput-input": {
                    paddingLeft: "32px !important",
                  }
                }),
              }
            }}
          />

          {/* Chevron */}
          <Box
            onClick={(e) => {
              if (disabled) return;
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: open
                ? "translateY(-50%) rotate(180deg)"
                : "translateY(-50%) rotate(0deg)",
              transition: "transform 0.2s",
              cursor: disabled ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              color: "rgba(0,0,0,0.54)",
            }}
          >
            <KeyboardArrowDown />
          </Box>
        </Box>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          style={{
            zIndex: 1300,
            width: anchorRef.current?.offsetWidth,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              mt: 0.5,
              borderRadius: "10px",
              border: "1px solid #D6DEEA",
              maxHeight: 258,
              overflowY: "auto",
              bgcolor: "#FFFFFF",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)",
            }}
            className="custom-select-menu"
          >
            {filteredChildren.length > 0 ? (
              filteredChildren.map((child, index) => {
                const primaryLabel = child.props?.children?.toString() || "";
                const subtitle = child.props?.subtitle || "";
                const icon = child.props?.icon || null;
                const isFocused = focusedIndex === index;
                const isSelected = value === child.props?.value;

                return (
                  <Box
                    key={child.key ?? index}
                    ref={(el: HTMLDivElement | null) => {
                      if (el) menuItemRefs.current[index] = el;
                    }}
                    tabIndex={isFocused ? 0 : -1}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(child)}
                    onKeyDown={(e) => handleItemKeyDown(e, index, child)}
                    sx={{
                      px: 1.5,
                      py: 0.75,
                      cursor: "pointer",
                      outline: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: isSelected
                        ? "rgba(25, 118, 210, 0.06)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(25, 118, 210, 0.06)",
                      },
                      "&:focus": {
                        backgroundColor: "rgba(25, 118, 210, 0.08)",
                      },
                    }}
                  >
                    {/* Icon (if provided) */}
                    {icon && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          width: 24,
                          justifyContent: "center",
                        }}
                      >
                        {icon}
                      </Box>
                    )}

                    {/* Label + subtitle column */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#313952",
                          lineHeight: 1.5,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {primaryLabel}
                      </Typography>

                      {subtitle && (
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            color: "#6F778F",
                            lineHeight: 1.5,
                            mt: 0.2,
                          }}
                        >
                          {subtitle}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                );
              })
            ) : (
              <Box sx={{ px: 2, py: 1.5, fontSize: "13px", color: "#9CA3AF" }}>
                No results found
              </Box>
            )}
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};
