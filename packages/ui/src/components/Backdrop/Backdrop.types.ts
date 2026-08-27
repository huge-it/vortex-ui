import React from 'react';

export interface BackdropProps {
  /**
   * If true, the backdrop is open and visible.
   */
  open: boolean;
  
  /**
   * Callback fired when the backdrop is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  
  /**
   * The z-index of the backdrop.
   */
  zIndex?: number;
  
  /**
   * The color of the loading spinner.
   */
  color?: string;

  /**
   * If true, the backdrop will be absolute positioned and rendered inline instead of using a portal.
   * Useful for showing a loading state inside a specific container (which must have position relative).
   */
  absolute?: boolean;

  /**
   * The size of the loading spinner in pixels.
   */
  size?: number;
}
