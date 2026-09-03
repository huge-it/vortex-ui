"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  FormControlLabel,
  ClickAwayListener,
  Box,
  Typography,
} from "@mui/material";
import { Button, IconButton } from "../Button";
import { TextField } from "../TextField";
import FilterListIcon from "@mui/icons-material/FilterList";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import { StyledCheckbox } from "./StyledCheckbox";
import { useTheme } from "@mui/material";

export interface CustomFilterDropdownProps {
  label?: string;
  icon?: React.ReactNode;
  options?: Array<{ label?: string; value?: string | number } | any>;
  selectedValues?: Array<string | number>;
  onChange: (values: Array<string | number>) => void;
  multiSelect?: boolean;
  labelKey?: string;
  valueKey?: string;
  buttonWidth?: string | number;
  dropdownWidth?: string | number;
  height?: string | number;
  showSearch?: boolean;
  onReset?: () => void;
}

export const CustomFilterDropdown = ({
  label = "Filter",
  icon = <FilterListIcon sx={{ fontSize: 18 }} />,
  options = [],
  selectedValues = [],
  onChange,
  multiSelect = true,
  labelKey = "label",
  valueKey = "value",
  buttonWidth = "auto",
  dropdownWidth = "250px",
  height = "240px",
  showSearch = true,
  onReset,
}: CustomFilterDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Array<string | number>>(
    selectedValues || [],
  );
  const [searchText, setSearchText] = useState("");
  const [hoverTooltipVisible, setHoverTooltipVisible] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const theme = useTheme();

  useEffect(() => {
    setSelected(selectedValues || []);
  }, [selectedValues]);

  useEffect(() => {
    if (!open) setSearchText("");
  }, [open]);

  const safeSelected = selected || [];

  const normalised = options.map((opt: any) => {
    if (typeof opt === "object" && opt !== null) {
      return {
        label: opt[labelKey] ?? opt.label ?? String(opt),
        value: opt[valueKey] ?? opt.value ?? opt,
      };
    }
    return {
      label: String(opt),
      value: opt,
    };
  });

  const filtered = searchText.trim()
    ? normalised.filter((o) =>
        o.label.toLowerCase().includes(searchText.toLowerCase()),
      )
    : normalised;

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setHoverTooltipVisible(false);
  };
  const handleClose = () => setOpen(false);

  const handleCheckboxChange = (value: string | number) => {
    let newSelected;
    if (multiSelect) {
      newSelected = safeSelected.includes(value)
        ? safeSelected.filter((v) => v !== value)
        : [...safeSelected, value];
    } else {
      newSelected = [value];
    }
    setSelected(newSelected);
    onChange(newSelected);
    if (!multiSelect) setOpen(false);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected([]);
    onChange([]);
    setSearchText("");
    setHoverTooltipVisible(false);
    if (onReset) onReset();
  };

  const getButtonLabel = () => {
    const count = safeSelected.length;
    if (count === 0) return label;
    return `${label} (${count})`;
  };

  const selectedLabels = safeSelected.map((val) => {
    const opt = normalised.find((o) => o.value === val);
    return opt ? opt.label : val;
  });

  const handleMouseEnter = () => {
    if (safeSelected.length > 0 && !open) {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setHoverTooltipVisible(true);
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoverTooltipVisible(false);
    }, 150);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        handleClose();
        setHoverTooltipVisible(false);
      }}
    >
      <Box
        sx={{ position: "relative", display: "inline-block" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          onClick={handleToggle}
          variant="outlined"
          icon={
            safeSelected.length > 0 ? (
              <FilterListIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
            ) : (
              icon
            )
          }
          iconPosition="start"
          sx={{
            minWidth: buttonWidth,
            height: "40px",
            fontSize: "14px",
            fontWeight: 400,
            color: safeSelected.length > 0 ? theme.palette.primary.main : theme.palette.text.primary,
            borderColor: safeSelected.length > 0 ? theme.palette.primary.main : theme.palette.divider,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            "&:hover": {
              borderColor: safeSelected.length > 0 ? theme.palette.primary.main : theme.palette.action.hover,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          {getButtonLabel()}
        </Button>

        {hoverTooltipVisible && safeSelected.length > 0 && !open && (
          <Paper
            elevation={0}
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              setHoverTooltipVisible(true);
            }}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              zIndex: 1400,
              width: dropdownWidth,
              borderRadius: "10px",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)",
              border: `1px solid ${theme.palette.divider}`,
              overflow: "hidden",
              px: "10px",
              pt: "10px",
              pb: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 0.5,
              }}
            >
              <Box
                sx={{
                  pb: 0.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <FilterListIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: theme.palette.text.secondary }}
                >
                  Filter Values
                </Typography>
              </Box>
              <IconButton
                size="sm"
                variant="ghost"
                onClick={handleReset}
                sx={{ width: 24, height: 24, minWidth: 24 }}
                title="Clear filters"
                icon={<RefreshIcon sx={{ fontSize: 16 }} />}
              />
            </Box>

            <Box sx={{ px: 1 }}>
              {selectedLabels.map((lbl, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "13px",
                    color: theme.palette.text.primary,
                    py: "5px",
                    fontWeight: 400,
                  }}
                >
                  {lbl}
                </Typography>
              ))}
            </Box>
          </Paper>
        )}

        {open && (
          <Paper
            elevation={0}
            sx={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              zIndex: 1300,
              width: dropdownWidth,
              borderRadius: "12px",
              boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)",
              border: `1px solid ${theme.palette.divider}`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              p: "12px",
            }}
          >
            <Box
              sx={{ pb: 0.5, display: "flex", alignItems: "center", gap: 1 }}
            >
              <FilterListIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: theme.palette.text.secondary }}
              >
                Filter
              </Typography>
            </Box>

            {showSearch && (
              <Box
                sx={{ py: 1, display: "flex", alignItems: "center", gap: 1 }}
              >
                <TextField
                  autoFocus
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ fontSize: 18, mr: 1, color: theme.palette.text.secondary }} />,
                    sx: { height: '36px', borderRadius: '8px' }
                  }}
                  sx={{ flex: 1, '& .VortexUIFilledInput-input': { fontSize: '14px', color: theme.palette.text.primary } }}
                />
                <IconButton
                  size="sm"
                  variant="ghost"
                  onClick={handleReset}
                  sx={{ width: 24, height: 24, minWidth: 24 }}
                  icon={<RefreshIcon sx={{ fontSize: 18 }} />}
                />
              </Box>
            )}

            <Box
              sx={{
                overflowY: "auto",
                maxHeight: height,
                "&::-webkit-scrollbar": { width: "5px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#D9D9D9",
                  borderRadius: "10px",
                },
              }}
            >
              {filtered.length === 0 ? (
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#667085",
                    textAlign: "center",
                    py: 2,
                    fontWeight: 400,
                  }}
                >
                  No results found
                </Typography>
              ) : (
                filtered.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    control={
                      <StyledCheckbox
                        checked={safeSelected.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        variant="sm"
                        sx={{ ml: 0 }}
                      />
                    }
                    label={option.label}
                    sx={{
                      width: "100%",
                      margin: 0,
                      borderRadius: "6px",
                      transition: "0.2s",
                      py: 0.5,
                      gap: 0.5,
                      "&:hover": { backgroundColor: "#F0F4FF" },
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        color: "#313952",
                        fontWeight: 400,
                        width: "100%",
                        ml: 1,
                      },
                    }}
                  />
                ))
              )}
            </Box>
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
};
