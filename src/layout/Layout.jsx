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
                    <div className="container">
                        <a className="navbar-brand" href="#">Booflix</a>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" aria-current="page">Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/series">Series</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" onSubmit={(e) => submitHandler(e)} >
                                <input className="form-control me-sm-2" type="text" placeholder="Search" value={moviesName} onChange={(e) => setMoviesName(e.target.value)} />
                                <button className="btn btn-danger my-2 my-sm-0" type="button" onClick={() => { setSearchQuery(moviesName) }} >Search</button>
                            </form>

                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="py-3 mt-5">
                <nav className="navbar fixed-bottom navbar-expand-sm bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Booflix.inc°</a>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </footer>
        </>
    )
}