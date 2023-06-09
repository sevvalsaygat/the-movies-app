import Link from 'next/link';

import { useGenres } from '@hooks';
import { GenreType } from '@types';

type GenresTopBarType = {};

export default function GenresTopBar({}: GenresTopBarType) {
  const { genres } = useGenres();

  return (
    <div className="flex flex-row gap-2 overflow-x-auto p-8">
      {genres.map((genre: GenreType) => (
        <Link
          className="px-2 bg-indigo-500 text-white font-semibold rounded flex items-center shadow-lg text-center"
          href={`/genres/${genre.id}`}
          key={genre.id}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}
