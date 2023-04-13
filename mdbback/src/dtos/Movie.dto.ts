import { MovieGenre } from './../models/MovieGenre.entity';
import { Allow } from 'class-validator';

export default class MovieDto {
    @Allow()
    title: string;

    @Allow()
    status: string;

    @Allow()
    releaseDate: Date;

    @Allow()
    adult: boolean = false;

    @Allow()
    apiID: number;

    @Allow()
    backdropPath: string;

    @Allow()
    posterPath: string;

    @Allow()
    movieGenre: MovieGenre[];
}
