import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: Movie[],
  selectedGenre: SelectedGenre
}

interface Movie {
  imdbID: string,
  Title: string,
  Poster: string,
  Runtime: string,
  Ratings: Ratings[]
}

interface Ratings {
  Value: string
}

interface SelectedGenre {
    title: string
}


export function Content({selectedGenre, movies} : ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}