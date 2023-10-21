import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Loading() {
  return (
    <div className="mt-10 text-center">
      <Button className="" disabled>
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
