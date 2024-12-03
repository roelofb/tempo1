import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatusUpdateForm from "./StatusUpdateForm";
import AssignmentForm from "./AssignmentForm";
import CommentForm from "./CommentForm";

interface UpdateTicketModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  ticketId?: string;
  currentStatus?: string;
  currentAssignee?: string;
  onStatusChange?: (status: string) => void;
  onAssign?: (userId: string) => void;
  onComment?: (comment: string) => void;
}

const UpdateTicketModal = ({
  isOpen = true,
  onClose = () => {},
  ticketId = "TICKET-123",
  currentStatus = "open",
  currentAssignee = "",
  onStatusChange = () => {},
  onAssign = () => {},
  onComment = () => {},
}: UpdateTicketModalProps) => {
  const [activeTab, setActiveTab] = React.useState("status");

  const handleStatusSubmit = () => {
    onClose();
  };

  const handleAssignSubmit = () => {
    onClose();
  };

  const handleCommentSubmit = (comment: string) => {
    onComment(comment);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[500px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Update Ticket {ticketId}</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start px-6">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="assign">Assign</TabsTrigger>
            <TabsTrigger value="comment">Comment</TabsTrigger>
          </TabsList>

          <TabsContent value="status">
            <StatusUpdateForm
              currentStatus={currentStatus}
              onStatusChange={onStatusChange}
              onSubmit={handleStatusSubmit}
              onCancel={onClose}
            />
          </TabsContent>

          <TabsContent value="assign">
            <AssignmentForm
              currentAssignee={currentAssignee}
              onAssign={onAssign}
              onSubmit={handleAssignSubmit}
              onCancel={onClose}
            />
          </TabsContent>

          <TabsContent value="comment">
            <CommentForm
              ticketId={ticketId}
              onSubmit={handleCommentSubmit}
              onCancel={onClose}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTicketModal;
