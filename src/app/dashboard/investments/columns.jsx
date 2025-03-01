"use client"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export const columns = [
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    accessorKey: "ticker",
    header: "Ticker",
    cell: ({ row }) => {
        const column = row.original
        return <Badge variant="outline" className="text-gray-600">{column.ticker}</Badge>
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "investment",
    header: "Investment",
  },
  {
    accessorKey: "profit",
    header: "Profit",
  },
]