type GenreType = {
  id: number;
  name: string;
};

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type UseGetGenresResponseType = {
  genres: GenreType[];
};

type UseGetMoviesResponseType = {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

type ProductionCompanyType = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: GenreType[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieImageBackdropType = {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type MovieImageLogoType = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type MovieImagePosterType = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type UseGetMovieImagesResponseType = {
  backdrops: MovieImageBackdropType[];
  id: number;
  logos: MovieImageLogoType[];
  posters: MovieImagePosterType[];
};

type UseGetMovieSimilarResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type {
  GenreType,
  MovieType,
  UseGetGenresResponseType,
  UseGetMoviesResponseType,
  MovieDetailsType,
  ProductionCompanyType,
  ProductionCountryType,
  SpokenLanguageType,
  UseGetMovieImagesResponseType,
  MovieImageBackdropType,
  MovieImageLogoType,
  MovieImagePosterType,
  UseGetMovieSimilarResponseType,
};
