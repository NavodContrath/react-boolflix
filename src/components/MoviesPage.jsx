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
                                <div className="col-lg-2 h-100" key={movie.id}>
                                    <div className="card bg-dark my-3" >
                                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342` + movie.poster_path} width={"100%"} alt="Title" />
                                        <div className="card-body text-white">
                                            <h3 className="card-title">{movie.title}</h3>
                                            <h4 className="card-subtitle">{movie.original_title}</h4>
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