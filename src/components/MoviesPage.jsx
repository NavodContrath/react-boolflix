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
    }
    return (
        <>
            <div className="container my-5">
                <h2 className="text-white">Movies..</h2>
                {
                    movies.map(movie => {
                        const flagImage = movieLanguages[movie.original_language];
                        return (
                            <div className="card bg-dark my-3" key={movie.id}>
                                <div className="card-body text-white">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <h4 className="card-subtitle">{movie.original_title}</h4>
                                    {flagImage ? (
                                        <img src={flagImage} alt={movie.original_language} width="30" height="20" className="my-3" />) : (
                                        <h5 className="card-text">{movie.original_language}</h5>)
                                    }
                                    <h6> {parseInt(movie.vote_average)}</h6>
                                </div>
                            </div>

                        )
                    })
                }

            </div >
        </>
    )
}