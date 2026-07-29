import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

// 17 August 2026, 00:00 IST
const EVENT_DATE = new Date("2026-08-17T00:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = EVENT_DATE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  if (!time) {
    return (
      <div className="countdown countdown--live">
        <p className="countdown__begun">THE EVENT HAS BEGUN</p>
      </div>
    );
  }

  return (
    <div className="countdown">
      <span className="countdown__eyebrow">Event begins in</span>
      <div className="countdown__grid">
        {UNITS.map((u) => (
          <div className="countdown__cell" key={u.key}>
            <span className="countdown__glow" aria-hidden="true" />
            <span className="countdown__num">{String(time[u.key]).padStart(2, "0")}</span>
            <span className="countdown__label">{u.label}</span>
          </div>
        ))}
      </div>
      <span className="countdown__target">17 AUG 2026 &middot; COIMBATORE</span>
    </div>
  );
}
