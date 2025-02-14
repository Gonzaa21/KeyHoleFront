import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TableSelect() {
  return (
    <Select >
      <SelectTrigger className="max-w-28 text-gray-600">
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="one">1</SelectItem>
          <SelectItem value="two">2</SelectItem>
          <SelectItem value="three">3</SelectItem>
          <SelectItem value="four">4</SelectItem>
          <SelectItem value="five">5</SelectItem>
          <SelectItem value="six">6</SelectItem>
          <SelectItem value="seven">7</SelectItem>
          <SelectItem value="eight">8</SelectItem>
          <SelectItem value="nine">9</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}