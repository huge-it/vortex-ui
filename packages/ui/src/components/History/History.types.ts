import React from "react";

export type HistoryItemType = "win" | "proposal" | "meeting" | "edit" | "created" | (string & {});

export interface HistoryItemData {
  id: string | number;
  type?: HistoryItemType;
  title: React.ReactNode;
  tag?: React.ReactNode;
  tagType?: "phone" | (string & {});
  amount?: string | React.ReactNode;
  date?: string;
  time?: string;
  createdBy?: React.ReactNode;
  notes?: React.ReactNode;
  icon?: React.ReactNode; // Optional custom icon override
  iconBg?: string; // Optional custom background override
}

export interface HistoryProps {
  /**
   * The list of history items to display.
   */
  data: HistoryItemData[];
  /**
   * If true, displays the timeline horizontally.
   */
  isHorizontal?: boolean;
  /**
   * The style of the connecting line between items.
   * @default "solid"
   */
  lineVariant?: "solid" | "dashed" | "dotted" | "none";
}

export interface HistoryItemProps {
  item: HistoryItemData;
  isLast: boolean;
  lineVariant?: "solid" | "dashed" | "dotted" | "none";
}
