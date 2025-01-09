import Container from "../../components/Container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/ui/card";
import { useQuery } from "react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { MovieSearch, ShowSearch } from "./index";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const query = location.state.query;
  const contentType = location.state.contentType;
  console.log(query);
  console.log(contentType);
  const { data, error, isLoading } =
    contentType == 0
      ? useQuery(["movieSearch", query], MovieSearch)
      : useQuery(["tvSearch", query], ShowSearch);
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <></>;
  }
  console.log(data);
  return (
    <Container>
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
