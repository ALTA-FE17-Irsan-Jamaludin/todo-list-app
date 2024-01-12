import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import Home from "./pages/Real/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/detail" element={<Detail />}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
