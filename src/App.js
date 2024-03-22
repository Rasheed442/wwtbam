import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Playground from "./Pages/Playground";
import Overview from "./Pages/Overview";
import Partners from "./Pages/Partners";
import History from "./Pages/History";
import Hotseatplay from "./Pages/Games/Hotseatplay";
import Audienceplay from "./Pages/Games/Audienceplay";
import HomePlay from "./Pages/Games/HomePlay";
import PartnerHotseatplay from "./Pages/Games/PartnerHotSeatPlay";
import PartnerAudienceplay from "./Pages/Games/PartnerAudiencePlayj";
import PartnerHomeplay from "./Pages/Games/PartnerHomePlay";

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
            <Route
              path="/partner/hotseatplay"
              element={<PartnerHotseatplay />}
            />
            <Route
              path="/partner/audienceplay"
              element={<PartnerAudienceplay />}
            />
            <Route path="/partner/homeplay" element={<PartnerHomeplay />} />
            <Route path="/audience" element={<Audienceplay />} />
            <Route path="/homeplay" element={<HomePlay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
