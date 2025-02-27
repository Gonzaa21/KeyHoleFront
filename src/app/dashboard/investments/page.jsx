import { columns } from './columns'
import { DataTable } from './data-table'

function getData() {
  return [
    // Data example
    {
      id: "728ed52f",
      investment: 400,
      ticker: "AAPL",
      name: "Apple",
      profit: '+5%'
    },
    {
      id: "728ed52f",
      investment: 2740,
      ticker: "MSFT",
      name: "Microsoft",
      profit: '+20%'
    },
    {
      id: "728ed52f",
      investment: 1347,
      ticker: "NVDA",
      name: "Nvidia",
      profit: '+12%'
    },
    {
      id: "728ed52f",
      investment: 600,
      ticker: "NFLX",
      name: "Netflix",
      profit: '-2%'
    },
    {
      id: "728ed52f",
      investment: 1000,
      ticker: "BAC",
      name: "Bank of America",
      profit: '+8%'
    },
    {
      id: "728ed52f",
      investment: 1098,
      ticker: "SPY",
      name: "SPDR S&P 500 ETF Trust",
      profit: '+40%'
    },
    {
      id: "728ed52f",
      investment: 7437,
      ticker: "GOOGL",
      name: "Alphabet",
      profit: '+6%'
    },
    {
      id: "728ed52f",
      investment: 1841,
      ticker: "AMZN",
      name: "Amazon",
      profit: '-36%'
    },
    {
      id: "728ed52f",
      investment: 8732,
      ticker: "META",
      name: "Meta Platforms",
      profit: '-21%'
    },
    {
      id: "728ed52f",
      investment: 9275,
      ticker: "TSLA",
      name: "Tesla, Inc.",
      profit: '+27%'
    },
    {
      id: "728ed52f",
      investment: 3967,
      ticker: "MELI",
      name: "Mercado Libre",
      profit: '+1%'
    },
    {
      id: "728ed52f",
      investment: 3627,
      ticker: "BABA",
      name: "Alibaba Group",
      profit: '+11%'
    },
    {
      id: "728ed52f",
      investment: 4825,
      ticker: "XTIA",
      name: "XTI Aerospace Inc",
      profit: '-29%'
    },
    
  ]
}

export default function Investments() {
  const data = getData()

  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}