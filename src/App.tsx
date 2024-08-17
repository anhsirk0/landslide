import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRoutes, GetRoute, Layout } from "@/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {appRoutes.map(GetRoute)}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
