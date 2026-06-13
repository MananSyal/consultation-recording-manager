import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Consultation Recording Manager</h1>

      <ul>
        <li><Link to="/upload">Upload Recording</Link></li>
        <li><Link to="/recordings">View Recordings</Link></li>
      </ul>
    </div>
  );
}

function Upload() {
  return (
    <div>
      <h1>Upload Recording</h1>

      <input placeholder="Title" />
      <br /><br />

      <input placeholder="Client Name" />
      <br /><br />

      <input type="date" />
      <br /><br />

      <textarea placeholder="Notes"></textarea>
      <br /><br />

      <button>Add Recording</button>
    </div>
  );
}

function Recordings() {
  return (
    <div>
      <h1>Recordings</h1>

      <div>
        <h3>Career Consultation</h3>
        <p>Client: Rahul</p>
        <p>Date: 13-06-2026</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/recordings" element={<Recordings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;