import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ChatBubbleLeftEllipsisIcon, StarIcon } from '@heroicons/react/24/outline';

import { buildMoviePosterPath } from '@utils';
import { Application } from '@layouts';
import { useGetMovie, useGetMovieImages } from '@hooks';
import { GenreType, MovieImageBackdropType } from '@types';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const {
    refetch: movieRefetch,
    isLoading: movieIsLoading,
    isSuccess: movieIsSuccess,
    isError: movieIsError,
    data: movie,
  } = useGetMovie(
    {
      movieId: id as string,
    },
    {
      enabled: !!id,
    },
  );

  const {
    refetch: movieImagesRefetch,
    isLoading: movieImagesIsLoading,
    isSuccess: movieImagesIsSuccess,
    data: movieImages,
  } = useGetMovieImages(
    {
      movieId: id as string,
    },
    {
      enabled: !!id,
    },
  );

  useEffect(() => {
    movieRefetch();
  }, [id, movieRefetch]);

  useEffect(() => {
    movieImagesRefetch();
  }, [id, movieImagesRefetch]);

  return (
    <Application isLoading={movieIsLoading && movieImagesIsLoading}>
      {movieIsError && <div>Could not found movie...</div>}
      {movieIsSuccess && (
        <div className="flex flex-col p-16">
          <div className="flex flex-row font-serif">
            <div className="w-1/2 flex justify-center">
              <Image alt={movie.title} src={buildMoviePosterPath(movie.poster_path)} width={400} height={400} />
            </div>
            <div className="flex flex-col w-1/2 justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-8 items-center">
                  <div className="text-blue-800 font-bold text-3xl hover:text-blue-700 cursor-pointer">
                    {movie.title}
                  </div>
                  <div className=" text-blue-800">({movie.release_date})</div>
                </div>
                <div className="flex flex-row gap-1">
                  {movie.genres.map((g: GenreType, index: number) => (
                    <>
                      <Link
                        className="text-red-600 hover:text-red-500 underline text-lg"
                        href={`/genres/${g.id}`}
                        key={g.id}
                      >
                        {g.name}
                      </Link>
                      {index !== movie.genres.length - 1 && ','}
                    </>
                  ))}
                </div>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row items-center gap-1 text-blue-700 cursor-pointer hover:text-blue-600">
                    {movie.vote_count}
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 font-bold" />
                  </div>
                  <div className="flex flex-row text-blue-700 hover:text-blue-600 cursor-pointer">
                    {movie.vote_average}
                    <StarIcon className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-8 text-xl text-blue-900">{movie.overview}</p>
              </div>
              <div>
                {movieImagesIsSuccess && (
                  <div className="flex flex-row overflow-x-auto gap-3">
                    {movieImages.backdrops.map((mi: MovieImageBackdropType, index: number) => (
                      <Image
                        className="rounded-md"
                        key={index}
                        alt={movie.title}
                        src={buildMoviePosterPath(mi.file_path)}
                        width={200}
                        height={200}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Application>
  );
}
