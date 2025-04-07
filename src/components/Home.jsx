import { useGlobalContext } from "../contexts/GlobalContext";
import { showCards } from "../functions/utilities";
export default function Home() {
    const { movies, series } = useGlobalContext()

    return (
        <>
            <div className="container">
                <div className="row align-items-md-stretch">
                    <div className="col-lg-6 my-5">
                        <h2 className="text-white">Movies</h2>
                        <div className="h-100 p-5 bg-dark border rounded-3 text-white">
                            <div className="row">
                                {showCards(movies)}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5">
                        <h2 className="text-white">Series</h2>
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