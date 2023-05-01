import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Application } from '@layouts';
import { useGetMovies } from '@hooks';
import { MovieList } from '@components';

export default function Home() {
  const [page, setPage] = useState<number>(1);

  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading,
    isSuccess,
    data: moviesData,
    isPreviousData,
    refetch,
  } = useGetMovies(
    {
      with_genres: id as string,
      page,
    },
    {
      enabled: !!id,
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  return (
    <Application isLoading={isLoading}>
      <MovieList
        setPage={setPage}
        isPreviousData={isPreviousData}
        page={page}
        isSuccess={isSuccess}
        moviesData={moviesData}
      />
    </Application>
  );
}
