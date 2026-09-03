"use client";
import React, { useState, useEffect } from "react";
import { Box, InputBase, IconButton, alpha, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export interface SearchFilterProps {
  onSearchButtonClick: (val: string) => void;
  searchValue?: string;
  placeholder?: string;
  width?: string | number;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearchButtonClick,
  searchValue = "",
  placeholder = "Search...",
  width = "250px",
}) => {
  const theme = useTheme();
  const [localValue, setLocalValue] = useState(searchValue);

  useEffect(() => {
    setLocalValue(searchValue);
  }, [searchValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchButtonClick(localValue);
    }
  };

  const handleClear = () => {
    setLocalValue("");
    onSearchButtonClick("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        bgcolor: theme.palette.background.paper,
        px: 1,
        height: "40px",
        width: width,
        transition: "all 0.2s ease",
        "&:focus-within": {
          borderColor: theme.palette.primary.main,
          boxShadow: `${alpha(theme.palette.primary.main, 0.1)} 0 0 0 3px`,
        },
      }}
    >
      <SearchIcon sx={{ color: "text.secondary", fontSize: 20, mr: 1 }} />
      <InputBase
        value={localValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontSize: "13px",
          color: "text.primary",
          "& input::placeholder": {
            color: "text.disabled",
            opacity: 1,
          },
        }}
      />
      {localValue && (
        <IconButton size="small" onClick={handleClear} sx={{ p: 0.5 }}>
          <ClearIcon sx={{ fontSize: 16, color: "text.secondary" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default SearchFilter;
