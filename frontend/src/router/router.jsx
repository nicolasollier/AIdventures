import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbox from "../views/Chatbox";
import Welcome from "../views/Welcome";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/conversation" element={<Chatbox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
