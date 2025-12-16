import { useEffect, useState } from "react";
import api from "../api";

export default function Stats() {
  const [data, setData] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0,
  });

  useEffect(() => {
    const load = async () => {
      const d = await api.get("/users/doctors");
      const p = await api.get("/users/patients");
      const a = await api.get("/appointments");

      setData({
        doctors: d.data.length,
        patients: p.data.length,
        appointments: a.data.length,
      });
    };
    load();
  }, []);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p>Total Doctors</p>
        <h2>{data.doctors}</h2>
      </div>
      <div className="stat-card">
        <p>Total Patients</p>
        <h2>{data.patients}</h2>
      </div>
      <div className="stat-card">
        <p>Appointments</p>
        <h2>{data.appointments}</h2>
      </div>
    </div>
  );
}
