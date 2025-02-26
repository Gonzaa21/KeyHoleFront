import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Layout from "./app/dashboard/layout";
import Page from "./app/dashboard/page.jsx";
import Docs from "./app/dashboard/docs/page.jsx";
import Objectives from "./app/dashboard/objectives/page";
import Calendar from "./app/dashboard/calendar/page";
import Income from "./app/dashboard/income/page";
import Spent from "./app/dashboard/spent/page";
import Investments from "./app/dashboard/investments/page";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Page />} />
            <Route path="/dashboard/docs" element={<Docs />} />
            <Route path="/dashboard/objectives" element={<Objectives />} />
            <Route path="/dashboard/calendar" element={<Calendar />} />
            <Route path="/dashboard/income" element={<Income />} />
            <Route path="/dashboard/spent" element={<Spent />} />
            <Route path="/dashboard/investments" element={<Investments />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
