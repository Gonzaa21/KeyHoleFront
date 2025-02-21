import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TableSelect } from "./TableSelect"
import { Card, CardHeader } from "@/components/ui/card"

export default function TableForm() {
  const { control, handleSubmit } = useForm();
  const [jsonData, setJsonData] = useState(null);

  const onSubmit = (data) => {
    const jsonData = JSON.stringify(data);
    setJsonData(jsonData);
    console.log("Datos en JSON:", jsonData);

      fetch("http://127.0.0.1:5000/dashboard/objectives", {
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
      <Card>
        <CardHeader>
          <div className="grid gap-4 md:flex flex-wrap w-full items-center space-x-2">
            <Controller
              name="objective"
              control={control}
              defaultValue=""
              render={({ field }) => <Textarea {...field} className="flex-1 h-[40px] min-h-0 p-2 resize-none text-sm" placeholder="Objective" />}
            />
            <Controller
              name="priority"
              control={control}
              defaultValue=""
              render={({ field }) => <TableSelect value={field.value} onChange={field.onChange} />}
            />
            <Button type="submit">Add to table</Button>
          </div>
        </CardHeader>
      </Card>

      {jsonData && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <h3 className="font-semibold">Datos en JSON:</h3>
          <pre className="text-sm">{jsonData}</pre>
        </div>
      )}
    </form>
  )
}
