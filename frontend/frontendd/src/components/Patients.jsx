import { useEffect, useState } from "react";
import api from "../api";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get("/users/patients").then(res => setPatients(res.data));
  }, []);

  return (
    <>
      <h3 className="card-title">Patients</h3>
      {patients.map(p => (
        <div key={p._id} className="list-item">
          {p.name} ({p.email})
        </div>
      ))}
    </>
  );
}
