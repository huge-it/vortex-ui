import React from "react";

export interface AccordionPanelProps {
  title?: React.ReactNode;
  count?: number;
  items?: React.ReactNode[];
  children?: React.ReactNode;
  expanded?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
}

export interface CustomAccordionProps extends AccordionPanelProps {
  data?: AccordionPanelProps[];
  singleOpen?: boolean;
}

export type AccordionProps = CustomAccordionProps;
