import { MovieType, UseGetMoviesResponseType, UseGetMovieSimilarResponseType } from '@types';
import { MovieCard } from '@components';

type MovieListType = {
  isSuccess: boolean;
  // moviesData: UseGetMoviesResponseType | UseGetMovieSimilarResponseType;
  moviesData: any;
  isPreviousData: boolean;
  setPage: (p: number) => void;
  page: number;
};

export default function MovieList({ isSuccess, moviesData, isPreviousData, setPage, page }: MovieListType) {
  function onClickLoadMoreButton() {
    // if (!isPreviousData && moviesData.hasMore) {
    setPage(page + 1);
    // }
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-4">
        {isSuccess && moviesData.results.map((movie: MovieType) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      {isSuccess && (
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => {
              onClickLoadMoreButton();
            }}
            // disabled={isPreviousData || !moviesData?.hasMore}
            className="border border-gray-500 w-fit px-3 py-1"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
