const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role
  });

  await user.save();
  res.json({ message: "User Registered Successfully" });
};

// Login (NO JWT)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  res.json({ message: "Login Successful", user });
};
