export interface Stage {
  label: string;
  value: string | number;
}

export interface PipelineStepperProps {
  /**
   * Array of stages to display in the pipeline.
   */
  stages: Stage[];
  /**
   * The value of the currently active stage.
   */
  value?: string | number;
  /**
   * Callback fired when a stage is clicked. Passes the value of the clicked stage.
   */
  onChange?: (value: string | number) => void;
  /**
   * Width of the stepper component.
   * @default "100%"
   */
  width?: string | number;
  /**
   * Height of each stepper item.
   * @default 38
   */
  height?: string | number;
}
