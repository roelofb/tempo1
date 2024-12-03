import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface DateRangeFilterProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
}

const DateRangeFilter = ({
  dateRange = {
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  onDateRangeChange = () => {},
}: DateRangeFilterProps) => {
  return (
    <div className="w-[300px] bg-background">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            <span className="mr-2">📅</span>
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4">
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Start Date</div>
                    <div className="text-sm text-muted-foreground">
                      {dateRange?.from
                        ? format(dateRange.from, "PPP")
                        : "Select date"}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDateRangeChange(undefined)}
                  >
                    Clear
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">End Date</div>
                    <div className="text-sm text-muted-foreground">
                      {dateRange?.to
                        ? format(dateRange.to, "PPP")
                        : "Select date"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangeFilter;
