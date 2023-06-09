import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '@hooks';
import { UseGetMoviesResponseType } from '@types';

type UseGetMoviesParamsType = {
  with_genres?: string;
  page: number;
};

export default function useGetMovies(
  params: UseGetMoviesParamsType,
  props?: Record<string, any>,
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetMovies', params.page],
    () =>
      axios
        .get('/discover/movie', {
          params,
        })
        .then((res) => res.data as UseGetMoviesResponseType),
    props,
  );
}
