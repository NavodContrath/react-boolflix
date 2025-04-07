import { useGlobalContext } from "../contexts/GlobalContext";
import { showFlag, showRating } from "../functions/utilities";


export default function SeriesPage() {
    const { series } = useGlobalContext()
    return (
        <>
            <div className="container my-5">
                <h2 className="text-white">TV Series..</h2>
                <div className="row">
                    {
                        series.map(serie => {
                            return (
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 d-flex" key={serie.id}>
                                    <div className="card bg-dark h-100 w-100">
                                        <img className="card-img-top img-fluid" src={(serie.poster_path !== null) ? `https://image.tmdb.org/t/p/w342` + serie.poster_path : "/images/error.jpg"} alt="Title" />
                                        <div className="card-body text-white">
                                            <h5 className="card-title">{serie.name}</h5>
                                            <h6 className="card-subtitle">{serie.original_name}</h6>
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
            </div >
        </>
    )
}