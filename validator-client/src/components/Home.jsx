import { useState, useEffect } from "react";
import axios from "axios";
import API from "./Api";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMsg = async () => {
    try {
      const res = await axios.get(`${API}`);
      console.log(res.data);
      setMsg(res.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMsg();
  }, []);

  

  return (
    <div>
      {loading ? "Loading..." : `This is message from response: ${msg}`}
    </div>
  );
}