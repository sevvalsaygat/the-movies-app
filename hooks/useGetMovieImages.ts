import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '@hooks';
import { UseGetMovieImagesResponseType } from '@types';

type useGetMovieImagesParamsType = {
  movieId: string;
};

export default function useGetMovieImages(
  params: useGetMovieImagesParamsType,
  props?: Record<string, any>,
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetMovieImages'],
    () =>
      axios
        .get(`/movie/${params.movieId}/images`, {
          params,
        })
        .then((res) => res.data as UseGetMovieImagesResponseType),
    props,
  );
}
