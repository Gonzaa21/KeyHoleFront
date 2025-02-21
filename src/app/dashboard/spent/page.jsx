import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarSpent } from "./charts/BarSpent";
import { DonutSpent } from "./charts/DonutSpent";
import { MoneyInput } from "../income/form/MoneyInput";
import { MonthSelect } from "../income/form/MonthSelect";
import { Button } from "@/components/ui/button";
import { CategorySelect } from "./form/CategorySelect";

function Spent() {
    const { control, handleSubmit, setValue } = useForm();
    const [jsonData, setJsonData] = useState(null);
  
    const onSubmit = (data) => {
      const jsonData = JSON.stringify(data);
      setJsonData(jsonData);
      console.log("Datos en JSON:", jsonData);
  
        fetch("http://127.0.0.1:5000/dashboard/spent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: jsonData,
        })
        .then(response => response.json())
        .then(result => console.log("Respuesta del backend:", result))
        .catch(error => console.error("Error:", error));
    };

    return (
        <>
            <div className="mb-4">
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                    💸 I Expenses
                </h3>
                <code className="relative rounded bg-muted px-2 py-1 font-mono text-sm font-thin text-gray-600">
                    Indicate your expenses per month
                </code>
            </div>

            <Card>
                <CardHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <BarSpent />
                        <DonutSpent />
                    </div>
                </CardHeader>
            </Card>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="w-full mt-4">
                    <CardHeader>
                        <CardTitle>Enter your expenses and select the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                        <MoneyInput className="w-full sm:w-auto" setValue={setValue} />
                        <Controller name="month" control={control} render={({ field }) => <MonthSelect {...field} />} />
                        <Controller name="category" control={control} render={({ field }) => <CategorySelect {...field} className="w-full sm:w-auto"/>} />
                        <Button type="submit" className="w-full sm:w-auto">Save</Button>
                    </CardContent>
                </Card>

                {jsonData && (
                    <div className="mt-4 p-2 border rounded bg-gray-100">
                        <h3 className="font-semibold">Datos en JSON:</h3>
                        <pre className="text-sm">{jsonData}</pre>
                    </div>
                )}
            </form>
        </>
    )
}


export default Spent;