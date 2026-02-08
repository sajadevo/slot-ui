"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  children,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbAlignment = "edge",
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = React.useMemo(() => {
    if (value !== undefined) {
      return Array.isArray(value) ? value : [value];
    }

    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }

    return [min];
  }, [value, defaultValue, min]);

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      max={max}
      min={min}
      value={value}
      defaultValue={defaultValue}
      thumbAlignment={thumbAlignment}
      className="data-[orientation=horizontal]:w-full"
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        data-slot="slider-control"
        className={cn(
          "flex touch-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:flex-col",
          className,
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="bg-input relative grow rounded-full data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="bg-primary absolute rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          />
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              data-slot="slider-thumb"
              className="bg-background border-primary ring-ring focus-visible:border-primary focus-visible:border-ring-3 data-dragging:border-primary has-focus-visible:border-primary block size-4 shrink-0 rounded-full border transition-[color,box-shadow] focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 has-focus-visible:ring-3 data-dragging:ring-3"
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn("flex justify-end text-sm", className)}
      {...props}
    />
  );
}

export { Slider, SliderValue };
