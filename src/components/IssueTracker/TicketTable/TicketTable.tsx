import React from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import TicketRow from "./TicketRow";

interface TicketTableProps {
  tickets?: Array<{
    id: string;
    clientName: string;
    status: string;
    priority: string;
    lastUpdate: Date;
    title: string;
  }>;
  onSort?: (column: string) => void;
  onStatusChange?: (ticketId: string, status: string) => void;
  onAssign?: (ticketId: string) => void;
  onComment?: (ticketId: string) => void;
}

const defaultTickets = [
  {
    id: "TICKET-123",
    clientName: "Acme Corp",
    status: "open",
    priority: "high",
    lastUpdate: new Date(),
    title: "System Performance Issues",
  },
  {
    id: "TICKET-124",
    clientName: "TechStart Inc",
    status: "in-progress",
    priority: "medium",
    lastUpdate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    title: "Feature Implementation Request",
  },
  {
    id: "TICKET-125",
    clientName: "Global Solutions",
    status: "resolved",
    priority: "low",
    lastUpdate: new Date(Date.now() - 48 * 60 * 60 * 1000),
    title: "User Authentication Bug",
  },
];

const TicketTable = ({
  tickets = defaultTickets,
  onSort = () => {},
  onStatusChange = () => {},
  onAssign = () => {},
  onComment = () => {},
}: TicketTableProps) => {
  return (
    <div className="w-full bg-background border rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="border-b">
        <div className="flex items-center p-4">
          <div className="flex items-center space-x-4 flex-grow">
            <div className="min-w-[100px]">
              <Button
                variant="ghost"
                className="hover:bg-transparent"
                onClick={() => onSort("id")}
              >
                Ticket ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="min-w-[200px]">
              <Button
                variant="ghost"
                className="hover:bg-transparent"
                onClick={() => onSort("clientName")}
              >
                Client
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="min-w-[150px]">
              <Button
                variant="ghost"
                className="hover:bg-transparent"
                onClick={() => onSort("title")}
              >
                Title
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="min-w-[100px]">
              <Button
                variant="ghost"
                className="hover:bg-transparent"
                onClick={() => onSort("status")}
              >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="min-w-[100px]">
              <Button
                variant="ghost"
                className="hover:bg-transparent"
                onClick={() => onSort("priority")}
              >
                Priority
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="min-w-[150px]">
              <Button
                variant="ghost"
                className="hover:bg-transparent"
                onClick={() => onSort("lastUpdate")}
              >
                Last Update
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="w-[48px]"></div>
        </div>
      </div>

      {/* Table Body */}
      <ScrollArea className="h-[calc(100vh-300px)]">
        {tickets.map((ticket) => (
          <TicketRow
            key={ticket.id}
            ticket={ticket}
            onStatusChange={onStatusChange}
            onAssign={onAssign}
            onComment={onComment}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default TicketTable;
