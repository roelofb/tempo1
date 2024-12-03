import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CommentFormProps {
  ticketId?: string;
  onSubmit?: (comment: string) => void;
  onCancel?: () => void;
}

const CommentForm = ({
  ticketId = "TICKET-123",
  onSubmit = () => {},
  onCancel = () => {},
}: CommentFormProps) => {
  const [comment, setComment] = React.useState("");

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <div className="w-[460px] bg-background p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Add Comment</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="ticket-id">Ticket ID</Label>
            <p className="text-sm text-muted-foreground mt-1">{ticketId}</p>
          </div>

          <div>
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              id="comment"
              placeholder="Type your comment here..."
              className="mt-1.5 min-h-[120px]"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} disabled={!comment.trim()}>
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;
