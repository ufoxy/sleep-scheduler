import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SleepOrWakeUp from "./components/sleep-or-wakeup";
import SelectTime from "./components/select-time";
import Schedule from "./components/schedule";
import Home from "./pages/home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="" element={<SleepOrWakeUp />} />
        <Route path="/select-time" element={<SelectTime />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}
