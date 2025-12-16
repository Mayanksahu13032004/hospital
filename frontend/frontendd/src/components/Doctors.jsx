import { useEffect, useState } from "react";
import api from "../api";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get("/users/doctors").then(res => setDoctors(res.data));
  }, []);

  return (
    <>
      <h3 className="card-title">Doctors</h3>
      {doctors.map(d => (
        <div key={d._id} className="list-item">
          {d.name} ({d.email})
        </div>
      ))}
    </>
  );
}
