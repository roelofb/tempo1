import React from "react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

interface CategoryFilterProps {
  selectedCategories?: string[];
  onCategorySelect?: (categoryId: string) => void;
}

const defaultCategories = [
  { id: "1", name: "Technical Issue" },
  { id: "2", name: "Billing" },
  { id: "3", name: "Feature Request" },
  { id: "4", name: "Bug Report" },
  { id: "5", name: "Account Access" },
  { id: "6", name: "Performance" },
  { id: "7", name: "Security" },
  { id: "8", name: "Documentation" },
];

const CategoryFilter = ({
  selectedCategories = [],
  onCategorySelect = () => {},
}: CategoryFilterProps) => {
  return (
    <div className="w-[280px] bg-background p-4 rounded-lg border">
      <div className="space-y-4">
        <div>
          <Label>Issue Categories</Label>
          <ScrollArea className="h-[160px] w-full rounded-md border p-2 mt-2">
            <div className="space-y-2">
              {defaultCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted"
                >
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => onCategorySelect(category.id)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
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

export default CategoryFilter;
