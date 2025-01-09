import axios from 'axios';

const getTrendingMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
        {
        headers: {
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDI5NzQ3M2I3YWNkMTI1NTRlMDEwYTlkY2ZiZTg0YiIsIm5iZiI6MTcyNzc0NTI0MC40MDgyNTMsInN1YiI6IjYxNzk3NzU3YTA5N2RjMDA2NWY3MWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuDStEy3QdsdhR252xH0YyQzwFHJTtxltptMc7AYjus"
        }
    });
    return response.data;
}

const getOnAirTvShows = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', 
        {
        headers: {
            accept: 'application/json',
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDI5NzQ3M2I3YWNkMTI1NTRlMDEwYTlkY2ZiZTg0YiIsIm5iZiI6MTcyNzc0NTI0MC40MDgyNTMsInN1YiI6IjYxNzk3NzU3YTA5N2RjMDA2NWY3MWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuDStEy3QdsdhR252xH0YyQzwFHJTtxltptMc7AYjus"
        }
    });
    return response.data;
};



export {getTrendingMovies, getOnAirTvShows};