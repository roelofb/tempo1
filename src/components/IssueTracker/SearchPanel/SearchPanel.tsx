import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DateRangeFilter from "./DateRangeFilter";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import { DateRange } from "react-day-picker";

interface SearchPanelProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  selectedStatus?: string;
  onStatusChange?: (status: string) => void;
  selectedPriority?: string;
  onPriorityChange?: (priority: string) => void;
}

const SearchPanel = ({
  searchQuery = "",
  onSearchChange = () => {},
  dateRange,
  onDateRangeChange = () => {},
  selectedStatus,
  onStatusChange = () => {},
  selectedPriority,
  onPriorityChange = () => {},
}: SearchPanelProps) => {
  return (
    <div className="w-full bg-background p-4 border rounded-lg space-y-4">
      <div className="relative w-full">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search tickets..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <DateRangeFilter
          dateRange={dateRange}
          onDateRangeChange={onDateRangeChange}
        />
        <StatusFilter
          selectedStatus={selectedStatus}
          onStatusChange={onStatusChange}
        />
        <PriorityFilter
          selectedPriority={selectedPriority}
          onPriorityChange={onPriorityChange}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
