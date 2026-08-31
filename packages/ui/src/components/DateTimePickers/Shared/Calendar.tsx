import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { KeyboardArrowDown, ChevronLeft, ChevronRight } from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";

// ─── Dropdown Select (month / year) ───────────────────────────────────────────
export function DropdownSelect({ value, options, onChange }: { value: number; options: { label: string; val: number }[]; onChange: (val: number) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const selectedLabel = options.find((o) => o.val === value)?.label || "";

  return (
    <Box ref={ref} sx={{ position: "relative", display: "inline-block" }}>
      <Box
        component="button"
        type="button"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "32px",
          px: "10px",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.default",
          fontSize: "13px",
          fontWeight: 500,
          color: "text.primary",
          cursor: "pointer",
          whiteSpace: "nowrap",
          minWidth: "60px",
          "&:hover": {
            backgroundColor: "action.hover"
          }
        }}
      >
        {selectedLabel}
        <KeyboardArrowDown sx={{ width: 16, height: 16, color: "text.secondary" }} />
      </Box>

      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "36px",
            left: 0,
            zIndex: 99999,
            background: (theme) => theme.palette.background.paper,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            maxHeight: "180px",
            overflowY: "auto",
            minWidth: "90px",
          }}
        >
          {options.map((opt) => (
            <Box
              key={opt.val}
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                onChange(opt.val);
                setOpen(false);
              }}
              sx={{
                px: 1.75,
                py: 1,
                fontSize: "13px",
                cursor: "pointer",
                color: opt.val === value ? "primary.main" : "text.primary",
                backgroundColor: opt.val === value ? "primary.disabledBackground" : "transparent",
                fontWeight: opt.val === value ? 600 : 400,
                "&:hover": {
                  backgroundColor: opt.val === value ? "primary.disabledBackground" : "action.hover",
                },
              }}
            >
              {opt.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

// ─── Navigation Arrow ─────────────────────────────────────────────────────────
export function NavArrow({ direction, onClick, disabled }: { direction: "left" | "right"; onClick: () => void; disabled?: boolean }) {
  return (
    <Box
      onClick={!disabled ? onClick : undefined}
      sx={{
        width: 32,
        height: 32,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        color: disabled ? "text.disabled" : "text.secondary",
        "&:hover": !disabled ? { backgroundColor: "action.hover" } : {},
        flexShrink: 0,
      }}
    >
      {direction === "left" ? (
        <ChevronLeft sx={{ width: 20, height: 20 }} />
      ) : (
        <ChevronRight sx={{ width: 20, height: 20 }} />
      )}
    </Box>
  );
}

export const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function Calendar({
  month,
  selectedDate,
  onDayClick,
  minDate,
  maxDate,
  onPrev,
  onNext,
  onMonthChange,
  onYearChange,
}: {
  month: Dayjs;
  selectedDate: Dayjs | null;
  onDayClick: (day: Dayjs) => void;
  minDate: Dayjs | null;
  maxDate: Dayjs | null;
  onPrev: () => void;
  onNext: () => void;
  onMonthChange: (val: number) => void;
  onYearChange: (val: number) => void;
}) {
  const firstDay = month.startOf("month");
  const daysInMonth = month.daysInMonth();
  const startOffset = firstDay.day();

  const cells: (Dayjs | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(month.date(d));
  while (cells.length % 7 !== 0) cells.push(null);

  const currentYear = dayjs().year();
  const yearOptions = Array.from({ length: 21 }, (_, i) => ({
    label: String(currentYear - 10 + i),
    val: currentYear - 10 + i,
  }));
  const monthOptions = MONTHS.map((m, i) => ({ label: m, val: i }));

  const disablePrev = minDate && month.isSame(minDate.startOf("month"), "month");
  const disableNext = maxDate && month.isSame(maxDate.startOf("month"), "month");

  return (
    <Box sx={{ width: "270px", pb: 1.5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, px: 1.5, py: 1.5 }}>
        <DropdownSelect value={month.month()} onChange={onMonthChange} options={monthOptions} />
        <DropdownSelect value={month.year()} onChange={onYearChange} options={yearOptions} />
        <Box sx={{ display: "flex", alignItems: "center", ml: 0.5 }}>
          <NavArrow direction="left" onClick={onPrev} disabled={!!disablePrev} />
          <NavArrow direction="right" onClick={onNext} disabled={!!disableNext} />
        </Box>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", px: 1.5, mb: 0.5 }}>
        {DAYS.map((d) => (
          <Box key={d} sx={{ textAlign: "center", fontSize: "12px", color: "text.secondary", fontWeight: 400, py: 0.5 }}>
            {d}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", px: 1.5 }}>
        {cells.map((day, idx) => {
          if (!day) return <Box key={`empty-${idx}`} />;

          const isToday = day.isSame(dayjs(), "day");
          const isSelected = selectedDate && day.isSame(selectedDate, "day");
          const isDisabled =
            (minDate && day.isBefore(minDate, "day")) ||
            (maxDate && day.isAfter(maxDate, "day"));

          return (
            <Box
              key={day.format("YYYY-MM-DD")}
              onClick={() => !isDisabled && onDayClick(day)}
              sx={{
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: isDisabled ? "not-allowed" : "pointer",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? "primary.main" : "transparent",
                  color: isDisabled
                    ? "text.disabled"
                    : isSelected
                      ? "primary.contrastText"
                      : isToday
                        ? "primary.main"
                        : "text.primary",
                  border: isToday && !isSelected ? "1px solid" : "none",
                  borderColor: isToday && !isSelected ? "primary.main" : "transparent",
                  "&:hover": !isDisabled && !isSelected ? { backgroundColor: "action.hover" } : {},
                }}
              >
                {day.date()}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
