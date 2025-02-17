"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

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
const chartData = [
  { category: "Services", expenses: 150100, fill: "var(--color-services)" },
  { category: "Food", expenses: 200800, fill: "var(--color-food)" },
  { category: "Ent.", expenses: 320200, fill: "var(--color-entertainment)" },
  { category: "Dress", expenses: 400400, fill: "var(--color-dress)" },
  { category: "other", expenses: 590000, fill: "var(--color-other)" },
]

const chartConfig = {
  expenses: {
    label: "Expenses",
  },
  services: {
    label: "Services",
    color: "hsl(var(--chart-1))",
  },
  food: {
    label: "Food",
    color: "hsl(var(--chart-2))",
  },
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-3))",
  },
  dress: {
    label: "Dress",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

export function DonutSpent() {
  const totalExpenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.expenses, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Expenses</CardTitle>
        <CardDescription>Total expenses for this month</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="expenses"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          $ {totalExpenses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Expenses
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Showing total expenses for this month
        </div>
      </CardFooter>
    </Card>
  )
}
