import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TaxInfo {
  country: string;
  taxType: string;
  standardRate: string;
}

const taxData: TaxInfo[] = [
  {
    country: "Nepal",
    taxType: "VAT",
    standardRate: "13%",
  },
  {
    country: "India",
    taxType: "GST",
    standardRate: "0% - 28%",
  },

  {
    country: "USA",
    taxType: "Sales Tax (State-based)",
    standardRate: "0% - 10%",
  },
];

export default function TaxTable() {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold tracking-tight mb-4">
        Tax Systems Comparison
      </h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Country</TableHead>
              <TableHead className="font-semibold">Tax Type</TableHead>
              <TableHead className="font-semibold">Standard Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taxData.map((tax) => (
              <TableRow key={tax.country}>
                <TableCell className="font-medium">{tax.country}</TableCell>
                <TableCell>{tax.taxType}</TableCell>
                <TableCell>{tax.standardRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
