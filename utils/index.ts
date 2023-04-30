function buildMoviePosterPath(posterPath: string): string {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
}

export { buildMoviePosterPath };
