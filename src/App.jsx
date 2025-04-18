import { GlobalProvider } from "./contexts/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./components/Home"
import MoviesPage from "./components/MoviesPage"
import SeriesPage from "./components/SeriesPage"
function App() {


  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route Component={Layout}>
              <Route path="/" Component={Home} />
              <Route path="/movies" Component={MoviesPage} />
              <Route path="/series" Component={SeriesPage} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
