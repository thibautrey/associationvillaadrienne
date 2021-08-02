import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Input,
  Button,
} from "@material-ui/core";
import { useState } from "react";

import "./Proprietaires.css";
import properties from "./properties.json";

const Proprietaires = () => {
  const [owners, setOwners] = useState(properties);
  const [mode, setMode] = useState("view");

  return (
    <div className="Properties">
      <div className="ActionBar">
        <Button variant="outlined" color="primary">
          Ajouter propriétaire
        </Button>
        <Button variant="outlined" color="primary">
          {mode === "view" ? "Editer" : "Terminer"}
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Numéro</TableCell>
              <TableCell>Téléphones</TableCell>
              <TableCell>Emails</TableCell>
              <TableCell>Propriétaires</TableCell>
              <TableCell>Adresses</TableCell>
              <TableCell>Date d'achat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {owners.map(
              ({
                houseNumber,
                telephones,
                emails,
                owners,
                addresses,
                purchaseDate,
              }) => (
                <TableRow key={houseNumber}>
                  <TableCell>{houseNumber}</TableCell>
                  <TableCell>
                    {telephones.map((value, i) => (
                      <div key={`telephone${i}${houseNumber}`}>
                        {mode === "view" ? value : <Input value={value} />}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {emails.map((value, i) => (
                      <div key={`emails${i}${houseNumber}`}>
                        {mode === "view" ? value : <Input value={value} />}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {owners.map(({ name, surname }, i) => (
                      <div key={`owners${i}${houseNumber}`}>
                        {mode === "view" ? (
                          `${name} ${surname}`
                        ) : (
                          <div>
                            <Input value={name} /> <Input value={surname} />
                          </div>
                        )}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {addresses.map(({ address, city, zipcode }, i) => (
                      <div key={`owners${i}${houseNumber}`}>
                        {mode === "edit" ? (
                          <div>
                            <Input value={address} />
                            <br />
                            <Input value={city} /> <Input value={zipcode} />
                          </div>
                        ) : (
                          <div>
                            {address}
                            <br />
                            {city}, {zipcode}
                          </div>
                        )}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>{purchaseDate}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Proprietaires;
