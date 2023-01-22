const key = process.env.REACT_APP_TMDB_API_KEY;

const Request = {
    Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    Horror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    UpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default Request;