import { columns } from "./columns"
import { DataTable } from "./data-table"

function getData() {
  return [
    {
      id: "728ed52f",
      priority: 95,
      status: "pending",
      objective: "Build an Emergency Fund"
    },
    {
      id: "728ed52f",
      priority: 90,
      status: "Completed",
      objective: "Create a Monthly Budget"
    },
    {
      id: "728ed52f",
      priority: 85,
      status: "pending",
      objective: "Increase Income Sources"
    },
    {
      id: "728ed52f",
      priority: 80,
      status: "Completed",
      objective: "Save for Retirement"
    },
    {
      id: "728ed52f",
      priority: 78,
      status: "pending",
      objective: "Pay Off Debt"
    },
    {
      id: "728ed52f",
      priority: 75,
      status: "Completed",
      objective: "Invest in Stocks or Real Estate"
    },
    {
      id: "728ed52f",
      priority: 72,
      status: "pending",
      objective: "Improve Credit Score"
    },
    {
      id: "728ed52f",
      priority: 70,
      status: "pending",
      objective: "Reduce Unnecessary Expenses"
    },
    {
      id: "728ed52f",
      priority: 68,
      status: "pending",
      objective: "Buy a Home"
    },
    {
      id: "728ed52f",
      priority: 65,
      status: "Completed",
      objective: "Start a Business"
    },
    {
      id: "728ed52f",
      priority: 50,
      status: "pending",
      objective: "Plan for Children's Education"
    },
    {
      id: "728ed52f",
      priority: 45,
      status: "pending",
      objective: "Achieve Financial Independence"
    },
    {
      id: "728ed52f",
      priority: 30,
      status: "Completed",
      objective: "Set a Philanthropy Goal"
    },
    
  ]
}

export default function Objectives() {
  const data = getData()

  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}