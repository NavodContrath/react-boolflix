import { useGlobalContext } from "../contexts/GlobalContext";

export default function MoviesPage() {
    const { movies } = useGlobalContext()
    return (
        <>
            <div className="container my-5">
                <h2 className="text-white">Movies..</h2>
                {
                    movies.map(movie => {
                        return (
                            <div className="card bg-dark my-3">
                                <div className="card-body text-white">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <h4 className="card-subtitle mb-2">{movie.original_title}</h4>
                                    <h5 className="card-text">{movie.original_language}</h5>
                                    <h6>{parseInt(movie.vote_average)}</h6>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </>
    )
}