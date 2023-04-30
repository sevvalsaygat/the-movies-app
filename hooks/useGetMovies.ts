import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { UseGetMoviesResponseType } from '@types';

type UseGetMoviesParamsType = {
  with_genres?: string;
};

export default function useGetMovies(
  params?: UseGetMoviesParamsType,
  props?: Record<string, any>,
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetMovies'],
    () =>
      axios
        .get('/discover/movie', {
          params,
        })
        .then((res) => res.data as UseGetMoviesResponseType),
    props,
  );
}
