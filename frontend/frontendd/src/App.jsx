import Register from "./components/Register";
import Login from "./components/Login";
import Doctors from "./components/Doctors";
import BookAppointment from "./components/BookAppointment";
import Appointments from "./components/Appointments";
import Dashboard from "./components/Dashboard";
import AuthFlip from "./components/AuthFlip";
function App() {
  return (
    <div style={{ padding: "20px" }}>
     <h2
  style={{
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "30px",
    background: "linear-gradient(90deg, #2563eb, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  }}
>
  Hospital Appointment System
</h2>


   <AuthFlip />;
      <Doctors />
      <BookAppointment />
      {/* <Dashboard/> */}
      <Appointments />
    </div>
  );
}

export default App;
