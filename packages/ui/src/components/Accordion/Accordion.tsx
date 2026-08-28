"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { AccordionPanelProps, AccordionProps } from "./Accordion.types";

const Accordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:first-of-type)": {
    borderTop: 0,
  },
  "&:first-of-type": {
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
  "&:last-of-type": {
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",
  },
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "block !important",
    position: "absolute",
    top: 0,
    left: "16px",
    right: "16px",
    height: "1px",
    backgroundColor: theme.palette.divider,
    opacity: "1 !important",
  },
  "&:first-of-type::before": {
    display: "none !important",
  },
}));

const AccordionSummary = styled((props: MuiAccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  ...theme.applyStyles("dark", {}),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const AccordionPanel = ({
  title,
  count,
  items = [],
  children,
  expanded,
  onChange,
}: AccordionPanelProps) => {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        <Typography
          component="span"
          fontWeight={600}
          fontSize="14px"
          color="text.primary"
        >
          {title} {count !== undefined && `(${count})`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children ? (
          children
        ) : (
          <Stack spacing={0.5}>
            {items.map((term: React.ReactNode, idx: number) => {
              if (!term || (typeof term === "string" && term.trim() === ""))
                return null;
              return (
                <Box key={idx} sx={{ display: "flex", gap: 1 }}>
                  <Typography fontSize="13px" color="text.primary">
                    {idx + 1}.
                  </Typography>
                  <Typography fontSize="13px" color="text.secondary">
                    {term}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default function CustomAccordion({
  data,
  singleOpen = false,
  ...singleProps
}: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = React.useState<number | false>(
    singleOpen ? 0 : false,
  );

  const handleChange =
    (panelIndex: number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      if (singleOpen) {
        setExpandedIndex(newExpanded ? panelIndex : false);
      }
    };

  // If data is provided, map through it
  if (data && Array.isArray(data)) {
    return (
      <Box>
        {data.map((item, index) => (
          <AccordionPanel
            key={index}
            {...item}
            expanded={singleOpen ? expandedIndex === index : undefined}
            onChange={singleOpen ? handleChange(index) : undefined}
          />
        ))}
      </Box>
    );
  }

  // Otherwise treat as a single accordion panel
  return <AccordionPanel {...singleProps} />;
}
