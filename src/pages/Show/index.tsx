import axios from "axios";
const getMovieDetails = async (movieID: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}`,
      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDI5NzQ3M2I3YWNkMTI1NTRlMDEwYTlkY2ZiZTg0YiIsIm5iZiI6MTcyNzc0NTI0MC40MDgyNTMsInN1YiI6IjYxNzk3NzU3YTA5N2RjMDA2NWY3MWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuDStEy3QdsdhR252xH0YyQzwFHJTtxltptMc7AYjus",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getTVDetails = async (tvID: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvID}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDI5NzQ3M2I3YWNkMTI1NTRlMDEwYTlkY2ZiZTg0YiIsIm5iZiI6MTcyNzc0NTI0MC40MDgyNTMsInN1YiI6IjYxNzk3NzU3YTA5N2RjMDA2NWY3MWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuDStEy3QdsdhR252xH0YyQzwFHJTtxltptMc7AYjus",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

interface Review {
  username: string;
  description: String;
  rating: number;
}

interface Response {
  data: {
    reviews: Review[];
  };
}

const getMovieReviews = async (movieID: string) => {
  try {
    const response: Response = await axios.get(
      `http://localhost:3000/getMovieReviews/${movieID}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getShowReviews = async (tvID: string) => {
  try {
    const response: Response = await axios.get(
      `http://localhost:3000/getShowReviews/${tvID}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getMovieDetails, getTVDetails, getMovieReviews, getShowReviews };
