"use client";
import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import InputAdornment from "@mui/material/InputAdornment";
import { CalendarMonthOutlined, Refresh } from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { TextField } from "../../TextField";
import { DateRangePickerProps, DateRange } from "./DateRangePicker.types";
import { DropdownSelect, NavArrow, DAYS, MONTHS } from "../Shared/Calendar";

dayjs.extend(isBetween);

// ─── Quick Select Options ─────────────────────────────────────────────────────
const QUICK_OPTIONS = [
  {
    label: "Today",
    getRange: () => {
      const today = dayjs().format("YYYY-MM-DD");
      return { startDate: today, endDate: today };
    },
  },
  {
    label: "Last 30 Days",
    getRange: () => ({
      startDate: dayjs().subtract(29, "day").format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
    }),
  },
  {
    label: "This Week",
    getRange: () => ({
      startDate: dayjs().startOf("week").format("YYYY-MM-DD"),
      endDate: dayjs().endOf("week").format("YYYY-MM-DD"),
    }),
  },
  {
    label: "Last Week",
    getRange: () => ({
      startDate: dayjs()
        .subtract(1, "week")
        .startOf("week")
        .format("YYYY-MM-DD"),
      endDate: dayjs().subtract(1, "week").endOf("week").format("YYYY-MM-DD"),
    }),
  },
  {
    label: "This Month",
    getRange: () => ({
      startDate: dayjs().startOf("month").format("YYYY-MM-DD"),
      endDate: dayjs().endOf("month").format("YYYY-MM-DD"),
    }),
  },
  {
    label: "Last Month",
    getRange: () => ({
      startDate: dayjs()
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD"),
      endDate: dayjs().subtract(1, "month").endOf("month").format("YYYY-MM-DD"),
    }),
  },
  {
    label: "This Year",
    getRange: () => ({
      startDate: dayjs().startOf("year").format("YYYY-MM-DD"),
      endDate: dayjs().endOf("year").format("YYYY-MM-DD"),
    }),
  },
  {
    label: "Last Year",
    getRange: () => ({
      startDate: dayjs()
        .subtract(1, "year")
        .startOf("year")
        .format("YYYY-MM-DD"),
      endDate: dayjs().subtract(1, "year").endOf("year").format("YYYY-MM-DD"),
    }),
  },
];

// ─── Calendar Month ───────────────────────────────────────────────────────────
function RangeCalendarMonth({
  month,
  startDate,
  endDate,
  hoverDate,
  onDayClick,
  onDayHover,
  minDate,
  maxDate,
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  showPrev,
  showNext,
  onMonthChange,
  onYearChange,
  showDropdowns,
}: any) {
  const firstDay = month.startOf("month");
  const daysInMonth = month.daysInMonth();
  const startOffset = firstDay.day();

  const cells: (Dayjs | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(month.date(d));
  while (cells.length % 7 !== 0) cells.push(null);

  const rangeEnd =
    hoverDate && startDate && !endDate
      ? hoverDate.isAfter(startDate)
        ? hoverDate
        : null
      : endDate;

  const currentYear = dayjs().year();
  const yearOptions = Array.from({ length: 21 }, (_, i) => ({
    label: String(currentYear - 10 + i),
    val: currentYear - 10 + i,
  }));
  const monthOptions = MONTHS.map((m, i) => ({ label: m, val: i }));

  return (
    <Box sx={{ flex: 1, pb: 2, minWidth: "260px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1.5,
          py: 1.5,
        }}
      >
        {showPrev ? (
          <NavArrow direction="left" onClick={onPrev} disabled={disablePrev} />
        ) : (
          <Box sx={{ width: 32 }} />
        )}

        {showDropdowns ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <DropdownSelect
              value={month.month()}
              onChange={onMonthChange}
              options={monthOptions}
            />
            <DropdownSelect
              value={month.year()}
              onChange={onYearChange}
              options={yearOptions}
            />
          </Box>
        ) : (
          <Box
            sx={{ fontWeight: 600, fontSize: "14px", color: "text.primary" }}
          >
            {month.format("MMMM YYYY")}
          </Box>
        )}

        {showNext ? (
          <NavArrow direction="right" onClick={onNext} disabled={disableNext} />
        ) : (
          <Box sx={{ width: 32 }} />
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          px: 1.5,
          mb: 0.5,
        }}
      >
        {DAYS.map((d) => (
          <Box
            key={d}
            sx={{
              textAlign: "center",
              fontSize: "12px",
              color: "text.secondary",
              fontWeight: 500,
              py: 0.5,
            }}
          >
            {d}
          </Box>
        ))}
      </Box>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", px: 1.5 }}
      >
        {cells.map((day, idx) => {
          if (!day) return <Box key={`empty-${idx}`} />;

          const isToday = day.isSame(dayjs(), "day");
          const isStart = startDate && day.isSame(startDate, "day");
          const isEnd = rangeEnd && day.isSame(rangeEnd, "day");
          const hasRange =
            startDate && rangeEnd && !startDate.isSame(rangeEnd, "day");
          const isInRange =
            hasRange && day.isBetween(startDate, rangeEnd, "day");
          const isRangeBg = isInRange || (hasRange && (isStart || isEnd));
          const isDisabled =
            (minDate && day.isBefore(minDate, "day")) ||
            (maxDate && day.isAfter(maxDate, "day"));

          return (
            <Box
              key={day.format("YYYY-MM-DD")}
              onMouseEnter={() => !isDisabled && onDayHover(day)}
              onClick={() => !isDisabled && onDayClick(day)}
              sx={{
                position: "relative",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: isDisabled ? "not-allowed" : "pointer",
                backgroundColor: isRangeBg
                  ? "primary.disabledBackground"
                  : "transparent",
                borderTopLeftRadius: isStart ? "10px" : 0,
                borderBottomLeftRadius: isStart ? "10px" : 0,
                borderTopRightRadius: isEnd ? "10px" : 0,
                borderBottomRightRadius: isEnd ? "10px" : 0,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: isStart || isEnd ? 600 : 400,
                  backgroundColor:
                    isStart || isEnd ? "primary.main" : "transparent",
                  color: isDisabled
                    ? "text.disabled"
                    : isStart || isEnd
                      ? "primary.contrastText"
                      : isToday
                        ? "primary.main"
                        : "text.primary",
                  border: isToday && !isStart && !isEnd ? "1px solid" : "none",
                  borderColor:
                    isToday && !isStart && !isEnd
                      ? "primary.main"
                      : "transparent",
                  "&:hover":
                    !isDisabled && !isStart && !isEnd
                      ? { backgroundColor: "action.hover" }
                      : {},
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

// ─── Quick Select Sidebar ─────────────────────────────────────────────────────
function QuickSelectSidebar({ startDate, endDate, onSelect }: any) {
  const activeLabel = (() => {
    if (!startDate || !endDate) return null;
    for (const opt of QUICK_OPTIONS) {
      const range = opt.getRange();
      if (range.startDate === startDate && range.endDate === endDate)
        return opt.label;
    }
    return null;
  })();

  return (
    <Box
      sx={{
        width: "160px",
        py: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 0,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      {QUICK_OPTIONS.map((opt) => {
        const isActive = activeLabel === opt.label;
        return (
          <Box
            key={opt.label}
            onClick={() => onSelect(opt.getRange())}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1.5,
              py: 1,
              cursor: "pointer",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              mx: 1,
              fontSize: "13px",
              fontWeight: isActive ? 500 : 400,
              color: isActive ? "primary.main" : "text.primary",
              backgroundColor: isActive
                ? "primary.disabledBackground"
                : "transparent",
              "&:hover": {
                backgroundColor: isActive
                  ? "primary.disabledBackground"
                  : "action.hover",
              },
            }}
          >
            <span>{opt.label}</span>
          </Box>
        );
      })}
    </Box>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export const DateRangePicker = React.forwardRef<
  HTMLDivElement,
  DateRangePickerProps
>(
  (
    {
      label = "Date Range",
      startDate,
      endDate,
      onChange,
      minDate,
      maxDate,
      bgColor = "background.paper",
      error,
      disabled = false,
      format = "DD/MM/YYYY",
      showDropdowns = true,
      showQuickSelect = true,
      ...rest
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [leftMonth, setLeftMonth] = useState(() =>
      startDate ? dayjs(startDate).startOf("month") : dayjs().startOf("month"),
    );
    const [hoverDate, setHoverDate] = useState<Dayjs | null>(null);
    const [selecting, setSelecting] = useState(false);
    const [rangeError, setRangeError] = useState(false);

    const anchorRef = useRef<HTMLDivElement>(null);

    const start = startDate ? dayjs(startDate) : null;
    const end = endDate ? dayjs(endDate) : null;
    const rightMonth = leftMonth.add(1, "month");

    const displayValue = (() => {
      if (start && end)
        return `${start.format(format)} - ${end.format(format)}`;
      if (start) return `${start.format(format)} - ...`;
      return "";
    })();

    const handleDayClick = (day: Dayjs) => {
      if (!selecting || !start) {
        onChange?.({ startDate: day.format("YYYY-MM-DD"), endDate: "" });
        setSelecting(true);
        setRangeError(false);
      } else {
        if (day.isBefore(start, "day")) {
          onChange?.({
            startDate: day.format("YYYY-MM-DD"),
            endDate: start.format("YYYY-MM-DD"),
          });
        } else if (day.isSame(start, "day")) {
          onChange?.({
            startDate: day.format("YYYY-MM-DD"),
            endDate: day.format("YYYY-MM-DD"),
          });
        } else {
          onChange?.({
            startDate: start.format("YYYY-MM-DD"),
            endDate: day.format("YYYY-MM-DD"),
          });
        }
        setSelecting(false);
        setOpen(false);
        setHoverDate(null);
        setRangeError(false);
      }
    };

    const handleDayHover = (day: Dayjs) => {
      if (selecting) setHoverDate(day);
    };

    const handleOpen = (e?: React.MouseEvent) => {
      if (disabled) return;
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      if (startDate) setLeftMonth(dayjs(startDate).startOf("month"));
      setOpen(true);
      setSelecting(!!start && !end);
      setHoverDate(null);
      setRangeError(false);
    };

    const handleClose = () => {
      if (start && !end) setRangeError(true);
      setOpen(false);
      setSelecting(false);
      setHoverDate(null);
    };

    const handleQuickSelect = (range: DateRange) => {
      onChange?.(range);
      setLeftMonth(dayjs(range.startDate).startOf("month"));
      setSelecting(false);
      setOpen(false);
      setHoverDate(null);
    };

    const handleReset = () => {
      onChange?.({ startDate: "", endDate: "" });
      setSelecting(false);
      setHoverDate(null);
    };

    const prevMonth = () => setLeftMonth((m) => m.subtract(1, "month"));
    const nextMonth = () => setLeftMonth((m) => m.add(1, "month"));

    const handleLeftMonthChange = (m: number) =>
      setLeftMonth((prev) => prev.month(m));
    const handleLeftYearChange = (y: number) =>
      setLeftMonth((prev) => prev.year(y));
    const handleRightMonthChange = (m: number) =>
      setLeftMonth((prev) => prev.month(m).subtract(1, "month"));
    const handleRightYearChange = (y: number) =>
      setLeftMonth((prev) => prev.add(1, "month").year(y).subtract(1, "month"));

    const minDayjs = minDate ? dayjs(minDate) : null;
    const maxDayjs = maxDate ? dayjs(maxDate) : null;

    return (
      <>
        <TextField
          {...rest}
          ref={(node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            (anchorRef as any).current = node;
          }}
          label={label}
          variant="filled"
          bgColor={bgColor}
          fullWidth
          value={displayValue}
          onClick={handleOpen}
          disabled={disabled}
          InputProps={{
            readOnly: true,
            placeholder: `${format} - ${format}`,
            endAdornment: (
              <InputAdornment position="end" sx={{ mt: 0 }}>
                <CalendarMonthOutlined
                  sx={{
                    width: 20,
                    height: 20,
                    cursor: disabled ? "not-allowed" : "pointer",
                    mr: 0,
                    color: "text.secondary",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen();
                  }}
                />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ shrink: !!displayValue }}
          error={rangeError || !!error}
          helperText={
            rangeError
              ? "Please select an end date to complete the range"
              : typeof error === "string"
                ? error
                : undefined
          }
          sx={{
            "& .VortexUIFilledInput-input": {
              cursor: disabled ? "not-allowed" : "pointer",
            },
            ...rest.sx,
          }}
        />

        <Popover
          open={open}
          anchorEl={anchorRef.current}
          onClose={handleClose}
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
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10)",
              overflow: "hidden",
              userSelect: "none",
              display: "flex",
            }
          }}
        >
          {showQuickSelect && (
            <QuickSelectSidebar
              startDate={startDate}
              endDate={endDate}
              onSelect={handleQuickSelect}
            />
          )}

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "stretch" }}>
              <RangeCalendarMonth
                month={leftMonth}
                startDate={start}
                endDate={end}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={handleDayHover}
                minDate={minDayjs}
                maxDate={maxDayjs}
                showPrev
                showNext={false}
                onPrev={prevMonth}
                disablePrev={
                  minDayjs &&
                  leftMonth.isSame(minDayjs.startOf("month"), "month")
                }
                onMonthChange={handleLeftMonthChange}
                onYearChange={handleLeftYearChange}
                showDropdowns={showDropdowns}
              />

              <Box
                sx={{ width: "1px", backgroundColor: "divider", my: 2 }}
              />

              <RangeCalendarMonth
                month={rightMonth}
                startDate={start}
                endDate={end}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={handleDayHover}
                minDate={minDayjs}
                maxDate={maxDayjs}
                showPrev={false}
                showNext
                onNext={nextMonth}
                disableNext={
                  maxDayjs &&
                  rightMonth.isSame(maxDayjs.startOf("month"), "month")
                }
                onMonthChange={handleRightMonthChange}
                onYearChange={handleRightYearChange}
                showDropdowns={showDropdowns}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                pb: 1.5,
                pt: 1,
                mx: 1,
                mr: 2.5,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                onClick={handleReset}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "primary.main",
                  "&:hover": { color: "primary.dark" },
                }}
              >
                <Refresh sx={{ width: 16, height: 16 }} />
                Reset
              </Box>
            </Box>
          </Box>
        </Popover>
      </>
    );
  },
);

DateRangePicker.displayName = "DateRangePicker";
