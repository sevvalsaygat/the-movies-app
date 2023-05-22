import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '@hooks';
import { MovieDetailsType } from '@types';

type useGetMovieParamsType = {
  movieId: string;
};

export default function useGetMovie(
  params: useGetMovieParamsType,
  props?: Record<string, any>,
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetMovie'],
    () =>
      axios
        .get(`/movie/${params.movieId}`, {
          params,
        })
        .then((res) => res.data as MovieDetailsType),
    props,
  );
}
