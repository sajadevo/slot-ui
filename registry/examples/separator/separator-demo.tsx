import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="flex gap-4 text-nowrap">
      <a href="#" className="hover:text-primary text-sm">
        Home
      </a>
      <a href="#" className="hover:text-primary text-sm">
        Pricing
      </a>
      <a href="#" className="hover:text-primary text-sm">
        Blog
      </a>
      <a href="#" className="hover:text-primary text-sm">
        Support
      </a>

      <Separator orientation="vertical" />

      <a href="#" className="hover:text-primary text-sm">
        Log in
      </a>
      <a href="#" className="hover:text-primary text-sm">
        Sign up
      </a>
    </div>
  );
}
