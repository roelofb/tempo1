import React from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MessageSquare, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TicketRowProps {
  ticket?: {
    id: string;
    clientName: string;
    status: string;
    priority: string;
    lastUpdate: Date;
    title: string;
  };
  onStatusChange?: (ticketId: string, status: string) => void;
  onAssign?: (ticketId: string) => void;
  onComment?: (ticketId: string) => void;
}

const defaultTicket = {
  id: "TICKET-123",
  clientName: "Acme Corp",
  status: "open",
  priority: "high",
  lastUpdate: new Date(),
  title: "System Performance Issues",
};

const TicketRow = ({
  ticket = defaultTicket,
  onStatusChange = () => {},
  onAssign = () => {},
  onComment = () => {},
}: TicketRowProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-background hover:bg-accent/5 transition-colors">
      <div className="flex items-center space-x-4 flex-grow">
        <div className="min-w-[100px]">
          <span className="text-sm font-medium">{ticket.id}</span>
        </div>

        <div className="min-w-[200px]">
          <span className="text-sm">{ticket.clientName}</span>
        </div>

        <div className="min-w-[150px]">
          <span className="text-sm font-medium truncate">{ticket.title}</span>
        </div>

        <div className="min-w-[100px]">
          <Badge
            variant={getStatusVariant(ticket.status)}
            className="capitalize"
          >
            {ticket.status}
          </Badge>
        </div>

        <div className="min-w-[100px]">
          <span
            className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}
          >
            {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
          </span>
        </div>

        <div className="min-w-[150px]">
          <span className="text-sm text-muted-foreground">
            {format(ticket.lastUpdate, "MMM d, yyyy HH:mm")}
          </span>
        </div>
      </div>

      <div className="flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onAssign(ticket.id)}>
              <UserPlus className="mr-2 h-4 w-4" />
              Assign
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onComment(ticket.id)}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Comment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const getPriorityColor = (priority: string): string => {
  const colors = {
    critical: "text-red-500",
    high: "text-orange-500",
    medium: "text-yellow-500",
    low: "text-green-500",
  };
  return colors[priority as keyof typeof colors] || colors.medium;
};

const getStatusVariant = (
  status: string,
): "default" | "secondary" | "destructive" => {
  const variants = {
    open: "default",
    "in-progress": "secondary",
    resolved: "default",
    closed: "destructive",
    pending: "secondary",
  };
  return variants[status as keyof typeof variants] || "default";
};

export default TicketRow;
