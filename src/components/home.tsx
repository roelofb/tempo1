import React from "react";
import FilterSidebar from "./IssueTracker/Sidebar/FilterSidebar";
import SearchPanel from "./IssueTracker/SearchPanel/SearchPanel";
import TicketTable from "./IssueTracker/TicketTable/TicketTable";
import UpdateTicketModal from "./IssueTracker/Modals/UpdateTicketModal";
import { DateRange } from "react-day-picker";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const [selectedClients, setSelectedClients] = React.useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = React.useState("");
  const [dateRange, setDateRange] = React.useState<DateRange>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });
  const [selectedStatus, setSelectedStatus] = React.useState("open");
  const [selectedPriority, setSelectedPriority] = React.useState("medium");
  const [selectedTicket, setSelectedTicket] = React.useState<{
    id: string;
    status: string;
    assignee: string;
  }>({ id: "", status: "", assignee: "" });

  const handleClientSelect = (clientId: string) => {
    setSelectedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId],
    );
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleTicketAction = (ticketId: string, action: string) => {
    setSelectedTicket({
      id: ticketId,
      status: selectedStatus,
      assignee: "",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <FilterSidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        selectedClients={selectedClients}
        selectedCategories={selectedCategories}
        onClientSelect={handleClientSelect}
        onCategorySelect={handleCategorySelect}
      />

      <div className="flex-1 flex flex-col overflow-hidden p-6 space-y-6">
        <SearchPanel
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          selectedPriority={selectedPriority}
          onPriorityChange={setSelectedPriority}
        />

        <TicketTable
          onStatusChange={(ticketId) => handleTicketAction(ticketId, "status")}
          onAssign={(ticketId) => handleTicketAction(ticketId, "assign")}
          onComment={(ticketId) => handleTicketAction(ticketId, "comment")}
        />
      </div>

      <UpdateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ticketId={selectedTicket.id}
        currentStatus={selectedTicket.status}
        currentAssignee={selectedTicket.assignee}
        onStatusChange={(status) => {
          setSelectedStatus(status);
          setIsModalOpen(false);
        }}
        onAssign={(userId) => {
          setSelectedTicket((prev) => ({ ...prev, assignee: userId }));
          setIsModalOpen(false);
        }}
        onComment={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
