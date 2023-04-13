import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'genres' })
@Unique(['name'])
export class MovieGenre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
