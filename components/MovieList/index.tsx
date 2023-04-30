import { MovieType, UseGetMoviesResponseType } from '@types';
import { MovieCard } from '@components';

type MovieListType = {
  isSuccess: boolean;
  moviesData: UseGetMoviesResponseType;
};

export default function MovieList({ isSuccess, moviesData }: MovieListType) {
  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-4">
        {isSuccess && moviesData.results.map((movie: MovieType) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}
