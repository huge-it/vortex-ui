"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { Box, Typography, alpha, useTheme } from "@mui/material";
import React from "react";
import { HistoryItemProps, HistoryProps } from "./History.types";

const CalIcon = () => <CalendarTodayIcon sx={{ fontSize: 13 }} />;
const ClkIcon = () => <AccessTimeIcon sx={{ fontSize: 13 }} />;

const useHistoryIconCfg = () => {
  const theme = useTheme();
  return {
    win: {
      bg: alpha(theme.palette.success.main, 0.15),
      icon: (
        <EmojiEventsOutlinedIcon sx={{ fontSize: 18, color: "success.main" }} />
      ),
    },
    proposal: {
      bg: alpha(theme.palette.info.main, 0.12),
      icon: (
        <DescriptionOutlinedIcon sx={{ fontSize: 18, color: "info.main" }} />
      ),
    },
    meeting: {
      bg: alpha(theme.palette.warning.main, 0.15),
      icon: (
        <VideocamOutlinedIcon sx={{ fontSize: 18, color: "warning.main" }} />
      ),
    },
    edit: {
      bg: theme.palette.action.selected,
      icon: <EditOutlinedIcon sx={{ fontSize: 18, color: "text.secondary" }} />,
    },
    created: {
      bg: theme.palette.action.selected,
      icon: (
        <AddCircleOutlineIcon sx={{ fontSize: 18, color: "text.secondary" }} />
      ),
    },
  };
};

export const HistoryItem = ({
  item,
  isLast,
  lineVariant = "solid",
}: HistoryItemProps) => {
  const cfgs = useHistoryIconCfg();
  const cfg = item.icon
    ? { bg: item.iconBg || cfgs.edit.bg, icon: item.icon }
    : cfgs[item.type as keyof typeof cfgs] || cfgs.edit;

  return (
    <Box sx={{ display: "flex", gap: 0, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 40,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            bgcolor: cfg.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          {cfg.icon}
        </Box>
        {!isLast && lineVariant !== "none" && (
          <Box
            sx={{
              position: "absolute",
              top: 34,
              bottom: 0,
              left: 19,
              borderLeft: `2px ${lineVariant}`,
              borderColor: "divider",
              zIndex: 0,
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          pb: isLast ? 0 : 3,
          pt: 0.5,
          pl: 1.5,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mb: 0.4,
          }}
        >
          <Typography fontSize={14} fontWeight={500} color="text.primary">
            {item.title}
          </Typography>
          {item.tag && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                border: item.tagType === "phone" ? "none" : "1px solid",
                borderColor: "divider",
                px: item.tagType === "phone" ? 0 : 0.75,
                borderRadius: item.tagType === "phone" ? 0 : "8px",
              }}
            >
              {item.tagType !== "phone" && (
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "info.main",
                  }}
                />
              )}
              <Typography fontSize={12} fontWeight={500} color="text.secondary">
                {item.tag}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 0.5 }}>
          {item.amount && (
            <Typography fontSize={14} fontWeight={500} color="text.primary">
              {item.amount}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {item.date && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "action.hover",
                  borderRadius: "5px",
                  px: "6px",
                  py: "2px",
                }}
              >
                <CalIcon />
                <Typography
                  fontSize={11}
                  fontWeight={500}
                  color="text.secondary"
                >
                  {item.date}
                </Typography>
              </Box>
            )}
            {item.time && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "action.hover",
                  borderRadius: "5px",
                  px: "6px",
                  py: "2px",
                }}
              >
                <ClkIcon />
                <Typography
                  fontSize={11}
                  fontWeight={500}
                  color="text.secondary"
                >
                  {item.time}
                </Typography>
              </Box>
            )}
            {item.createdBy && (
              <Typography fontSize={12} color="text.secondary" fontWeight={400}>
                Created by{" "}
                <Box component="span" fontWeight={500} color="text.primary">
                  {item.createdBy}
                </Box>
              </Typography>
            )}
          </Box>
        </Box>

        {item.notes && (
          <Typography fontSize={13} color="text.secondary" fontWeight={400}>
            Notes: {item.notes}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export const HorizontalHistoryItem = ({
  item,
  isLast,
  lineVariant = "solid",
}: HistoryItemProps) => {
  const cfgs = useHistoryIconCfg();
  const cfg = item.icon
    ? { bg: item.iconBg || cfgs.edit.bg, icon: item.icon }
    : cfgs[item.type as keyof typeof cfgs] || cfgs.edit;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 280,
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            bgcolor: cfg.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          {cfg.icon}
        </Box>
        {!isLast && lineVariant !== "none" && (
          <Box
            sx={{
              flex: 1,
              height: "0px",
              borderTop: `2px ${lineVariant}`,
              borderColor: "divider",
              mx: 1.5,
            }}
          />
        )}
      </Box>

      <Box sx={{ pr: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mb: 0.4,
          }}
        >
          <Typography fontSize={14} fontWeight={500} color="text.primary">
            {item.title}
          </Typography>
          {item.tag && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                border: item.tagType === "phone" ? "none" : "1px solid",
                borderColor: "divider",
                px: item.tagType === "phone" ? 0 : 0.75,
                borderRadius: item.tagType === "phone" ? 0 : "8px",
              }}
            >
              {item.tagType !== "phone" && (
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "info.main",
                  }}
                />
              )}
              <Typography fontSize={12} fontWeight={500} color="text.secondary">
                {item.tag}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
          {item.amount && (
            <Typography fontSize={14} fontWeight={500} color="text.primary">
              {item.amount}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {item.date && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "action.hover",
                  borderRadius: "5px",
                  px: "6px",
                  py: "2px",
                }}
              >
                <CalIcon />
                <Typography
                  fontSize={11}
                  fontWeight={500}
                  color="text.secondary"
                >
                  {item.date}
                </Typography>
              </Box>
            )}
            {item.time && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "action.hover",
                  borderRadius: "5px",
                  px: "6px",
                  py: "2px",
                }}
              >
                <ClkIcon />
                <Typography
                  fontSize={11}
                  fontWeight={500}
                  color="text.secondary"
                >
                  {item.time}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {item.createdBy && (
          <Typography
            fontSize={12}
            color="text.secondary"
            fontWeight={400}
            mb={0.5}
          >
            Created by{" "}
            <Box component="span" fontWeight={500} color="text.primary">
              {item.createdBy}
            </Box>
          </Typography>
        )}

        {item.notes && (
          <Typography
            fontSize={13}
            color="text.secondary"
            fontWeight={400}
            sx={{ mt: 0.5 }}
          >
            Notes: {item.notes}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export const History: React.FC<HistoryProps> = ({
  data = [],
  isHorizontal = false,
  lineVariant = "solid",
}) => {
  if (isHorizontal) {
    return (
      <Box sx={{ display: "flex", overflowX: "auto", pb: 2, pt: 1 }}>
        {data.map((item, index) => (
          <HorizontalHistoryItem
            key={item.id}
            item={item}
            isLast={index === data.length - 1}
            lineVariant={lineVariant}
          />
        ))}
      </Box>
    );
  }
  return (
    <Box sx={{ pt: 1 }}>
      {data.map((item, index) => (
        <HistoryItem
          key={item.id}
          item={item}
          isLast={index === data.length - 1}
          lineVariant={lineVariant}
        />
      ))}
    </Box>
  );
};
