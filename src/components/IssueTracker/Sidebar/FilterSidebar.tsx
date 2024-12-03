import React from "react";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientFilter from "./ClientFilter";
import CategoryFilter from "./CategoryFilter";

interface FilterSidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  selectedClients?: string[];
  selectedCategories?: string[];
  onClientSelect?: (clientId: string) => void;
  onCategorySelect?: (categoryId: string) => void;
}

const FilterSidebar = ({
  isCollapsed = false,
  onToggle = () => {},
  selectedClients = [],
  selectedCategories = [],
  onClientSelect = () => {},
  onCategorySelect = () => {},
}: FilterSidebarProps) => {
  return (
    <div
      className={`h-full bg-background border-r transition-all duration-300 ${isCollapsed ? "w-[60px]" : "w-[320px]"}`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        {!isCollapsed && <h2 className="text-lg font-semibold">Filters</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={`${isCollapsed ? "mx-auto" : ""}`}
        >
          {isCollapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>

      {!isCollapsed && (
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-65px)]">
          <ClientFilter
            selectedClients={selectedClients}
            onClientSelect={onClientSelect}
          />
          <CategoryFilter
            selectedCategories={selectedCategories}
            onCategorySelect={onCategorySelect}
          />
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
