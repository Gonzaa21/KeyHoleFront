"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useMemo } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-01", income: 5000 },
  { date: "2024-02", income: 5500 },
  { date: "2024-03", income: 6000 },
  { date: "2024-04", income: 7000 },
  { date: "2024-05", income: 7500 },
  { date: "2024-06", income: 8500 },
  { date: "2024-07", income: 8750 },
  { date: "2024-08", income: 9250 },
  { date: "2024-09", income: 10000 },
  { date: "2024-10", income: 10100 },
  { date: "2024-11", income: 10500 },
  { date: "2024-12", income: 11000 },
]

const chartConfig = {
  income: {
    label: "Tot. Inc.",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit %",
    color: "hsl(var(--chart-2))",
  }
}

export function ChartHorizontal() {

  const total = useMemo(() => ({
    income: chartData.reduce((acc, curr) => acc + curr.income, 0),
    profit: chartData.reduce((acc, curr) => acc + curr.profit, 0),
  }), []);

  const monthTicks = chartData
  .map((entry) => ({
    date: entry.date,
    month: new Date(entry.date).getMonth(),
  }))
  .filter((entry, index, self) => 
    index === self.findIndex((e) => e.month === entry.month)
  )
  .map((entry) => entry.date);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
      <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
        <CardTitle>Total income during the year</CardTitle>
        <CardDescription>Income chart by month</CardDescription>
      </div>
      <div className="flex">
        {["income", "profit"].map(function(key) {
          const chart = key;
          return (
            <button
              key={chart}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 min-w-fit">
              <span className="text-xs text-muted-foreground">
                {chartConfig[chart].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total[key].toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", { month: "short" });
              }}
              ticks={monthTicks}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="income"
              type="monotone"
              fill="var(--color-income)"
              fillOpacity={0.4}
              stroke="var(--color-income)"
            />
          </AreaChart>
          
        </ChartContainer>
      </CardContent>
    </Card>
    
  )
}
