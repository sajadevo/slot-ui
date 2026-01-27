import { Button } from "@/components/ui/button";

export default function ButtonWithLink() {
  return (
    <Button render={<a href="/" />}>Link</Button>
  );
}
