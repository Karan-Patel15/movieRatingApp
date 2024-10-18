import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

import { getTrendingMovies } from "./index";
import { useQuery } from "react-query";
import Container from "../../components/Container";
import SkeletonLayout from "../../components/SkeletonLayout";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

interface props {
  children: React.ReactNode;
}
function Home() {
  const { data, error, isLoading } = useQuery("movieData", getTrendingMovies);
  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <></>;
  }
  return (
    <Container>
      <div className="grid grid-cols-4 gap-5">
        {data.results.map((movie: any) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Card className="hover:border-white hover:scale-105 max-w-96">
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt="movie poster"
              />
              <CardHeader>
                <CardTitle className="flex flex-row justify-center">
                  {movie.title + " (" + movie.release_date.slice(0, 4) + ")"}
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex- flex-row pl-2 mt-2 pb-2">
                <Rating
                  allowFraction={true}
                  initialValue={Number(
                    String(movie.vote_average / 2).slice(0, 3)
                  )}
                  readonly={true}
                  size={30}
                />
                <span className="pl-2">
                  {String(movie.vote_average / 2).slice(0, 3)}
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
