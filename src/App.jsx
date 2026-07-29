import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import About from "./sections/About.jsx";
import Events from "./sections/Events.jsx";
import Schedule from "./sections/Schedule.jsx";
import Jury from "./sections/Jury.jsx";
import Venue from "./sections/Venue.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Jury />
        <Venue />
      </main>
      <Footer />
    </>
  );
}
