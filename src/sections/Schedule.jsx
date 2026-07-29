import SectionHeading from "../components/SectionHeading.jsx";
import { SCHEDULE } from "../data/content.js";
import "./Schedule.css";

export default function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <div className="container">
        <SectionHeading
          eyebrow="Tentative Schedule"
          title="A Day,"
          accent="Hour by Hour"
          sub="Monday, 17 August 2026 — one track becomes three parallel halls after the guest lecture."
        />
        <div className="schedule__timeline">
          {SCHEDULE.map((row, i) => (
            <div className="schedule__row" key={i}>
              <span className="schedule__dot" />
              <div className="schedule__card">
                <span className="schedule__time">{row.t}</span>
                <div>
                  <h4>{row.h}</h4>
                  {row.s && <p>{row.s}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
