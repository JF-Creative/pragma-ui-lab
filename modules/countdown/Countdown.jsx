import { useEffect, useState } from "react";
import "./countdownStyles.css";

import { countdownTimer } from "./countdownTimer"
export default function Countdown({ deadTime = "2027-01-01T00:00:00" }) {
  //STATE
  const [data, setData] = useState(countdownTimer(deadTime));

    
  //EFFECT
  useEffect(() => {
    const interval = setInterval(() => setData(countdownTimer(deadTime)), 1000);

    return () => clearInterval(interval);

  }, [deadTime]);

  return (
    <div className="timer">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="bloqTime">
          <h1>{value}</h1>
          <h2>{key}</h2>
        </div>
      ))}

    </div>
  );
}
