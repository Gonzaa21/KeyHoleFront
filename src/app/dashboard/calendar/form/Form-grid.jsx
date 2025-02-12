import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import DateInput from "./DateInput";

export function FormGrid() {
    return (
        <div className="grid gap-2">
            <div className="flex flex-col md:flex-row gap-2">
                <DateInput className="w-full md:w-auto h-[40px]" />
                <Textarea className="flex-1 h-[40px] min-h-0 p-2 resize-none" placeholder="Type your message here." />
            </div>
            <Button className="w-full">Save in calendar</Button>
        </div>
    )
}
