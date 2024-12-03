import React from "react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AssignmentFormProps {
  currentAssignee?: string;
  onAssign?: (userId: string) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const defaultTeamMembers = [
  {
    id: "1",
    name: "John Doe",
    role: "Support Engineer",
    avatar: "https://dummyimage.com/40x40/4F46E5/ffffff&text=JD",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Technical Lead",
    avatar: "https://dummyimage.com/40x40/4F46E5/ffffff&text=JS",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "Support Specialist",
    avatar: "https://dummyimage.com/40x40/4F46E5/ffffff&text=MJ",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    role: "Product Manager",
    avatar: "https://dummyimage.com/40x40/4F46E5/ffffff&text=SW",
  },
  {
    id: "5",
    name: "Alex Brown",
    role: "Developer",
    avatar: "https://dummyimage.com/40x40/4F46E5/ffffff&text=AB",
  },
];

const AssignmentForm = ({
  currentAssignee = "",
  onAssign = () => {},
  onSubmit = () => {},
  onCancel = () => {},
}: AssignmentFormProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedMember, setSelectedMember] = React.useState(currentAssignee);

  const filteredMembers = defaultTeamMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleMemberSelect = (memberId: string) => {
    setSelectedMember(memberId);
    onAssign(memberId);
  };

  return (
    <div className="w-[460px] bg-background p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Assign Ticket</h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="member-search">Search Team Members</Label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="member-search"
                placeholder="Search by name..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <ScrollArea className="h-[240px] w-full rounded-md border">
            <div className="p-4 space-y-2">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors
                    ${selectedMember === member.id ? "bg-accent" : "hover:bg-muted"}`}
                  onClick={() => handleMemberSelect(member.id)}
                >
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSubmit} disabled={!selectedMember}>
          Assign Ticket
        </Button>
      </div>
    </div>
  );
};

export default AssignmentForm;
