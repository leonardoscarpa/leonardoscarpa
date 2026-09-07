import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { ExerciseDetail } from "./pages/ExerciseDetail";
import { SessionGenerator } from "./pages/SessionGenerator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="biblioteca" element={<Library />} />
          <Route path="biblioteca/:id" element={<ExerciseDetail />} />
          <Route path="generador" element={<SessionGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
