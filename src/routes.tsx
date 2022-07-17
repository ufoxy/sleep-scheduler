import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SleepOrWakeUp from "./components/sleep-or-wakeup";
import SelectTime from "./components/select-time";
import Schedule from "./components/schedule";
import About from "./pages/guide";
import Home from "./pages/home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* em desenvolvimento... 
        <Route path="/home" element={<Home />} />
        <Route path="/guide" element={<About />} /> */}
        <Route path="/" element={<SleepOrWakeUp />} />
        <Route path="/select-time" element={<SelectTime />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}
