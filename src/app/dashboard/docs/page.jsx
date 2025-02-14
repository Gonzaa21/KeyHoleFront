import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function Documentation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">Documentation</CardTitle>
                <CardDescription>How to use and information</CardDescription>
                <Separator/>
            </CardHeader>
            <CardContent>
                <p>An application designed to help users manage their personal finances efficiently. With this plataform, the users can register their incomes and expenses, investments and objectives</p>
            </CardContent>
            <CardFooter className="flex flex-wrap md:flex-nowrap">
                <h1 className="font-semibold text-xl leading-none tracking-tight pb-3 md:pb-0 md:pr-3">Getting started</h1>
                <p>To start using this web, browse between categories and complete with appropiate information and that's it! When you return to this website the data will have been saved locally.</p>
            </CardFooter>
            <CardHeader className="px-6 pt-6 pb-0">
                <CardTitle className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0">Principal Content</CardTitle>
                <Separator/>
            </CardHeader>
            <CardContent>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Objectives: list of your goals to reach</li>
                <li>Calendar: Write down important dates</li>
                <li>Incomes/spent: manage your income and expenses</li>
                <li>Investments: manage your investments</li>
            </ul>
            </CardContent>
        </Card>

    )
}

export default Documentation;