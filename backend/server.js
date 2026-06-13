const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let recordings = [
  {
    id: 1,
    title: "Career Consultation",
    clientName: "Rahul",
    date: "2026-06-13"
  }
];

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/api/recordings", (req, res) => {
  res.json(recordings);
});

app.post("/api/recordings", (req, res) => {
  recordings.push(req.body);

  res.json({
    message: "Recording Added"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});