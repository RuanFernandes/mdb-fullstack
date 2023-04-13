import { MovieGenre } from './../models/MovieGenre.entity';
import { Movie } from '../models/Movie.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import MovieType from 'src/types/Movie.type';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie) private movieRepository: Repository<Movie>,
    ) {}

    getAll() {
        return this.movieRepository.find();
    }

    getById(id: number) {
        return this.movieRepository.findOne({ where: { id } });
    }

    findByApiID(apiID: number) {
        return new Promise((resolve, reject) => {
            this.movieRepository.findOne({ where: { apiID } }).then((movie) => {
                resolve(movie);
            });
        });
    }

    async create(data: MovieType) {
        const check = await this.findByApiID(data.apiID);

        if (check) {
            return 'Movie already exists';
        }

        const movie = new Movie();
        movie.title = data.title;
        movie.status = data.status;
        movie.releaseDate = data.releaseDate;
        movie.adult = data.adult;
        movie.apiID = data.apiID;
        movie.backdropPath = data.backdropPath;
        movie.posterPath = data.posterPath;

        const genres = data.movieGenre;
        const existingGenres = [];

        for (const genre of genres) {
            // Check if the genre already exists
            const existingGenre = await this.movieRepository.manager.findOne(
                MovieGenre,
                { where: { name: genre.name } },
            );
            if (existingGenre) {
                existingGenres.push(existingGenre);
            } else {
                // If the genre doesn't exist, create a new one
                const newGenre = new MovieGenre();
                newGenre.name = genre.name;
                existingGenres.push(newGenre);
            }
        }

        movie.movieGenre = existingGenres;

        return this.movieRepository.save(movie);
    }
}
