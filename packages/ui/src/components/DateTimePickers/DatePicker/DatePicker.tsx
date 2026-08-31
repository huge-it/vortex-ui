"use client";

import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import InputAdornment from "@mui/material/InputAdornment";
import { CalendarMonthOutlined } from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";
import { TextField } from "../../TextField";
import { DatePickerProps } from "./DatePicker.types";
import { Calendar } from "../Shared/Calendar";

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(({
  label = "Date",
  value,
  onChange,
  minDate,
  maxDate,
  bgColor = "background.paper",
  error,
  disabled = false,
  format = "DD/MM/YYYY",
  ...rest
}, ref) => {
  const initial = value ? dayjs(value) : null;
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => (initial || dayjs()).startOf("month"));
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(initial ? initial.startOf("day") : null);

  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const next = value ? dayjs(value) : null;
    setSelectedDate(next ? next.startOf("day") : null);
    if (next) setViewMonth(next.startOf("month"));
  }, [value]);

  const handleDayClick = (day: Dayjs) => {
    setSelectedDate(day);
    onChange?.(day.format("YYYY-MM-DD"));
    setOpen(false);
  };

  const handleOpen = (e?: React.MouseEvent) => {
    if (disabled) return;
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (selectedDate) setViewMonth(selectedDate.startOf("month"));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const prevMonth = () => setViewMonth((m) => m.subtract(1, "month"));
  const nextMonth = () => setViewMonth((m) => m.add(1, "month"));
  const handleMonthChange = (m: number) => setViewMonth((prev) => prev.month(m));
  const handleYearChange = (y: number) => setViewMonth((prev) => prev.year(y));

  const minDayjs = minDate ? dayjs(minDate) : null;
  const maxDayjs = maxDate ? dayjs(maxDate) : null;

  const displayValue = selectedDate ? selectedDate.format(format) : "";

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
        error={error}
        disabled={disabled}
        onClick={handleOpen}
        InputProps={{
          readOnly: true,
          placeholder: format,
          endAdornment: (
            <InputAdornment position="end" sx={{ mt: 0 }}>
              <CalendarMonthOutlined
                sx={{ width: 20, height: 20, cursor: disabled ? "not-allowed" : "pointer", mr: 0, color: "text.secondary" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen();
                }}
              />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: !!displayValue }}
        sx={{ "& .VortexUIFilledInput-input": { cursor: disabled ? "not-allowed" : "pointer" }, ...rest.sx }}
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
        <Calendar
          month={viewMonth}
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
          minDate={minDayjs}
          maxDate={maxDayjs}
          onPrev={prevMonth}
          onNext={nextMonth}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
        />
      </Popover>
    </>
  );
});

DatePicker.displayName = "DatePicker";
