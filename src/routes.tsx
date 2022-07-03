import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SleepOrWakeUp from "./components/sleep-or-wakeup";
import SelectTime from "./components/select-time";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<SleepOrWakeUp />} />
                <Route path="/h" element={<SelectTime />} />
                {/* <Route path="/h" element={} /> */}
            </Routes>
        </Router>
    );
}