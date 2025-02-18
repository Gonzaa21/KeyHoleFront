import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TableSelect } from "./TableSelect"
import { Card, CardHeader } from "@/components/ui/card"

export default function TableForm() {
  return (
    <Card>
      <CardHeader>
        <div className="grid gap-4 md:flex flex-wrap w-full items-center space-x-2">
          <Textarea className="flex-1 h-[40px] min-h-0 p-2 resize-none text-sm" placeholder="Objective" />
          <TableSelect />
          <Button type="submit">Add to table</Button>
        </div>
      </CardHeader>
    </Card>
  )
}
