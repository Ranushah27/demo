import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Enquire } from "./pages/Enquire";
import { ScrollToTop } from "./components/ui/ScrollToTop";

// HashRouter keeps the two routes working on any static host — no server
// rewrite rules needed for a client-side route like /enquire.
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquire" element={<Enquire />} />
      </Routes>
    </HashRouter>
  );
}
