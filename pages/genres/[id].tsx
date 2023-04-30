import { Application } from '@layouts';
import { useRouter } from 'next/router';
import { useGetMovies } from '@hooks';
import { MovieList } from '@components';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading,
    isSuccess,
    data: moviesData,
    refetch,
  } = useGetMovies(
    {
      with_genres: id as string,
    },
    {
      enabled: !!id,
    },
  );

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  return (
    <Application isLoading={isLoading}>
      <MovieList isSuccess={isSuccess} moviesData={moviesData} />
    </Application>
  );
}