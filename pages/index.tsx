import { Application } from '@layouts';
import { useGetMovies } from '@hooks';
import { MovieList } from '@components';

export default function Home() {
  const { isLoading, isSuccess, data: moviesData } = useGetMovies();
  return (
    <Application isLoading={isLoading}>
      <MovieList isSuccess={isSuccess} moviesData={moviesData} />
    </Application>
  );
}
