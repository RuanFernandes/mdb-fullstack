import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { MovieGenre } from './MovieGenre.entity';

@Entity({ name: 'movies' })
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    status: string;

    @Column({ nullable: true })
    releaseDate: Date;

    @Column()
    adult: boolean;

    @Column({ unique: true })
    apiID: number;

    @Column({ nullable: true })
    backdropPath: string;

    @Column({ nullable: true })
    posterPath: string;

    @ManyToMany(() => MovieGenre, {
        cascade: ['insert', 'update'],
    })
    @JoinTable({
        name: 'movies_genre',
    })
    movieGenre: MovieGenre[];
}
