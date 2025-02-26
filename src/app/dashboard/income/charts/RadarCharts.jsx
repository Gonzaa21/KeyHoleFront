"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  { month: "July", income: 9250 },
  { month: "August", income: 10000 },
  { month: "September", income: 10100 },
  { month: "October", income: 10500 },
  { month: "November", income: 11000 },
  { month: "December", income: 9000 },
]

const chartConfig = {
    income: {
      label: "Tot. Inc.",
      color: "hsl(var(--chart-1))",
    },
};

export function RadarCharts() {
  return (
    <Card className="my-4">
      <CardHeader className="items-center pb-4">
        <CardTitle>Total income for the last 6 months</CardTitle>
        <CardDescription>
          Radar Chart
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square "
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="income"
              fill="var(--color-income)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
