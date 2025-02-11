import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { addMonths } from "date-fns";
import { Button } from "@/components/ui/button"
import FormDate from './form/Form'

function CalendarPage() {
    const [date, setDate] = useState(new Date())
    const nextMonth = addMonths(date, 1);
    const [month, setMonth] = useState(nextMonth);

    return (
        <>
        <FormDate/>
            <Calendar
                mode="single"
                className="rounded-md border"
                month={month} onMonthChange={setMonth}
                footer= {<Button className="mt-5" onClick={() => { const today = new Date(); setMonth(today);setDate(today); }}>Go to Today</Button>}
                onSelect={setDate}
                selected={date}
            />
        </>
    )
}

export default CalendarPage;