import { Button } from "@/components/ui/button";
import { BarCharts } from "./charts/BarCharts";
import { ChartHorizontal } from "./charts/ChartHorizontal";
import { RadarCharts } from "./charts/RadarCharts";
import { MoneyInput } from "./form/MoneyInput";
import { MonthSelect } from "./form/MonthSelect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Income() {
    return (
        <>
            <div>
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                    💵 I Incomes
                </h3>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin text-gray-600">
                  Managing your income has never been so easy! 
                </code>
            </div>
            <ChartHorizontal />
            <div className="md:grid md:grid-cols-3 inline gap-4 flex-wrap">
                <BarCharts />
                <RadarCharts />
                
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Enter your earnings and select the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <MoneyInput />
                        <MonthSelect />
                        <Button type="submit">Save</Button>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Income;