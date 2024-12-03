import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface StatusUpdateFormProps {
  currentStatus?: string;
  onStatusChange?: (status: string) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const defaultStatuses = [
  { id: "open", label: "Open", description: "Issue needs attention" },
  {
    id: "in-progress",
    label: "In Progress",
    description: "Currently being worked on",
  },
  { id: "resolved", label: "Resolved", description: "Issue has been fixed" },
  { id: "closed", label: "Closed", description: "No further action needed" },
  {
    id: "pending",
    label: "Pending",
    description: "Awaiting additional information",
  },
];

const StatusUpdateForm = ({
  currentStatus = "open",
  onStatusChange = () => {},
  onSubmit = () => {},
  onCancel = () => {},
}: StatusUpdateFormProps) => {
  return (
    <div className="w-[460px] bg-background p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Update Status</h3>
        <RadioGroup
          defaultValue={currentStatus}
          onValueChange={onStatusChange}
          className="space-y-3"
        >
          {defaultStatuses.map((status) => (
            <div
              key={status.id}
              className="flex items-center space-x-3 rounded-md border p-3 hover:bg-accent"
            >
              <RadioGroupItem value={status.id} id={status.id} />
              <Label
                htmlFor={status.id}
                className="flex flex-col cursor-pointer"
              >
                <span className="font-medium">{status.label}</span>
                <span className="text-sm text-muted-foreground">
                  {status.description}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>Update Status</Button>
      </div>
    </div>
  );
};

export default StatusUpdateForm;
