import { useGlobalContext } from "../contexts/GlobalContext";
import { showCards } from "../functions/utilities";
export default function Home() {
    const { movies, series, topMovies, topSeries, searchResults } = useGlobalContext()

    return (
        <>
            <div className="container">
                <div className="p-5 my-4 bg-dark rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold text-white">Welcome to <span className="text-danger">Netflix</span></h1>
                        <p className="col-md-8 fs-4 text-white">
                            Dive into the world of movies with trailers, ratings, and more.🍿
                        </p>
                        <p className="col-md-8 fs-4 text-white">
                            Get started right now and enjoy your time with us!
                        </p>
                        <button className="btn btn-danger btn-lg mt-5" type="button">
                            Register Now.
                        </button>
                    </div>
                </div>

                <h2 className="text-white mt-5 mb-3">Top rated Movies</h2>
                <div className="row">
                    {movies && movies.length > 0 ? showCards(movies) : showCards(topMovies)}
                </div>
                <h2 className="text-white mt-5 mb-3">Top rated Series</h2>
                <div className="row">
                    {series && series.length > 0 ? showCards(series) : showCards(topSeries)}
                </div>
            </div>

        </>
    )
}