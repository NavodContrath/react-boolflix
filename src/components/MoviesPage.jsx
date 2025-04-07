import { useGlobalContext } from "../contexts/GlobalContext";
import { showFlag, showRating } from "../functions/utilities";

export default function MoviesPage() {
    const { movies } = useGlobalContext()
    return (
        <>
            <div className="container my-5">
                <h2 className="text-white">Movies..</h2>
                <div className="row">
                    {
                        movies.map(movie => {
                            return (
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 d-flex" key={movie.id}>
                                    <div className="card bg-dark h-100 w-100" >
                                        <img className="card-img-top img-fluid" src={(movie.poster_path !== null) ? `https://image.tmdb.org/t/p/w342` + movie.poster_path : "/images/error.jpg"} alt="Title" />
                                        <div className="card-body text-white">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <h6 className="card-subtitle">{movie.original_title}</h6>
                                            <div className="flag-img mt-2">
                                                {showFlag(movie)}
                                            </div>
                                            <div className="star-rating mt-2">
                                                {showRating(movie)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}