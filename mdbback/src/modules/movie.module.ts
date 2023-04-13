import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './../controllers/movie.controller';
import { MovieService } from './../services/movie.service';
import { Module } from '@nestjs/common';
import { Movie } from 'src/models/Movie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    controllers: [MovieController],
    providers: [MovieService],
})
export class MovieModule {}
