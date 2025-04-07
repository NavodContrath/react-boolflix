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
                                <div className="col-lg-2 h-100" key={serie.id}>
                                    <div className="card bg-dark my-3">
                                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342` + serie.poster_path} width={"100%"} alt="Title" />
                                        <div className="card-body text-white">
                                            <h3 className="card-title">{serie.name}</h3>
                                            <h4 className="card-subtitle">{serie.original_name}</h4>
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