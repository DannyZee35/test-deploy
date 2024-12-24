"use client"
import { MoreVertical } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = [
  {
    accessorKey: "batchId",
    header: "Batch ID",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
  {
    accessorKey: "inspectedBy",
    header: "Inspected By",
  },
  {
    accessorKey: "totalQty",
    header: "Total Qty",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "passed",
    header: "Passed",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
        return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
              <DropdownMenuItem>Start Inspection</DropdownMenuItem>

                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem className="text-custom-error">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
    }
  }
]
 