"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import InputAdornment from "@mui/material/InputAdornment";
import { AccessTimeOutlined } from "@mui/icons-material";
import { TextField } from "../../TextField";
import { TimePickerProps } from "./TimePicker.types";

const ITEM_HEIGHT = 36;
const VISIBLE_COUNT = 5;
const COLUMN_WIDTH = 50;
const HOURS_12 = Array.from({ length: 12 }, (_, i) => String(i + 1));
const HOURS_24 = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const MINUTES = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));
const PERIODS = ["AM", "PM"];

function parseTime(value: string, format: "12h" | "24h") {
  if (!value) return { hour: null, min: null, period: null };
  if (format === "24h") {
    const match = value.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return { hour: null, min: null, period: null };
    return { hour: match[1].padStart(2, "0"), min: match[2], period: null };
  } else {
    const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return { hour: null, min: null, period: null };
    return {
      hour: match[1],
      min: match[2],
      period: match[3].toUpperCase(),
    };
  }
}

// ─── Scroll Column ────────────────────────────────────────────────────────────
function ScrollColumn({ items, value, onChange }: { items: string[]; value: string | null; onChange: (v: string) => void }) {
  const listRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const idx = value ? items.indexOf(value) : -1;
    if (listRef.current && idx !== -1) {
      isInitialMount.current = true;
      listRef.current.scrollTop = idx * ITEM_HEIGHT;
      setScrollTop(idx * ITEM_HEIGHT);
    }
  }, [value, items]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop((e.target as HTMLDivElement).scrollTop);
  }, []);

  const handleClick = useCallback(
    (item: string) => {
      const idx = items.indexOf(item);
      isInitialMount.current = true;
      listRef.current?.scrollTo({ top: idx * ITEM_HEIGHT, behavior: "smooth" });
      if (item !== value) onChange(item);
    },
    [items, value, onChange],
  );

  const totalContentHeight = items.length * ITEM_HEIGHT + ITEM_HEIGHT * (VISIBLE_COUNT - 1);
  const viewportHeight = ITEM_HEIGHT * VISIBLE_COUNT;
  const thumbHeight = Math.max((viewportHeight / totalContentHeight) * viewportHeight, 20);
  const maxScroll = totalContentHeight - viewportHeight;
  const thumbTravel = viewportHeight - thumbHeight;
  const thumbTop = maxScroll > 0 ? (scrollTop / maxScroll) * thumbTravel : 0;

  return (
    <Box sx={{ position: "relative", width: "100%", height: ITEM_HEIGHT * VISIBLE_COUNT, overflow: "hidden" }}>
      <div
        ref={listRef}
        onScroll={handleScroll}
        style={{
          height: "100%",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        <div style={{ height: ITEM_HEIGHT * 2 }} />
        {items.map((item) => (
          <div
            key={item}
            onClick={() => handleClick(item)}
            style={{
              height: 37.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 400,
              color: item === value ? "var(--mui-palette-primary-contrastText, #fff)" : "var(--mui-palette-text-primary)",
              backgroundColor: item === value ? "var(--mui-palette-primary-main)" : "transparent",
              borderRadius: "8px",
              margin: "0 6px",
              scrollSnapAlign: "start",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {maxScroll > 0 && (
        <Box
          sx={{
            position: "absolute",
            right: "-1px",
            top: `${thumbTop}px`,
            width: "4px",
            height: `${thumbHeight}px`,
            borderRadius: "29px",
            backgroundColor: "action.disabled",
            pointerEvents: "none",
          }}
        />
      )}
    </Box>
  );
}

const Divider = () => <Box sx={{ width: "1px", alignSelf: "stretch", bgcolor: "divider", flexShrink: 0 }} />;

function TimePickerPanel({
  hour,
  min,
  period,
  onHourChange,
  onMinChange,
  onPeriodChange,
  format = "12h",
  onOk,
  onReset,
}: any) {
  const is24h = format === "24h";
  const hoursList = is24h ? HOURS_24 : HOURS_12;
  const colWidth = is24h ? 75 : COLUMN_WIDTH;
  const isOkDisabled = is24h ? !hour || !min : !hour || !min || !period;

  return (
    <Box
      sx={{
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        p: "6px",
        width: "160px",
      }}
    >
      <Box sx={{ display: "flex", mt: 1 }}>
        <Box sx={{ width: colWidth }}>
          <Box sx={{ textAlign: "center", fontSize: "14px", fontWeight: 400, color: "text.secondary" }}>HH</Box>
          <ScrollColumn items={hoursList} value={hour} onChange={onHourChange} />
        </Box>

        <Divider />

        <Box sx={{ width: colWidth }}>
          <Box sx={{ textAlign: "center", fontSize: "14px", fontWeight: 400, color: "text.secondary" }}>MM</Box>
          <ScrollColumn items={MINUTES} value={min} onChange={onMinChange} />
        </Box>

        {!is24h && <Divider />}

        {!is24h && (
          <Box sx={{ width: COLUMN_WIDTH }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "10px", mt: 3 }}>
              {PERIODS.map((p) => (
                <Box
                  key={p}
                  onClick={() => onPeriodChange(p)}
                  sx={{
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: p === period ? "primary.contrastText" : "text.primary",
                    backgroundColor: p === period ? "primary.main" : "transparent",
                    borderRadius: "8px",
                    mx: "6px",
                    cursor: "pointer",
                    width: "calc(100% - 12px)",
                    userSelect: "none",
                  }}
                >
                  {p}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", px: 1, pt: 1, borderTop: "1px solid", borderColor: "divider", m: 1, mb: 0.5 }}>
        <Box onClick={onReset} sx={{ color: "text.secondary", fontSize: "13px", cursor: "pointer", "&:hover": { color: "text.primary" } }}>
          Reset
        </Box>
        <Box
          onClick={isOkDisabled ? undefined : onOk}
          sx={{
            color: isOkDisabled ? "text.disabled" : "primary.main",
            fontSize: "13px",
            fontWeight: 600,
            cursor: isOkDisabled ? "not-allowed" : "pointer",
            "&:hover": isOkDisabled ? {} : { color: "primary.dark" },
          }}
        >
          OK
        </Box>
      </Box>
    </Box>
  );
}

export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(({
  label = "Time",
  value = "",
  onChange,
  bgColor = "background.paper",
  disabled = false,
  format = "12h",
  error,
  ...props
}, ref) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const is24h = format === "24h";
  const { hour, min, period } = parseTime(value, format);

  const handleOpen = (e?: React.MouseEvent) => {
    if (!disabled) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      setOpen((o) => !o);
    }
  };

  const handleHourChange = useCallback(
    (h: string) => {
      if (format === "24h") {
        onChange?.(`${h}:${min ?? "00"}`);
      } else {
        onChange?.(`${h}:${min ?? "00"} ${period ?? "AM"}`);
      }
    },
    [min, period, onChange, format],
  );

  const handleMinChange = useCallback(
    (m: string) => {
      if (format === "24h") {
        onChange?.(`${hour ?? "00"}:${m}`);
      } else {
        onChange?.(`${hour ?? "1"}:${m} ${period ?? "AM"}`);
      }
    },
    [hour, period, onChange, format],
  );

  const handlePeriodChange = useCallback(
    (p: string) => {
      if (format !== "24h") {
        onChange?.(`${hour ?? "1"}:${min ?? "00"} ${p}`);
      }
    },
    [hour, min, onChange, format],
  );

  return (
      <Box sx={{ position: "relative" }}>
        <TextField
          {...props}
          ref={(node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            (anchorRef as any).current = node;
          }}
          label={label}
          variant="filled"
          bgColor={bgColor}
          fullWidth
          disabled={disabled}
          value={value}
          error={error}
          onClick={handleOpen}
          InputProps={{
            readOnly: true,
            placeholder: is24h ? "HH:MM" : "HH:MM AM/PM",
            endAdornment: (
              <InputAdornment position="end">
                <AccessTimeOutlined
                  sx={{ width: 20, height: 20, cursor: disabled ? "not-allowed" : "pointer", mr: 0, color: "text.secondary" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen();
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{ "& .VortexUIFilledInput-input": { cursor: disabled ? "not-allowed" : "pointer" }, ...props.sx }}
        />

        <Popover
          open={open}
          anchorEl={anchorRef.current}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{ zIndex: 1300 }}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: "8px",
              borderRadius: "12px",
              boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
            }
          }}
        >
          <TimePickerPanel
            hour={hour}
            min={min}
            period={period}
            format={format}
            onHourChange={handleHourChange}
            onMinChange={handleMinChange}
            onPeriodChange={handlePeriodChange}
            onOk={() => setOpen(false)}
            onReset={() => {
              onChange?.("");
              setOpen(false);
            }}
          />
        </Popover>
      </Box>
  );
});

TimePicker.displayName = "TimePicker";
