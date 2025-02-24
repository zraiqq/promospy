import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function PriceTracker() {
  const [reference, setReference] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Simulation de récupération des données (remplacer par une requête API ou scraping)
    const dummyData = [
      { site: "Site A", price: "100€", link: "#" },
      { site: "Site B", price: "95€", link: "#" },
      { site: "Site C", price: "105€", link: "#" },
    ];
    setResults(dummyData);
  };

  return (
    <div className="p-6">
      <Card className="p-4 mb-6">
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Entrez une référence produit" 
              value={reference} 
              onChange={(e) => setReference(e.target.value)} 
            />
            <Button onClick={handleSearch}>Rechercher</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Site</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Lien</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.site}</TableCell>
                  <TableCell>{result.price}</TableCell>
                  <TableCell>
                    <a href={result.link} target="_blank" className="text-blue-500">Voir</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
