import React from "react";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../components/ui/lib/utils";

const PrimaryButton = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "bg-blue hover:bg-darkBlue rounded-full  shadow-lg shadow-black text-black uppercase",
        className
      )}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
