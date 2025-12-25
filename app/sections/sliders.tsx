import { Label } from "@/components/ui/label";
import { Slider, SliderValue } from "@/components/ui/slider";

export function Sliders() {
  return (
    <section className="flex items-end justify-center gap-8 border-b p-12">
      <Slider />
      <Slider defaultValue={[25, 75]} />
      <Slider defaultValue={50}>
        <div className="mb-2 flex items-center justify-between gap-1">
          <Label className="text-sm font-medium">Opacity</Label>
          <SliderValue />
        </div>
      </Slider>
    </section>
  );
}
