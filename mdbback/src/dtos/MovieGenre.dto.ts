import { Allow } from 'class-validator';
export default class MovieGenreDto {
    @Allow()
    public title: string;
}
