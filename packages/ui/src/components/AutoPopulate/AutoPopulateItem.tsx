import React from "react";

export interface AutoPopulateItemProps {
  value: string | number;
  subtitle?: string;
  children?: React.ReactNode;
}

/**
 * A declarative component used to define options for AutoPopulate.
 * It is not rendered directly; AutoPopulate reads its props.
 */
export const AutoPopulateItem: React.FC<AutoPopulateItemProps> = () => null;
