import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DateInput from "./DateInput";

export function FormGrid() {
    const { control, handleSubmit } = useForm();
    const [jsonData, setJsonData] = useState(null);

    const onSubmit = (data) => {
        const jsonData = JSON.stringify({
            ...data,
            date: data.date ? data.date.toISOString().split("T")[0] : null,
        });

        setJsonData(jsonData);
        console.log("Datos en JSON:", jsonData);

        fetch("http://127.0.0.1:5000/dashboard/calendar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: jsonData,
        })
        .then(response => response.json())
        .then(result => console.log("Respuesta del backend:", result))
        .catch(error => console.error("Error:", error));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
                <div className="flex flex-col md:flex-row gap-2">
                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => <DateInput value={field.value} onChange={field.onChange} />}
                    />
                    <Textarea
                        className="flex-1 h-[40px] min-h-0 p-2 resize-none"
                        placeholder="Type your message here."
                        {...control.register("message")}
                    />
                </div>
                <Button type="submit" className="w-full">Save in calendar</Button>
            </div>

            {jsonData && (
                <div className="mt-4 p-2 border rounded bg-gray-100">
                    <h3 className="font-semibold">Datos en JSON:</h3>
                    <pre className="text-sm">{jsonData}</pre>
                </div>
            )}
        </form>
    );
}
