import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarCharts } from "./charts/BarCharts";
import { ChartHorizontal } from "./charts/ChartHorizontal";
import { RadarCharts } from "./charts/RadarCharts";
import { MoneyInput } from "./form/MoneyInput";
import { MonthSelect } from "./form/MonthSelect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Income() {
    const { control, handleSubmit, setValue } = useForm();
    const [jsonData, setJsonData] = useState(null);

    const onSubmit = (data) => {
        data.trans_type = "income";
        
        const jsonData = JSON.stringify(data);
        setJsonData(jsonData);
        console.log("Datos en JSON:", jsonData);

        fetch("key-hole-back.vercel.app/dashboard/income", {
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
            <div>
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                    💵 I Incomes
                </h3>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-thin text-gray-600">
                  Managing your income has never been so easy! 
                </code>
            </div>
            <ChartHorizontal />
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:grid md:grid-cols-3 inline gap-4 flex-wrap">
                <BarCharts />
                <RadarCharts />
                
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Enter your earnings and select the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <MoneyInput setValue={setValue} />
                        <Controller name="months" control={control} render={({ field }) => <MonthSelect {...field} />} />
                        <Button type="submit">Save</Button>
                    </CardContent>
                </Card>
            </div>

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

export default Income;