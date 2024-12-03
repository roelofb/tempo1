import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PriorityFilterProps {
  selectedPriority?: string;
  onPriorityChange?: (priority: string) => void;
}

const defaultPriorities = [
  { id: "critical", label: "Critical", color: "text-red-500" },
  { id: "high", label: "High", color: "text-orange-500" },
  { id: "medium", label: "Medium", color: "text-yellow-500" },
  { id: "low", label: "Low", color: "text-green-500" },
];

const PriorityFilter = ({
  selectedPriority = "medium",
  onPriorityChange = () => {},
}: PriorityFilterProps) => {
  return (
    <div className="w-[200px] bg-background">
      <Select value={selectedPriority} onValueChange={onPriorityChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          {defaultPriorities.map((priority) => (
            <SelectItem
              key={priority.id}
              value={priority.id}
              className={priority.color}
            >
              {priority.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PriorityFilter;
