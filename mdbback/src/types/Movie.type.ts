import { MovieGenre } from './../models/MovieGenre.entity';
export default class MovieType {
    title: string;

    status: string;

    releaseDate: Date;

    adult: boolean = false;

    apiID: number;

    backdropPath: string;

    posterPath: string;

    movieGenre: MovieGenre[];
}
