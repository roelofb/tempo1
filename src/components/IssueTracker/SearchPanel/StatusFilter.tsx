import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusFilterProps {
  selectedStatus?: string;
  onStatusChange?: (status: string) => void;
}

const defaultStatuses = [
  { id: "open", label: "Open" },
  { id: "in-progress", label: "In Progress" },
  { id: "resolved", label: "Resolved" },
  { id: "closed", label: "Closed" },
  { id: "pending", label: "Pending" },
];

const StatusFilter = ({
  selectedStatus = "open",
  onStatusChange = () => {},
}: StatusFilterProps) => {
  return (
    <div className="w-[200px] bg-background">
      <Select value={selectedStatus} onValueChange={onStatusChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          {defaultStatuses.map((status) => (
            <SelectItem key={status.id} value={status.id}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StatusFilter;
