import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarSpent } from "./charts/BarSpent";
import { DonutSpent } from "./charts/DonutSpent";
import { MoneyInput } from "../income/form/MoneyInput";
import { MonthSelect } from "../income/form/MonthSelect";
import { Button } from "@/components/ui/button";

function Spent() {
    return (
        <>
            <div>
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                    💸 I Expenses
                </h3>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin text-gray-600">
                    Indicate your expenses per month
                </code>
            </div>
            <Card>
                <CardHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <BarSpent />
                        <DonutSpent />
                    </div>
                </CardHeader>
            </Card>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Enter your expenses and select the month</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <MoneyInput />
                    <MonthSelect />
                    <Button type="submit">Save</Button>
                </CardContent>
            </Card>
        </>
    )
}

export default Spent;