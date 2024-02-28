import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./routes";
import HomeIndex from "./routes/Home/HomeIndex";
import HomeResult from "./routes/Home/HomeResult";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
            <Route index element={<Navigate to="/home"/>} />
            <Route path="/home" element={<HomeIndex />} />
            <Route  path="/home-result" element={<HomeResult />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
