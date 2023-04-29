import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { GenreType } from '@types';

type UseGetGenresResponseType = {
  genres: GenreType[];
};

export default function useGetGenres(props?: Record<string, any>): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetGenres'],
    () => axios.get('/genre/movie/list').then((res) => res.data as UseGetGenresResponseType),
    props,
  );
}
