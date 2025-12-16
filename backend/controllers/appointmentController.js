const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json({ message: "Appointment Booked" });
};

exports.cancelAppointment = async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, {
    status: "Cancelled"
  });
  res.json({ message: "Appointment Cancelled" });
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patient")
    .populate("doctor");

  res.json(appointments);
};
