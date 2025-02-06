import { useEffect, useState } from "react";
import './index.css'
import Page from "./app/dashboard/page.jsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <>
    <Page/>
    <text>{data}</text>
    </>
  )
}

export default App;
