import { Slider } from "@/components/ui/slider";

export default function SliderRange() {
  return <Slider defaultValue={[25, 75]} max={100} className="w-full max-w-xs mx-auto" />;
}
