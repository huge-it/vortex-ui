"use client";
import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

export interface ColumnHeaderMenuProps {
  colId: string | number;
  isFirstColumn?: boolean;
  isPinned?: boolean;
  filterOptions?: any[];
  filterValues?: any[];
  onFilter?: (colId: string | number, vals: any[]) => void;
  onHide?: (colId: string | number) => void;
  onPin?: (colId: string | number, isPinning: boolean) => void;
}

export const ColumnHeaderMenu: React.FC<ColumnHeaderMenuProps> = ({
  colId,
  isFirstColumn,
  isPinned = false,
  filterOptions = [],
  filterValues = [],
  onFilter,
  onHide,
  onPin,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePinToggle = () => {
    onPin?.(colId, !isPinned);
    handleClose();
  };

  const handleHide = () => {
    onHide?.(colId);
    handleClose();
  };

  const handleFilterToggle = (val: any) => {
    const isSelected = filterValues.includes(val);
    const nextVals = isSelected
      ? filterValues.filter((v) => v !== val)
      : [...filterValues, val];
    onFilter?.(colId, nextVals);
  };

  return (
    <Box sx={{ ml: "auto", flexShrink: 0 }} className={`column-header-menu ${open ? 'menu-open' : ''}`}>
      <IconButton
        size="small"
        onClick={handleClick}
        sx={{
          p: 0.5,
          color: "text.secondary",
          "&:hover": { color: "text.primary" },
        }}
      >
        <MoreVertIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
        PaperProps={{
          sx: {
            minWidth: 160,
            borderRadius: "8px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
          },
        }}
      >
        {onPin && !isFirstColumn && (
          <MenuItem onClick={handlePinToggle} sx={{ fontSize: "13px" }}>
            <ListItemIcon>
              {isPinned ? (
                <PushPinIcon sx={{ fontSize: 16 }} color="primary" />
              ) : (
                <PushPinOutlinedIcon sx={{ fontSize: 16 }} />
              )}
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "13px" }}
              primary={isPinned ? "Unpin Column" : "Pin Column"}
            />
          </MenuItem>
        )}

        {onHide && (
          <MenuItem onClick={handleHide} sx={{ fontSize: "13px" }}>
            <ListItemIcon>
              <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "13px" }}
              primary="Hide Column"
            />
          </MenuItem>
        )}

        {filterOptions.length > 0 && (
          <>
            {(onPin || onHide) && <Divider sx={{ my: 0.5 }} />}
            <Box sx={{ px: 2, py: 0.5, fontSize: "11px", fontWeight: 600, color: "text.secondary", textTransform: "uppercase" }}>
              Filter
            </Box>
            {filterOptions.map((option, idx) => {
              const val = typeof option === "object" ? option.value : option;
              const label = typeof option === "object" ? option.label : option;
              const checked = filterValues.includes(val);

              return (
                <MenuItem
                  key={idx}
                  onClick={() => handleFilterToggle(val)}
                  sx={{ fontSize: "13px" }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Checkbox size="small" checked={checked} sx={{ p: 0 }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "13px" }}
                    primary={label}
                  />
                </MenuItem>
              );
            })}
          </>
        )}
      </Menu>
    </Box>
  );
};

export default ColumnHeaderMenu;
