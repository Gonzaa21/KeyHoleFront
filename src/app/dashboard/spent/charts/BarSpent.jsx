"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Data
const chartData = [
  { month: "January", expenses: 2750 },
  { month: "February", expenses: 3000 },
  { month: "March", expenses: 3500 },
  { month: "April", expenses: 3750 },
  { month: "May", expenses: 4250 },
  { month: "June", expenses: 4375 },
]

// Config
const chartConfig = {
  expenses: {
    label: "Exp.",
    color: "hsl(var(--chart-1))",
  },
}

export function BarSpent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary Expenses</CardTitle>
        <CardDescription>Bar Chart</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total expenses for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
