import { Application } from '@layouts';
import { useGetMovies } from '@hooks';
import { MovieType } from '@types';
import { MovieCard } from '@components';

export default function Home() {
  const { isLoading, isSuccess, data: moviesData } = useGetMovies();
  return (
    <Application isLoading={isLoading}>
      <div className="p-8">
        <div className="grid grid-cols-4 gap-4">
          {isSuccess && moviesData.results.map((movie: MovieType) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    </Application>
  );
}
