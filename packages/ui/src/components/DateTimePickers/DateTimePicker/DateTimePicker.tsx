"use client";

import { CalendarMonthOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Popover from "@mui/material/Popover";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { TextField } from "../../TextField";
import { Calendar } from "../Shared/Calendar";
import { DateTimePickerProps } from "./DateTimePicker.types";

const HOUR_OPTIONS = Array.from({ length: 12 }, (_, i) => ({
  label: String(i + 1),
  value: i + 1,
}));
const MINUTE_OPTIONS = Array.from({ length: 12 }, (_, i) => ({
  label: String(i * 5).padStart(2, "0"),
  value: i * 5,
}));
const MERIDIEM_OPTIONS = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

function TimeColumn({ label, items, selected, onSelect }: any) {
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!listRef.current) return;
    const selectedEl = listRef.current.querySelector(
      '[data-selected="true"]',
    ) as HTMLElement;
    if (selectedEl) {
      listRef.current.scrollTop =
        selectedEl.offsetTop -
        listRef.current.clientHeight / 2 +
        selectedEl.clientHeight / 2;
    }
    const el = listRef.current;
    setMaxScroll(el.scrollHeight - el.clientHeight);
    setClientHeight(el.clientHeight);
    setScrollTop(el.scrollTop);
  }, [items]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop((e.target as HTMLDivElement).scrollTop);
  };

  const thumbHeight =
    maxScroll > 0
      ? Math.max((clientHeight / (clientHeight + maxScroll)) * clientHeight, 40)
      : 0;
  const thumbTravel = clientHeight - thumbHeight;
  const thumbTop = maxScroll > 0 ? (scrollTop / maxScroll) * thumbTravel : 0;
  const showThumb = maxScroll > 0;

  return (
    <Box
      sx={{
        width: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
            color: "text.secondary",
            mb: 1,
          }}
        >
          {label}
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          ref={listRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            overflowY: "auto",
            maxHeight: "260px",
            pb: "10px",
            width: "100%",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {items.map((item: any) => {
            const isSelected = selected === item.value;
            return (
              <Box
                key={item.value}
                data-selected={isSelected}
                onClick={() => onSelect(item.value)}
                sx={{
                  width: "32px",
                  height: "32px",
                  flexShrink: 0,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: isSelected ? 600 : 400,
                  cursor: "pointer",
                  backgroundColor: isSelected ? "primary.main" : "transparent",
                  color: isSelected ? "primary.contrastText" : "text.primary",
                  "&:hover": !isSelected
                    ? { backgroundColor: "action.hover" }
                    : {},
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>
        {showThumb && (
          <Box
            sx={{
              position: "absolute",
              right: "-1px",
              top: `${thumbTop}px`,
              width: "4px",
              height: `60px`,
              borderRadius: "2px",
              backgroundColor: "action.disabled",
              pointerEvents: "none",
            }}
          />
        )}
      </Box>
    </Box>
  );
}

function TimeSelector({
  hour,
  minute,
  meridiem,
  onHourChange,
  onMinuteChange,
  onMeridiemChange,
}: any) {
  return (
    <Box
      sx={{
        display: "flex",
        borderLeft: "1px solid",
        borderColor: "divider",
        pt: "8px",
      }}
    >
      <TimeColumn
        label="HH"
        items={HOUR_OPTIONS}
        selected={hour}
        onSelect={onHourChange}
      />
      <Box sx={{ width: "1px", backgroundColor: "divider", mb: 1.5 }} />
      <TimeColumn
        label="MM"
        items={MINUTE_OPTIONS}
        selected={minute}
        onSelect={onMinuteChange}
      />
      <Box sx={{ width: "1px", backgroundColor: "divider", mb: 1.5 }} />
      <TimeColumn
        items={MERIDIEM_OPTIONS}
        selected={meridiem}
        onSelect={onMeridiemChange}
      />
    </Box>
  );
}

export const DateTimePicker = React.forwardRef<
  HTMLDivElement,
  DateTimePickerProps
>(
  (
    {
      label = "Date & Time",
      value,
      onChange,
      minDate,
      maxDate,
      bgColor = "background.paper",
      error,
      disabled = false,
      format = "DD/MM/YYYY",
      ...rest
    },
    ref,
  ) => {
    const initial = value ? dayjs(value) : null;

    const [open, setOpen] = useState(false);
    const [viewMonth, setViewMonth] = useState(() =>
      (initial || dayjs()).startOf("month"),
    );
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
      initial ? initial.startOf("day") : null,
    );
    const [selectedHour, setSelectedHour] = useState<number | null>(
      initial ? Number(initial.format("h")) : null,
    );
    const [selectedMinute, setSelectedMinute] = useState<number | null>(
      initial ? initial.minute() - (initial.minute() % 5) : null,
    );
    const [selectedMeridiem, setSelectedMeridiem] = useState<string | null>(
      initial ? initial.format("A") : null,
    );

    const anchorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const next = value ? dayjs(value) : null;
      setSelectedDate(next ? next.startOf("day") : null);
      setSelectedHour(next ? Number(next.format("h")) : null);
      setSelectedMinute(next ? next.minute() - (next.minute() % 5) : null);
      setSelectedMeridiem(next ? next.format("A") : null);
      if (next) setViewMonth(next.startOf("month"));
    }, [value]);

    const commitIfComplete = (
      date: Dayjs | null,
      hour: number | null,
      minute: number | null,
      meridiem: string | null,
    ) => {
      if (date && hour != null && minute != null && meridiem && onChange) {
        let h = hour % 12;
        if (meridiem === "PM") h += 12;
        const final = date.hour(h).minute(minute).second(0);
        onChange(final.format("YYYY-MM-DDTHH:mm:ss"));
        setOpen(false);
      }
    };

    const handleDayClick = (day: Dayjs) => {
      setSelectedDate(day);
      commitIfComplete(day, selectedHour, selectedMinute, selectedMeridiem);
    };
    const handleHourChange = (h: number) => {
      setSelectedHour(h);
      commitIfComplete(selectedDate, h, selectedMinute, selectedMeridiem);
    };
    const handleMinuteChange = (m: number) => {
      setSelectedMinute(m);
      commitIfComplete(selectedDate, selectedHour, m, selectedMeridiem);
    };
    const handleMeridiemChange = (mer: string) => {
      setSelectedMeridiem(mer);
      commitIfComplete(selectedDate, selectedHour, selectedMinute, mer);
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
    const handleMonthChange = (m: number) =>
      setViewMonth((prev) => prev.month(m));
    const handleYearChange = (y: number) =>
      setViewMonth((prev) => prev.year(y));

    const minDayjs = minDate ? dayjs(minDate) : null;
    const maxDayjs = maxDate ? dayjs(maxDate) : null;

    const displayValue = (() => {
      if (!selectedDate) return "";
      if (selectedHour != null && selectedMinute != null && selectedMeridiem) {
        let h = selectedHour % 12;
        if (selectedMeridiem === "PM") h += 12;
        return selectedDate
          .hour(h)
          .minute(selectedMinute)
          .format("DD/MM/YYYY hh:mm A");
      }
      return `${selectedDate.format("DD/MM/YYYY")} ...`;
    })();

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
            placeholder: `${format} HH:MM AM/PM`,
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
            },
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

          <TimeSelector
            hour={selectedHour}
            minute={selectedMinute}
            meridiem={selectedMeridiem}
            onHourChange={handleHourChange}
            onMinuteChange={handleMinuteChange}
            onMeridiemChange={handleMeridiemChange}
          />
        </Popover>
      </>
    );
  },
);

DateTimePicker.displayName = "DateTimePicker";
