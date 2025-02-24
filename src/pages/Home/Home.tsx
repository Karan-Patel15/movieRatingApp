import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

import { getTrendingMovies, getOnAirTvShows } from "./index";
import { useQuery } from "react-query";
import Container from "../../components/Container";
import SkeletonLayout from "../../components/SkeletonLayout";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

function Home() {
  const [contentType, setContentType] = useState(0);
  const { data, error, isLoading } =
    contentType == 0
      ? useQuery("movieData", getTrendingMovies)
      : useQuery("tvData", getOnAirTvShows);
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <></>;
  }
  return (
    <Container>
      <SearchBar contentType={contentType} />
      <div className="flex flex-row justify-center gap-5 mb-10">
        <button
          className={`${
            contentType == 0 ? "bg-blue-500 text-white" : "bg-white text-black"
          } px-5 py-2 rounded-lg`}
          onClick={() => setContentType(0)}
        >
          Movies
        </button>
        <button
          className={`${
            contentType == 1 ? "bg-blue-500 text-white" : "bg-white text-black"
          } px-5 py-2 rounded-lg`}
          onClick={() => setContentType(1)}
        >
          TV Shows
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {data.results.map((result: any) => (
          <Link
            to={`/${contentType == 0 ? "movie" : "tv"}/${result.id}`}
            key={result.id}
          >
            <Card className="hover:border-white hover:scale-105 max-w-96 h-full">
              <img
                className="w-full max-h-96 object-cover"
                src={`https://image.tmdb.org/t/p/w342/${result.poster_path}`}
                alt="poster"
              />
              <CardHeader>
                <CardTitle className="flex flex-row justify-center">
                  {contentType == 0
                    ? result.title + " (" + result.release_date + ")"
                    : result.name + " (" + result.first_air_date + ")"}
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex- flex-row pl-2 mt-2 pb-2">
                <Rating
                  allowFraction={true}
                  initialValue={Number(
                    String(result.vote_average / 2).slice(0, 3)
                  )}
                  readonly={true}
                  size={30}
                />
                <span className="pl-2">
                  {String(result.vote_average / 2).slice(0, 3)}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Home;
