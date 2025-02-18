import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function TableForm() {
  return (
    <Card>
      <CardHeader>
        <div className="grid gap-4 md:flex flex-wrap w-full items-center space-x-2">
            <Input type="text" placeholder="Ticker" className="w-max ml-2 text-sm" />
            <Textarea className="flex-1 h-[40px] min-h-0 p-2 resize-none text-sm" placeholder="Name" />
            <Input type="number" placeholder="Investment amount" className="w-max ml-2 text-sm" />
            <Input type="number" placeholder="Profit" className="w-max ml-2 text-sm" />
          <Button type="submit">Add to table</Button>
        </div>
      </CardHeader>
    </Card>
  )
}