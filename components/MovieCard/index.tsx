import Image from 'next/image';
import Link from 'next/link';

import { useGenres } from '@hooks';
import { buildMoviePosterPath } from '@utils';
import { GenreType, MovieType } from '@types';

type MovieCardType = {
  movie: MovieType;
};

export default function MovieCard({ movie }: MovieCardType) {
  const { findGenresByIds } = useGenres();
  const genres = findGenresByIds(movie.genre_ids);
  const movieLink = `/movies/${movie.id}`;

  return (
    <div className="shadow-lg border border-gray-400 rounded-md p-4 flex flex-col  gap-3">
      <Link href={movieLink} className="flex justify-center items-center">
        <Image alt={movie.title} src={buildMoviePosterPath(movie.poster_path)} width={250} height={400} />
      </Link>
      <div className="flex flex-row justify-between p-4">
        <div>
          {genres.map((g: GenreType) => (
            <div key={g.id}>{g.name}</div>
          ))}
        </div>
        <div>{movie.vote_average}/10</div>
      </div>
      <Link href={movieLink} className="p-4 font-bold text-center underline">
        {movie.title}
      </Link>
    </div>
  );
}
