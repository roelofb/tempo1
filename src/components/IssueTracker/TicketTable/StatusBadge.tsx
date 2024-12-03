import React from "react";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status?: string;
  className?: string;
}

const StatusBadge = ({ status = "open", className = "" }: StatusBadgeProps) => {
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

  const getStatusColor = (status: string): string => {
    const colors = {
      open: "bg-blue-100 text-blue-800",
      "in-progress": "bg-yellow-100 text-yellow-800",
      resolved: "bg-green-100 text-green-800",
      closed: "bg-red-100 text-red-800",
      pending: "bg-purple-100 text-purple-800",
    };
    return colors[status as keyof typeof colors] || colors.open;
  };

  return (
    <Badge
      variant={getStatusVariant(status)}
      className={`${getStatusColor(status)} capitalize ${className}`}
    >
      {status.replace("-", " ")}
    </Badge>
  );
};

export default StatusBadge;
