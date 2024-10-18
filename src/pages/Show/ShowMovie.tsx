import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { useQuery } from "react-query";
import { getMovieDetails, getMovieReviews } from "./SearchMovie";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
export default function ShowMovie() {
  const { id } = useParams();
  const {
    data: movieData,
    error: movieError,
    isLoading: movieLoading,
  } = useQuery("movieDetails", () => {
    return getMovieDetails(id || "");
  });

  const {
    data: userReviews,
    error: reviewsError,
    isLoading: reviewsLoading,
  } = useQuery("movieReviews", () => {
    return getMovieReviews(id || "");
  });

  if (movieLoading || reviewsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-cover bg-center relative">
        <img
          className="w-full max-h-96 object-cover absolute"
          src={`https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`}
          alt="movie backdrop"
        />
      </div>
      <div className="flex justify-start max-w-screen-xl mx-auto">
        <Card className="max-w-96 z-0 mt-56 mr-36">
          <CardContent className="px-0 pt-0">
            <img
              className="w-full rounded-lg"
              src={`https://image.tmdb.org/t/p/w342/${movieData.poster_path}`}
              alt="movie poster"
            />
          </CardContent>
          <CardHeader className="pl-2">
            <CardTitle>
              {movieData.title +
                " (" +
                movieData.release_date.slice(0, 4) +
                ")"}
            </CardTitle>
          </CardHeader>
          <CardDescription className="pl-2">
            {" "}
            {movieData.overview}{" "}
          </CardDescription>

          <CardFooter className="pl-2 pb-2 mt-8">
            <Rating
              allowFraction={true}
              initialValue={Number(
                String(movieData.vote_average / 2).slice(0, 3)
              )}
              readonly={true}
              size={30}
            />
            <span className="pl-2">
              {String(movieData.vote_average / 2).slice(0, 3)}
            </span>
          </CardFooter>
        </Card>

        <div className="flex-col z-0 mt-96">
          {userReviews?.reviews?.length === 0 ? (
            <></>
          ) : (
            userReviews?.reviews?.map((review) => (
              <Card className="ml-20 mb-5 min-w-96" key={review.username}>
                <CardHeader className=" pb-1 border-b-2">
                  <CardTitle>{review.username}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Rating
                    allowFraction={true}
                    initialValue={Number(review.rating)}
                    readonly={true}
                    size={30}
                  />
                  <span className="">: {review.rating}</span>

                  <CardDescription className="mt-5">
                    {review.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}
