
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { sql } from "@vercel/postgres";

import { redirect } from "next/navigation";


export default async function CarRegistrationForm() {
 async function registerCar(formData: FormData) {
  'use server'
  const brand = formData.get('brand') as string;
  const description = formData.get('description') as string;
  await sql`INSERT INTO  cars (brand, description) VALUES (${brand}, ${description})` 
  console.log('Carro registrado:', { brand, description})
 
  redirect('/dashboard/car/list');
 
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Cadastro de Carros</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={registerCar} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="brand">marca</Label>
              <Input type="text" id="brand" name="brand" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">descricao</Label>
              <Input type="description" id="description" name="description" required />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

