"use client";

import * as React from "react";
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

export function Progresses() {
  const [value, setValue] = React.useState(20);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25)),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-end justify-center gap-8 border-b p-12">
      <Progress value={50} />

      <Progress value={value}>
        <div className="flex items-center justify-between gap-4">
          <ProgressLabel>Export data</ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    </section>
  );
}
