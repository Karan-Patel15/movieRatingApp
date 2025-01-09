import axios from "axios";

async function MovieSearch({ queryKey }: any) {
  const query = queryKey[1];
  console.log(query);
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDI5NzQ3M2I3YWNkMTI1NTRlMDEwYTlkY2ZiZTg0YiIsIm5iZiI6MTcyNzc0NTI0MC40MDgyNTMsInN1YiI6IjYxNzk3NzU3YTA5N2RjMDA2NWY3MWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuDStEy3QdsdhR252xH0YyQzwFHJTtxltptMc7AYjus",
      },
    }
  );
  return response.data;
}

async function ShowSearch({ queryKey }: any) {
  const query = queryKey[1];
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/tv?query=${query}`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDI5NzQ3M2I3YWNkMTI1NTRlMDEwYTlkY2ZiZTg0YiIsIm5iZiI6MTcyNzc0NTI0MC40MDgyNTMsInN1YiI6IjYxNzk3NzU3YTA5N2RjMDA2NWY3MWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuDStEy3QdsdhR252xH0YyQzwFHJTtxltptMc7AYjus",
      },
    }
  );
  return response.data;
}

export { MovieSearch, ShowSearch };
