import React from "react";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../components/ui/lib/utils";

const SecondaryButton = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "bg-white hover:bg-gray-200 rounded-full text-black  shadow-black shadow-lg uppercase",
        className
      )}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
