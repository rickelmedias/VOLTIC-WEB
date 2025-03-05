"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Helper function to format the id input by inserting a hyphen every 4 characters.
function formatId(value: string) {
  const cleaned = value.replace(/-/g, "")
  let formatted = ""
  for (let i = 0; i < cleaned.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += "-"
    }
    formatted += cleaned[i]
  }
  return formatted
}

// Define the schema with zod, including a regex for the id field.
const formSchema = z.object({
  id: z
    .string()
    .regex(
      /^[a-zA-Z0-9]{4}(?:-[a-zA-Z0-9]{4}){0,2}$/,
      { message: "O identificador deve estar no formato xxxx-xxxx-xxxx." }
    ),
  device: z
    .string()
    .min(2, { message: "O nome deve conter pelo menos 2 letras." })
    .max(16, { message: "O nome não pode ter mais de 16 letras." }),
  description: z
    .string()
    .max(32, { message: "A descrição não pode ter mais de 32 letras." }),
})

export default function Page() {
  // Initialize the form with react-hook-form and the zod schema.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      device: "",
      description: "",
    },
  })

  // Define your onSubmit logic
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => {
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              // Remove existing hyphens
              let raw = e.target.value.replace(/-/g, "")
              // Limit the input to a maximum of 12 hexadecimal characters
              if (raw.length > 12) {
                raw = raw.slice(0, 12)
              }
              const formatted = formatId(raw)
              field.onChange(formatted)
            }
            return (
              <FormItem>
                <FormLabel>Identificador do Dispositivo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex: da39-a3ee-5e6b"
                    value={field.value}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormDescription>
                  No dispositivo físico você encontrará o identificador que permite associar o dispositivo à sua conta.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="device"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Dispositivo</FormLabel>
              <FormControl>
                <Input placeholder="Nome do dispositivo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Descrição do dispositivo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
