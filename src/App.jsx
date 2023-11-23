import { Router, Routes, Route } from "./Exporter";
import { Home } from "./Exporter";

function App() {
  return (
    <>
      <Router>
        <Routes path="/">
          <Route index element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
