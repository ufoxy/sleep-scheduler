import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SleepOrWakeUp from "./components/Sleep or Wakeup/sleep-or-wakeup";
import SelectTime from "./components/Select Time/select-time";
import Schedule from "./components/Schedule/schedule";
import About from "./pages/guide";
import Home from "./pages/home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/guide" element={<About />} /> */}
        <Route path="/" element={<SleepOrWakeUp />} />
        <Route path="/select-time" element={<SelectTime />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}