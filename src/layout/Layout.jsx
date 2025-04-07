import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import { NavLink } from "react-router-dom";

export default function Layout() {
    const { moviesName, setMoviesName, setSearchQuery } = useGlobalContext()
    function submitHandler(e) {
        e.preventDefault()
        setSearchQuery(moviesName)
    }
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-sm  bg-dark">
                    <div className="container d-flex align-items-center">
                        <div className="d-flex align-items-baseline">
                            <NavLink className="navbar-brand" to="/">Booflix</NavLink>
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/series">Series</NavLink>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex" onSubmit={(e) => submitHandler(e)} >
                            <input className="form-control me-sm-2" type="text" placeholder="Search" value={moviesName} onChange={(e) => setMoviesName(e.target.value)} />
                            <button className="btn btn-danger my-2 my-sm-0" type="button" onClick={() => { setSearchQuery(moviesName) }} >Search</button>
                        </form>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="py-3 mt-5">
                <nav className="navbar fixed-bottom  bg-dark">
                    <div className="container-fluid justify-content-start align-items-baseline">
                        <a className="navbar-brand" href="#">Booflix.inc°</a>
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item">
                                <a className="nav-link me-3" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </footer>
        </>
    )
}