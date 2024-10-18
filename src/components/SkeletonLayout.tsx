import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import Container from "./Container";
import { Skeleton } from "./ui/skeleton";
export default function SkeletonLayout() {
  const list = Array.from({ length: 10 }, (_, i) => i);
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5">
        {list.map((num: number) => (
          <Card key={num}>
            <CardHeader>
              <CardTitle className="flex flex-row justify-center"></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Skeleton className="w-12 h-12 rounded-full" />
              <CardDescription>
                <Skeleton className="w-20 h-4 mt-2" />
                <Skeleton className="w-20 h-4 mt-2" />
                <Skeleton className="w-20 h-4 mt-2" />
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Skeleton className="w-20 h-4 mt-2" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
