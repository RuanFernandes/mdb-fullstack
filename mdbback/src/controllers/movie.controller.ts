import { MovieService } from './../services/movie.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import MovieDto from 'src/dtos/Movie.dto';

@Controller('movies')
export class MovieController {
    constructor(private movieService: MovieService) {}

    @Get()
    getMovie() {
        return this.movieService.getAll();
    }

    @Get(':id')
    getMovieById(id: number) {
        return this.movieService.getById(id);
    }

    @Post()
    createMovie(@Body() movie: MovieDto) {
        return this.movieService.create(movie);
    }
}
