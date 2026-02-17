import { Badge } from "@/components/ui/badge";

export default function BadgeWithLink() {
  return (
    <Badge render={<a href="/" />}>Link</Badge>
  );
}
