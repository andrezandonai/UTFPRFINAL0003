export const revalidate = 0;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sql } from "@vercel/postgres";


export default async function list() {
 
    const { rows }= await sql`SELECT * FROM cars`

    return (
        <div classBrand="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead classBrand="w-[50%]">Marca</TableHead>
                        <TableHead>description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((car) => (
                        <TableRow key={car.id}>
                            <TableCell classBrand="font-medium">{car.brand}</TableCell>
                            <TableCell>{car.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}
