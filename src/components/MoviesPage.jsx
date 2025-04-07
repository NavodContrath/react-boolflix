import { useGlobalContext } from "../contexts/GlobalContext";

export default function MoviesPage() {
    const { movies } = useGlobalContext()
    const movieLanguages = {
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
                <h2 className="text-white">Movies..</h2>
                <div className="row">
                    {
                        movies.map(movie => {
                            const flagImage = movieLanguages[movie.original_language];
                            return (
                                <div className="col-lg-2 h-100" key={movie.id}>
                                    <div className="card bg-dark my-3" >
                                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342` + movie.poster_path} width={"100%"} alt="Title" />
                                        <div className="card-body text-white">
                                            <h3 className="card-title">{movie.title}</h3>
                                            <h4 className="card-subtitle">{movie.original_title}</h4>
                                            {flagImage ? (
                                                <img src={flagImage} alt={movie.original_language} width="30" height="20" className="my-3" />) : (
                                                <h5 className="card-text">{movie.original_language}</h5>)
                                            }
                                            <div className="star-rating mt-2">
                                                {rating.map((star) => (
                                                    star <= Math.floor(movie.vote_average / 2) ?
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