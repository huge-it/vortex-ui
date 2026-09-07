"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  FormControlLabel,
  ClickAwayListener,
  Box,
  Typography,
  Popover,
  Popper,
} from "@mui/material";
import { Button, IconButton } from "../Button";
import { TextField } from "../TextField";
import FilterListIcon from "@mui/icons-material/FilterList";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import { StyledCheckbox } from "../DataTable";

export interface FilterButtonProps {
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

export const FilterButton = ({
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
}: FilterButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
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

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
      setHoverTooltipVisible(false);
    }
  };
  const handleClose = () => setAnchorEl(null);

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
    if (!multiSelect) setAnchorEl(null);
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
          ref={buttonRef}
          onClick={handleToggle}
          variant="outlined"
          icon={
            safeSelected.length > 0 ? (
              <FilterListIcon
                sx={{ fontSize: 18, color: theme.palette.primary.main }}
              />
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
            color:
              safeSelected.length > 0
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            borderColor:
              safeSelected.length > 0
                ? theme.palette.primary.main
                : theme.palette.divider,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            "&:hover": {
              borderColor:
                safeSelected.length > 0
                  ? theme.palette.primary.main
                  : theme.palette.action.hover,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          {getButtonLabel()}
        </Button>

        <Popper
          open={hoverTooltipVisible && safeSelected.length > 0 && !open}
          anchorEl={buttonRef.current}
          placement="bottom-start"
          style={{ zIndex: 1400 }}
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
          ]}
        >
          <Paper
            elevation={0}
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              setHoverTooltipVisible(true);
            }}
            onMouseLeave={handleMouseLeave}
            sx={{
              width: "max-content",
              minWidth: "140px",
              maxWidth: dropdownWidth,
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: theme.palette.background.paper,
              p: 1.5,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
              {selectedLabels.map((lbl, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "13px",
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  }}
                >
                  {lbl}
                </Typography>
              ))}
            </Box>
            <IconButton
              size="sm"
              variant="ghost"
              onClick={handleReset}
              sx={{
                width: 20,
                height: 20,
                minWidth: 20,
                opacity: 0.6,
                "&:hover": { opacity: 1, bgcolor: theme.palette.action.hover },
              }}
              title="Clear filters"
              icon={<RefreshIcon sx={{ fontSize: 14 }} />}
            />
          </Paper>
        </Popper>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                width: dropdownWidth,
                borderRadius: "12px",
                boxShadow: "0px 3px 4.6px 0px rgba(168,168,168,0.5)",
                border: `1px solid ${theme.palette.divider}`,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                p: "12px",
                mt: 0.5,
              },
            },
          }}
        >
          <Box sx={{ pb: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
            <FilterListIcon
              sx={{ fontSize: 18, color: theme.palette.text.secondary }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: theme.palette.text.secondary,
              }}
            >
              Filter
            </Typography>
          </Box>

          {showSearch && (
            <Box sx={{ py: 1, display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                autoFocus
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <SearchIcon
                      sx={{
                        fontSize: 18,
                        mr: 1,
                        color: theme.palette.text.secondary,
                      }}
                    />
                  ),
                  sx: { height: "36px", borderRadius: "8px" },
                }}
                sx={{
                  flex: 1,
                  "& .VortexUIFilledInput-input": {
                    fontSize: "14px",
                    color: theme.palette.text.primary,
                  },
                }}
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
                backgroundColor: theme.palette.divider,
                borderRadius: "10px",
              },
            }}
          >
            {filtered.length === 0 ? (
              <Typography
                sx={{
                  fontSize: "13px",
                  color: theme.palette.text.secondary,
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
                      sx={{ pl: 1, ml: 0 }}
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
                    "&:hover": { backgroundColor: theme.palette.action.hover },
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      color: theme.palette.text.primary,
                      fontWeight: 400,
                      width: "100%",
                      ml: 1,
                    },
                  }}
                />
              ))
            )}
          </Box>
        </Popover>
      </Box>
    </ClickAwayListener>
  );
};

export const CustomFilterDropdown = FilterButton;
