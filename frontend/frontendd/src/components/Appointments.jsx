import { useEffect, useState } from "react";
import api from "../api";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get("/appointments").then(res => setAppointments(res.data));
  }, []);

  return (
    <>
      <h3 className="card-title">Recent Appointments</h3>

      {appointments.length === 0 ? (
        <p>No appointments scheduled</p>
      ) : (
        appointments.map(a => (
          <div key={a._id} className="appointment">
            <p>{a.patient?.name} → {a.doctor?.name}</p>
            <small>{a.date} | {a.time}</small>
            <div className={`status ${a.status === "Cancelled" ? "cancelled" : "booked"}`}>
              {a.status}
            </div>
          </div>
        ))
      )}
    </>
  );
}
