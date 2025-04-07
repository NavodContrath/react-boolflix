import { useGlobalContext } from "../contexts/GlobalContext";
import showCards from "../functions/utilities";
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
                                {showCards(movies)}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Series</h2>
                        <div className="h-100 p-5 bg-dark border rounded-3 text-white mb-3">
                            <div className="row">
                                {showCards(series)}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}