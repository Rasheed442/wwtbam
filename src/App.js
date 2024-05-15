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
import { useEffect, useState } from "react";

function App() {
  const token = localStorage.getItem("token");
  const [games, setGames] = useState();

  useEffect(() => {
    //  ENDPOINT TO GET GAME ID
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_BASE_URL}getallgames`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGames(result?.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const sample = games?.map((g) => {
    console.log(g?.name.replace(/\s/g, "").toLowerCase());
  });
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
            <Route path="/weeklyplay" element={<Hotseatplay />} />
            <Route path="/audience" element={<Audienceplay />} />
            <Route path="/studioplay" element={<HomePlay />} />
            <Route
              path="/partner/hotseatplay"
              element={<PartnerHotseatplay />}
            />
            <Route
              path="/partner/audienceplay"
              element={<PartnerAudienceplay />}
            />
            <Route path="/partner/homeplay" element={<PartnerHomeplay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
