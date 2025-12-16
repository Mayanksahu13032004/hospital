import Stats from "./Stats";
import Doctors from "./Doctors";
import Patients from "./Patients";
import Appointments from "./Appointments";
import BookAppointment from "./BookAppointment";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Hospital Dashboard</h1>
          <p>Welcome, one (doctor)</p>
        </div>
        <button>Logout</button>
      </div>

      <Stats />

      <div className="card">
        <BookAppointment />
      </div>

      <div className="card">
        <Doctors />
      </div>

      <div className="card">
        <Patients />
      </div>

      <div className="card">
        <Appointments />
      </div>
    </div>
  );
}
