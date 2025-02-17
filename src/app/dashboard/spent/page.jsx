import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarSpent } from "./charts/BarSpent";
import { DonutSpent } from "./charts/DonutSpent";
import { MoneyInput } from "../income/form/MoneyInput";
import { MonthSelect } from "../income/form/MonthSelect";
import { Button } from "@/components/ui/button";
import { CategorySelect } from "./form/CategorySelect";

function Spent() {
    return (
        <>
            <div className="mb-4">
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                    💸 I Expenses
                </h3>
                <code className="relative rounded bg-muted px-2 py-1 font-mono text-sm font-thin text-gray-600">
                    Indicate your expenses per month
                </code>
            </div>

            <Card>
                <CardHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <BarSpent />
                        <DonutSpent />
                    </div>
                </CardHeader>
            </Card>

            <Card className="w-full mt-4">
                <CardHeader>
                    <CardTitle>Enter your expenses and select the month</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                    <MoneyInput className="w-full sm:w-auto" />
                    <MonthSelect className="w-full sm:w-auto" />
                    <CategorySelect className="w-full sm:w-auto" />
                    <Button type="submit" className="w-full sm:w-auto">Save</Button>
                </CardContent>
            </Card>
        </>
    )
}


export default Spent;