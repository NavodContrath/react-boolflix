import { useGlobalContext } from "../contexts/GlobalContext";

export default function SeriesPage() {
    const { series } = useGlobalContext()
    const serieLanguages = {
        en: "/images/us.svg",
        it: "/images/it.svg",
        fr: "/images/fr.svg",
        ja: "/images/jp.svg",
        es: "/images/es.svg",
        zh: "/images/cn.svg",
        de: "/images/de.svg",
        cn: "/images/cn.svg",
        hi: "/images/in.svg"
    }
    const rating = [1, 2, 3, 4, 5]

    return (
        <>
            <div className="container my-5">
                <h2 className="text-white">TV Series..</h2>
                <div className="row">
                    {
                        series.map(serie => {
                            const flagImage = serieLanguages[serie.original_language];
                            return (
                                <div className="col-lg-2 h-100" key={serie.id}>
                                    <div className="card bg-dark my-3">
                                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342` + serie.poster_path} width={"100%"} alt="Title" />

                                        <div className="card-body text-white">
                                            <h3 className="card-title">{serie.name}</h3>
                                            <h4 className="card-subtitle">{serie.original_name}</h4>
                                            {flagImage ? (
                                                <img src={flagImage} alt={serie.original_language} width="30" height="20" className="my-3" />) : (
                                                <h5 className="card-text">{serie.original_language}</h5>)
                                            }
                                            <div className="star-rating mt-2">
                                                {rating.map((star) => (
                                                    star <= Math.floor(serie.vote_average / 2) ?
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