import { useGlobalContext } from "../contexts/GlobalContext";
import showFlag from "../functions/utilities";

export default function SeriesPage() {
    const { series } = useGlobalContext()
    const rating = [1, 2, 3, 4, 5]
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
                                            {showFlag(serie)}
                                            <div className="star-rating mt-2">
                                                {rating.map((star) => (
                                                    star <= Math.ceil(serie.vote_average / 2) ?
                                                        (<i key={star} className="fa-star me-1 fa-solid text-warning"></i>) :
                                                        (<i key={star} className="fa-star me-1 fa-regular text-secondary"></i>)
                                                ))}
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