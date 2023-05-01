import { useState } from 'react';

import { Application } from '@layouts';
import { useGetMovies } from '@hooks';
import { MovieList } from '@components';

export default function Home() {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    isSuccess,
    data: moviesData,
    isPreviousData,
  } = useGetMovies(
    {
      page,
    },
    {
      keepPreviousData: true,
    },
  );
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
