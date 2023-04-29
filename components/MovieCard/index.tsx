import { MovieType } from '@types';

type MovieCardType = {
  movie: MovieType;
};

export default function MovieCard({ movie }: MovieCardType) {
  return <div>{movie.title}</div>;
}
