import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Application } from '@layouts';
import { useGetMovie } from '@hooks';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const {
    refetch,
    isLoading,
    isSuccess,
    isError,
    data: movie,
  } = useGetMovie(
    {
      movieId: id as string,
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
      {isError && <div>Could not found movie...</div>}
      {isSuccess && <div>{movie.title}</div>}
    </Application>
  );
}
