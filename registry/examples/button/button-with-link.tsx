import { Button } from "@/components/ui/button";

export default function ButtonWithLink() {
  return (
    <Button nativeButton={false} render={<a href="/" />}>Link</Button>
  );
}
