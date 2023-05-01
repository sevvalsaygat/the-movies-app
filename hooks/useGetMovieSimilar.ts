import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '@hooks';
import { UseGetMovieSimilarResponseType } from '@types';

type useGetMovieSimilarParamsType = {
  movieId: string;
  page: number;
};

export default function useGetMovieSimilar(
  params: useGetMovieSimilarParamsType,
  props?: Record<string, any>,
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetMovieSimilar', params.page],
    () =>
      axios
        .get(`/movie/${params.movieId}/similar`, {
          params,
        })
        .then((res) => res.data as UseGetMovieSimilarResponseType),
    props,
  );
}
