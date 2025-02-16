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
  { date: "2024-01", desktop: 26 },
  { date: "2024-02", desktop: 100 },
  { date: "2024-03", desktop: 26 },
  { date: "2024-04", desktop: 97 },
  { date: "2024-05", desktop: 56 },
  { date: "2024-06", desktop: 82 },
  { date: "2024-07", desktop: 10 },
  { date: "2024-08", desktop: 55 },
  { date: "2024-09", desktop: 32 },
  { date: "2024-10", desktop: 66 },
  { date: "2024-11", desktop: 89 },
  { date: "2024-12", desktop: 100 },
]

const chartConfig = {
  desktop: {
    label: "Total Income",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Profit Percent",
    color: "hsl(var(--chart-2))",
  }
}

export function ChartHorizontal() {

  const total = useMemo(() => ({
    desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
    mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
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
        {["desktop", "mobile"].map(function(key) {
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
              dataKey="desktop"
              type="monotone"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
          
        </ChartContainer>
      </CardContent>
    </Card>
    
  )
}
