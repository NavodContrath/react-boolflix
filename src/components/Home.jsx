import { useGlobalContext } from "../contexts/GlobalContext";
import { showFlag, showRating } from "../functions/utilities";
export default function Home() {
    const { movies, series } = useGlobalContext()

    return (
        <>
            <div className="container p-5">
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <h2>Movies</h2>
                        <div className="h-100 p-5 bg-dark border rounded-3 text-white">
                            <div className="row">
                                {
                                    movies.map(movie => {
                                        return (
                                            <div className="col-lg-3 h-100" key={movie.id}>
                                                <div className="card bg-black my-3" >
                                                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342` + movie.poster_path} width={"100%"} alt="Title" />
                                                    <div className="card-body">
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
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Series</h2>
                        <div className="h-100 p-5 bg-dark border rounded-3 text-white mb-3">
                            <div className="row">
                                {
                                    series.map(serie => {
                                        return (
                                            <div className="col-lg-3 h-100" key={serie.id}>
                                                <div className="card bg-black my-3" >
                                                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342` + serie.poster_path} width={"100%"} alt="Title" />
                                                    <div className="card-body">
                                                        <div className="flag-img mt-2">
                                                            {showFlag(serie)}
                                                        </div>
                                                        <div className="star-rating mt-2">
                                                            {showRating(serie)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}