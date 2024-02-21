import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Playground from "./Pages/Playground";
import Overview from "./Pages/Overview";
import Partners from "./Pages/Partners";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/overview" element={<Overview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
