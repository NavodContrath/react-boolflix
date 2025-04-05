import { GlobalProvider } from "./contexts/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import MoviesPage from "./components/MoviesPage"
import Home from "./components/Home"
function App() {


  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route Component={Layout}>
              <Route path="/" Component={Home} />
              <Route path="/movies" Component={MoviesPage} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
