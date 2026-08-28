"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentVariants } from "@docs/ComponentVariants";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentProps } from "@docs/ComponentProps";
import { Slider, RangeSlider } from "vortex-ui";

const sliderPropsList = [
  {
    name: "label",
    type: "React.ReactNode",
    default: "undefined",
    description: "The text label to display above the slider.",
  },
  {
    name: "value",
    type: "number",
    default: "-",
    description: "The current value of the slider.",
  },
  {
    name: "onChange",
    type: "(value: number) => void",
    default: "-",
    description: "Callback fired when the value changes.",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "The minimum allowed value of the slider.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "The maximum allowed value of the slider.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description:
      "The granularity with which the slider can step through values.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "If true, the component is disabled.",
  },
  {
    name: "trackColor",
    type: "string",
    default: '"#4772FF"',
    description: "The color of the slider track and thumb.",
  },
  {
    name: "railColor",
    type: "string",
    default: '"#E5EBFF"',
    description: "The color of the slider rail (background).",
  },
  {
    name: "showMinMaxLabels",
    type: "boolean",
    default: "true",
    description: "Whether to display the min and max labels below the slider.",
  },
  {
    name: "valueSuffix",
    type: "string",
    default: '""',
    description:
      "A string appended to the current value displayed below the slider.",
  },
];

const rangeSliderPropsList = [
  ...sliderPropsList.filter(
    (prop) =>
      prop.name !== "value" &&
      prop.name !== "onChange" &&
      prop.name !== "valueSuffix",
  ),
  {
    name: "value",
    type: "number[]",
    default: "-",
    description: "The current [min, max] values of the range slider.",
  },
  {
    name: "onChange",
    type: "(value: number[]) => void",
    default: "-",
    description: "Callback fired when the value changes.",
  },
  {
    name: "minDistance",
    type: "number",
    default: "0",
    description: "The minimum distance allowed between the two thumbs.",
  },
  {
    name: "showRangeText",
    type: "boolean",
    default: "true",
    description: "Whether to display the selected range text below the slider.",
  },
];

export default function SliderDocs() {
  const [singleValue, setSingleValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<number[]>([20, 80]);
  const [stepperValue, setStepperValue] = useState(30);

  return (
    <Box>
      <ComponentHeader
        title="Slider & RangeSlider"
        description={
          <>
            Sliders allow users to make selections from a range of values. The
            library includes both a single-value Slider and a double-value
            RangeSlider.
          </>
        }
      />

      <ComponentVariants
        title="Variants"
        description="The component comes in single and range variations with customizable colors."
        direction="column"
        variants={[
          {
            name: "Single Slider",
            element: (
              <Box sx={{ width: "100%", px: 4 }}>
                <Slider
                  label="Volume"
                  value={singleValue}
                  onChange={setSingleValue}
                  valueSuffix="%"
                />
              </Box>
            ),
          },
          {
            name: "Range Slider",
            element: (
              <Box sx={{ width: "100%", px: 4 }}>
                <RangeSlider
                  label="Price Range"
                  value={rangeValue}
                  onChange={setRangeValue}
                />
              </Box>
            ),
          },
          {
            name: "Discrete Slider (Steps)",
            element: (
              <Box sx={{ width: "100%", px: 4 }}>
                <Slider
                  label="Percentage"
                  value={stepperValue}
                  onChange={setStepperValue}
                  step={10}
                  valueSuffix="%"
                />
              </Box>
            ),
          },
        ]}
      />

      <ComponentCode
        code={`import { useState } from "react";
import { Slider, RangeSlider } from "vortex-ui";

function Example() {
  const [volume, setVolume] = useState(50);
  const [price, setPrice] = useState([20, 80]);

  return (
    <div>
      {/* Single Slider */}
      <Slider 
        label="Volume" 
        value={volume} 
        onChange={setVolume} 
        valueSuffix="%" 
      />
      
      {/* Range Slider */}
      <RangeSlider 
        label="Price Range" 
        value={price} 
        onChange={setPrice} 
      />
    </div>
  );
}`}
      />

      <Box mt={6}>
        <ComponentProps propsList={sliderPropsList} title="Slider Props" />
      </Box>
      <Box mt={6}>
        <ComponentProps
          propsList={rangeSliderPropsList}
          title="RangeSlider Props"
        />
      </Box>
    </Box>
  );
}
