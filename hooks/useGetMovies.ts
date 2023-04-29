import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { MovieType } from '@types';

type UseGetMoviesResponseType = {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

type UseGetMoviesParamsType = {
  with_genres?: number;
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
