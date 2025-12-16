import { useState } from "react";
import api from "../api";

export default function BookAppointment() {
  const [data, setData] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: ""
  });

  const book = async () => {
    await api.post("/appointments/book", data);
    alert("Appointment Booked");
  };

  return (
    <>
      <h3 className="card-title">Book Appointment</h3>

      <div className="form-grid">
        <input placeholder="Patient ID" onChange={e => setData({ ...data, patient: e.target.value })} />
        <input placeholder="Doctor ID" onChange={e => setData({ ...data, doctor: e.target.value })} />
        <input type="date" onChange={e => setData({ ...data, date: e.target.value })} />
        <input placeholder="Time" onChange={e => setData({ ...data, time: e.target.value })} />
      </div>

      <button onClick={book}>Book</button>
    </>
  );
}
