import { columns } from "./columns"
import { DataTable } from "./data-table"

function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
    },
    {
      id: "728ed52f",
      priority: 100,
      status: "pending",
      title_description: "m@example.com"
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

// Terminar de hacer la tabla
// Solucionar el error del calendario