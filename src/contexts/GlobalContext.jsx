import { createContext, useContext, useEffect, useState } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
const GlobalContext = createContext()
console.log(api_key)

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [topMovies, setTopMovies] = useState([])
    const [topSeries, setTopSeries] = useState([])
    const [moviesName, setMoviesName] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState(false)
    const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${moviesName}`
    const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${moviesName}`

    useEffect(() => {
        fetch(moviesUrl)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.log(err.message))
        fetch(seriesUrl)
            .then(res => res.json())
            .then(data => setSeries(data.results))
            .catch(err => console.log(err.message))
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setTopMovies(data.results))
            .catch(err => console.log(err.message))
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setTopSeries(data.results))
            .catch(err => console.log(err.message))
        setSearchResults(true)
    }, [searchQuery])
    console.log(topSeries)
    console.log(topMovies)


    return (
        <GlobalContext.Provider value={{ movies, series, moviesName, setMoviesName, setSearchQuery, topMovies, topSeries }}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }
