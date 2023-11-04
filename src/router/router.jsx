import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbox from "../views/Chatbox";
import Welcome from "../views/Welcome";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chatbox />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
