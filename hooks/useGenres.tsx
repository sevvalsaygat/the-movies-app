import React, { useState, useContext, createContext, useEffect } from 'react';

import { useGetGenres } from '@hooks';
import { GenreType, UseGetGenresResponseType } from '@types';

type UseGenresReturnTypes = {
  genres: GenreType[];
  isLoading: boolean;
  findGenresByIds: (genreIds: number[]) => GenreType[];
};

const GenresContext = createContext({} as UseGenresReturnTypes);

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState<GenreType[]>([]);

  const { isLoading } = useGetGenres({
    onSuccess: (data: UseGetGenresResponseType) => setGenres(data.genres),
  });

  function findGenresByIds(genreIds: number[]): GenreType[] {
    return genres.filter((g: GenreType) => genreIds.includes(g.id));
  }

  const value = {
    genres,
    isLoading,
    findGenresByIds,
  };

  return <GenresContext.Provider value={value}>{children}</GenresContext.Provider>;
};

export default function useGenres(): UseGenresReturnTypes {
  return useContext(GenresContext);
}
