import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // const [message, setMessage] = useState("");
  const [data, setData] = useState("");

  const fetchData = useCallback(async () => {
    axios
      .get("http://localhost:9000/")
      .then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <>{data?.exampleMessage}</>;
}

export default App;
