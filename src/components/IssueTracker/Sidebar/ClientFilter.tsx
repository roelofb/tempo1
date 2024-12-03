import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

interface ClientFilterProps {
  selectedClients?: string[];
  onClientSelect?: (clientId: string) => void;
}

const defaultClients = [
  { id: "1", name: "Acme Corp" },
  { id: "2", name: "TechStart Inc" },
  { id: "3", name: "Global Solutions" },
  { id: "4", name: "Digital Ventures" },
  { id: "5", name: "Innovation Labs" },
];

const ClientFilter = ({
  selectedClients = [],
  onClientSelect = () => {},
}: ClientFilterProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [clients] = React.useState(defaultClients);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-[280px] bg-background p-4 rounded-lg border">
      <div className="space-y-4">
        <div>
          <Label htmlFor="client-search">Search Clients</Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="client-search"
              placeholder="Search clients..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label>Select Clients</Label>
          <ScrollArea className="h-[160px] w-full rounded-md border p-2">
            <div className="space-y-2">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted"
                >
                  <Checkbox
                    id={`client-${client.id}`}
                    checked={selectedClients.includes(client.id)}
                    onCheckedChange={() => onClientSelect(client.id)}
                  />
                  <label
                    htmlFor={`client-${client.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {client.name}
                  </label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ClientFilter;
