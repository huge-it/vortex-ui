"use client";

import React, {
  Children,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  ClickAwayListener,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { TextField } from "../TextField";
import { AutoPopulateProps } from "./AutoPopulate.types";

/* ─── Helper ─── */
const getFocusable = () =>
  Array.from(
    document.querySelectorAll(
      'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
    ),
  ).filter((el) => (el as HTMLElement).offsetParent !== null);

export const AutoPopulate: React.FC<AutoPopulateProps> = ({
  children,
  bgColor,
  label,
  onChange,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const anchorRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);

  const childArray = Children.toArray(children).filter(
    Boolean,
  ) as React.ReactElement<any>[];

  const labelMap: Record<string, { label: string; subtitle: string }> = {};
  childArray.forEach((child) => {
    if (child.props?.value !== undefined) {
      labelMap[child.props.value] = {
        label: child.props?.children?.toString() || "",
        subtitle: child.props?.subtitle || "",
      };
    }
  });

  const filteredChildren = inputValue
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
    hasInteractedRef.current = true;
  };

  const handleInputFocus = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFocusedIndex(-1);

    if (inputValue === "" && hasInteractedRef.current) {
      setDisplayValue("");
      if (value !== undefined && value !== "" && onChange) {
        onChange({ target: { value: "" } });
      }
    } else if (value !== undefined && labelMap[value]) {
      setDisplayValue(labelMap[value].label);
    } else {
      setDisplayValue("");
    }

    setInputValue("");
    hasInteractedRef.current = false;
  };

  const handleSelect = (child: React.ReactElement<any>) => {
    const selectedValue = child.props?.value;
    const selectedLabel = child.props?.children?.toString() || "";

    setDisplayValue(selectedLabel);
    setInputValue("");
    setOpen(false);
    setFocusedIndex(-1);
    hasInteractedRef.current = false;

    if (onChange) onChange({ target: { value: selectedValue } });

    setTimeout(() => {
      const focusable = getFocusable();
      const current = anchorRef.current?.querySelector("input");
      const idx = focusable.findIndex((el) => el === current);
      if (idx !== -1 && focusable[idx + 1])
        (focusable[idx + 1] as HTMLElement).focus();
    }, 0);
  };

  const focusItem = (index: number) => {
    setFocusedIndex(index);
    menuItemRefs.current[index]?.focus();
  };

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    [open, filteredChildren],
  );

  const handleItemKeyDown = useCallback(
    (
      e: React.KeyboardEvent<HTMLDivElement>,
      index: number,
      child: React.ReactElement<any>,
    ) => {
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
    [filteredChildren, onChange],
  );

  const shownValue = open
    ? inputValue !== ""
      ? inputValue
      : displayValue
    : displayValue;

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box ref={wrapperRef} sx={{ display: "contents" }}>
        <Box
          ref={anchorRef}
          sx={{ position: "relative", display: "inline-flex", width: "100%" }}
        >
          <TextField
            bgColor={bgColor}
            label={label}
            value={shownValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleInputKeyDown as any}
            autoComplete="off"
            fullWidth
            {...props}
          />

          {/* Chevron */}
          <Box
            onClick={(e) => {
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
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "action.active",
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
              border: "1px solid",
              borderColor: "divider",
              maxHeight: 258,
              overflowY: "auto",
              bgcolor: "background.paper",
              boxShadow: 3,
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                my: 0.75,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "divider",
                borderRadius: "35px",
                minHeight: "54px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "action.active",
              },
            }}
            className="custom-select-menu"
          >
            {filteredChildren.length > 0 ? (
              filteredChildren.map((child, index) => {
                const primaryLabel = child.props?.children?.toString() || "";
                const subtitle = child.props?.subtitle || "";
                const isFocused = focusedIndex === index;

                return (
                  <Box
                    key={child.key ?? index}
                    ref={(el: HTMLDivElement | null) => {
                      menuItemRefs.current[index] = el;
                    }}
                    tabIndex={isFocused ? 0 : -1}
                    role="option"
                    aria-selected={value === child.props?.value}
                    onClick={() => handleSelect(child)}
                    onKeyDown={(e) => handleItemKeyDown(e, index, child)}
                    sx={{
                      px: 1.8,
                      py: 1,
                      cursor: "pointer",
                      outline: "none",
                      pt: index === 0 ? 1.2 : 1,
                      pb: index === filteredChildren.length - 1 ? 1.2 : 1,
                      backgroundColor:
                        value === child.props?.value
                          ? "action.selected"
                          : "transparent",
                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                      "&:focus": {
                        backgroundColor: "action.focus",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "text.primary",
                        lineHeight: 1.5,
                      }}
                    >
                      {primaryLabel}
                    </Typography>

                    {subtitle && (
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: 400,
                          color: "text.secondary",
                          lineHeight: 1.5,
                          mt: 0.2,
                        }}
                      >
                        {subtitle}
                      </Typography>
                    )}
                  </Box>
                );
              })
            ) : (
              <Box sx={{ px: 2, py: 1.5, fontSize: "13px", color: "text.disabled" }}>
                No results found
              </Box>
            )}
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default AutoPopulate;
