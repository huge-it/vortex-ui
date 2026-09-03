"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PushPinIcon from "@mui/icons-material/PushPin";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { alpha, Box, Tooltip, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import StyledCheckbox from "./StyledCheckbox";

export interface ColumnItem {
  id: string | number;
  label: string;
}
export interface TableToolbarProps {
  columns: ColumnItem[];
  visibleColumns?: (string | number)[];
  onVisibilityChange?: (colId: string | number, visible: boolean) => void;
  frozenColumnIds?: (string | number)[];
  onFrozenColumnsChange?: (ids: (string | number)[]) => void;
  onColumnReorder?: (colId: string | number, isPinning: boolean) => void;
  groupMode?: "compact" | "normal";
  onGroupModeChange?: (mode: "compact" | "normal") => void;
  disableColumnFreeze?: boolean;
}

// ─── Utility Hook: close dropdown on outside click ───────────────────────────

const useOutsideClick = (refs: React.RefObject<any>[], onClose: () => void) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const allOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(e.target as Node),
      );
      if (allOutside) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [refs, onClose]);
};

// ─── Toolbar Button ───────────────────────────────────────────────────────────

const ToolbarButton = ({
  icon,
  label,
  onClick,
  showChevron = false,
  active = false,
  isLast,
  isFirst,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  showChevron?: boolean;
  active?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const hoverBg = isDark ? alpha(theme.palette.primary.main, 0.16) : "#E8EEFF";
  const activeBg = isDark ? alpha(theme.palette.primary.main, 0.24) : "#DAE3FF";
  const borderColor = theme.palette.divider || "#D3D6E2";

  return (
    <Tooltip title={label} placement="top">
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          px: "11px",
          height: "40px",
          cursor: "pointer",
          borderRight: isLast ? "none" : `1px solid ${borderColor}`,
          backgroundColor: active ? hoverBg : "transparent",
          borderRadius: isFirst ? "9px 0 0 9px" : isLast ? "0 9px 9px 0" : "0",
          transition: "background-color 0.15s ease",
          "&:hover": { backgroundColor: hoverBg },
          "&:active": { backgroundColor: activeBg },
          userSelect: "none",
          color: theme.palette.text.primary,
        }}
      >
        {icon}
        {showChevron && (
          <KeyboardArrowDownIcon
            sx={{
              width: 16,
              height: 16,
              marginLeft: "-4px",
              transition: "transform 0.15s ease",
              transform: active ? "rotate(180deg)" : "rotate(0deg)",
              color: theme.palette.text.secondary,
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
};

// ─── Groups Dropdown ──────────────────────────────────────────────────────────

const GroupsDropdown = ({
  groupMode,
  onGroupChange,
  anchorRef,
  onClose,
}: {
  groupMode: "compact" | "normal";
  onGroupChange: (mode: "compact" | "normal") => void;
  anchorRef: React.RefObject<any>;
  onClose: () => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick([dropdownRef, anchorRef], onClose);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const options = [
    { value: "compact" as const, label: "Compact", Icon: ViewCompactIcon },
    { value: "normal" as const, label: "Individual", Icon: ViewColumnIcon },
  ];

  const bgColor = theme.palette.background.paper;
  const borderColor = theme.palette.divider || "#D6DEEA";
  const hoverBg = isDark ? alpha(theme.palette.primary.main, 0.16) : "#F0F4FF";
  const selectedColor = theme.palette.primary.main || "#4772FF";
  const textColor = theme.palette.text.primary || "#313952";

  return (
    <Box
      ref={dropdownRef}
      sx={{
        position: "absolute",
        top: "calc(100% + 6px)",
        left: 0,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "10px",
        boxShadow: "0px 4px 8px 0px rgba(4, 5, 6, 0.075)",
        zIndex: 1300,
        minWidth: "145px",
        overflow: "hidden",
      }}
    >
      {options.map(({ value, label, Icon }) => {
        const isSelected = groupMode === value;
        return (
          <Box
            key={value}
            onClick={() => {
              onGroupChange(value);
              onClose();
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              px: "14px",
              py: "10px",
              cursor: "pointer",
              bgcolor: isSelected ? hoverBg : "transparent",
              "&:hover": { bgcolor: hoverBg },
              transition: "background-color 0.12s ease",
            }}
          >
            <Box
              sx={{
                color: isSelected
                  ? selectedColor
                  : theme.palette.text.secondary,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon fontSize="small" />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: isSelected ? 500 : 400,
                color: textColor,
              }}
            >
              {label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

// ─── Column Checkbox Dropdown (shared for Show/Hide and Pin) ──────────────────

const ColumnDropdown = ({
  columns,
  checkedColumns,
  onToggle,
  anchorRef,
  onClose,
  dropdownLabel,
}: {
  columns: ColumnItem[];
  checkedColumns: (string | number)[];
  onToggle: (id: string | number) => void;
  anchorRef: React.RefObject<any>;
  onClose: () => void;
  dropdownLabel?: string;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick([dropdownRef, anchorRef], onClose);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const bgColor = theme.palette.background.paper;
  const borderColor = theme.palette.divider || "#D6DEEA";
  const hoverBg = isDark ? alpha(theme.palette.primary.main, 0.16) : "#F0F5FF";
  const textColor = theme.palette.text.primary || "#313952";
  const headerColor = theme.palette.text.secondary;

  return (
    <Box
      ref={dropdownRef}
      sx={{
        position: "absolute",
        top: "calc(100% + 6px)",
        right: 0,
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        boxShadow: "0px 4px 8px 0px rgba(4, 5, 6, 0.075)",
        zIndex: 1300,
        minWidth: "175px",
        overflow: "hidden",
      }}
    >
      {dropdownLabel && (
        <Typography
          sx={{
            px: "14px",
            pt: "4px",
            pb: "4px",
            fontSize: "11px",
            fontWeight: 500,
            color: headerColor,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            borderBottom: `1px solid ${borderColor}`,
          }}
        >
          {dropdownLabel}
        </Typography>
      )}
      <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
        {columns.map((col, index) => {
          const isFirstColumn = index === 0;
          const isChecked = isFirstColumn
            ? true
            : checkedColumns.includes(col.id);
          const isDisabled = isFirstColumn;
          return (
            <Box
              key={col.id}
              onClick={() => !isDisabled && onToggle(col.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                px: "6px",
                py: "7px",
                cursor: isDisabled ? "not-allowed" : "pointer",
                "&:hover": {
                  backgroundColor: isDisabled ? "transparent" : hoverBg,
                },
                transition: "background-color 0.12s ease",
                opacity: isDisabled ? 0.5 : 1,
              }}
            >
              <StyledCheckbox
                checked={isChecked}
                disabled={isDisabled}
                variant="sm"
              />
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: textColor,
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export const TableToolbar: React.FC<TableToolbarProps> = ({
  columns = [],
  visibleColumns = [],
  onVisibilityChange,
  frozenColumnIds = [],
  onFrozenColumnsChange,
  groupMode = "compact",
  onGroupModeChange,
  onColumnReorder,
  disableColumnFreeze,
}) => {
  const [groupsOpen, setGroupsOpen] = useState(false);
  const [showHideOpen, setShowHideOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);

  const groupsBtnRef = useRef<HTMLDivElement>(null);
  const showHideBtnRef = useRef<HTMLDivElement>(null);
  const pinBtnRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const containerBg = isDark
    ? alpha(theme.palette.background.paper, 0.4)
    : "#F7F7FA";
  const borderColor = theme.palette.divider || "#D3D6E2";

  const handleToggleVisibility = (colId: string | number) => {
    const isVisible = visibleColumns.includes(colId);
    if (isVisible && visibleColumns.length === 1) return;
    onVisibilityChange?.(colId, !isVisible);

    if (isVisible && frozenColumnIds.includes(colId)) {
      onFrozenColumnsChange?.(frozenColumnIds.filter((id) => id !== colId));
      onColumnReorder?.(colId, false);
    }
  };

  const handleTogglePin = (colId: string | number) => {
    const firstColId = columns[0]?.id;
    if (colId === firstColId) return;

    if (frozenColumnIds.includes(colId)) {
      const next = frozenColumnIds.filter((id) => id !== colId);
      onFrozenColumnsChange?.(next);
      onColumnReorder?.(colId, false);
    } else {
      const next = [...frozenColumnIds, colId];
      onFrozenColumnsChange?.(next);
      onColumnReorder?.(colId, true);
    }
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          border: `1px solid ${borderColor}`,
          borderRadius: "10px",
          backgroundColor: containerBg,
          overflow: "hidden",
          height: "40px",
        }}
      >
        <Box ref={groupsBtnRef} sx={{ display: "contents" }}>
          <ToolbarButton
            icon={
              groupMode === "normal" ? (
                <ViewColumnIcon fontSize="small" />
              ) : (
                <ViewCompactIcon fontSize="small" />
              )
            }
            label="Group View"
            onClick={() => {
              setGroupsOpen((p) => !p);
              setShowHideOpen(false);
              setPinOpen(false);
            }}
            showChevron
            active={groupsOpen}
            isFirst
          />
        </Box>

        <Box ref={showHideBtnRef} sx={{ display: "contents" }}>
          <ToolbarButton
            icon={<ViewStreamIcon fontSize="small" />}
            label="Show / Hide Columns"
            onClick={() => {
              setShowHideOpen((p) => !p);
              setGroupsOpen(false);
              setPinOpen(false);
            }}
            active={showHideOpen}
            isLast={disableColumnFreeze}
          />
        </Box>

        {!disableColumnFreeze && (
          <Box ref={pinBtnRef} sx={{ display: "contents" }}>
            <ToolbarButton
              icon={<PushPinIcon fontSize="small" />}
              label="Pin / Freeze Columns"
              onClick={() => {
                setPinOpen((p) => !p);
                setGroupsOpen(false);
                setShowHideOpen(false);
              }}
              active={pinOpen}
              isLast
            />
          </Box>
        )}
      </Box>
      {groupsOpen && onGroupModeChange && (
        <GroupsDropdown
          groupMode={groupMode}
          onGroupChange={onGroupModeChange}
          anchorRef={groupsBtnRef}
          onClose={() => setGroupsOpen(false)}
        />
      )}
      {showHideOpen && columns.length > 0 && (
        <ColumnDropdown
          columns={columns}
          checkedColumns={visibleColumns}
          onToggle={handleToggleVisibility}
          anchorRef={showHideBtnRef}
          onClose={() => setShowHideOpen(false)}
          dropdownLabel="Toggle Columns"
        />
      )}
      {!disableColumnFreeze && pinOpen && columns.length > 0 && (
        <ColumnDropdown
          columns={columns.filter((col) => visibleColumns.includes(col.id))}
          checkedColumns={frozenColumnIds}
          onToggle={handleTogglePin}
          anchorRef={pinBtnRef}
          onClose={() => setPinOpen(false)}
          dropdownLabel="Freeze Columns"
        />
      )}
    </Box>
  );
};

export default TableToolbar;
