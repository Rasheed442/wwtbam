import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Playground from "./Pages/Playground";
import Overview from "./Pages/Overview";
import Partners from "./Pages/Partners";
import History from "./Pages/History";
import Hotseatplay from "./Pages/Games/Hotseatplay";
import Audienceplay from "./Pages/Games/Audienceplay";
import HomePlay from "./Pages/Games/HomePlay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/history" element={<History />} />
            <Route path="/hotseat" element={<Hotseatplay />} />
            <Route path="/audience" element={<Audienceplay />} />
            <Route path="/homeplay" element={<HomePlay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
