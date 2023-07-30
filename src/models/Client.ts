import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    passport: String;

    @Column()
    phone: String;

    @Column()
    room: String;

    @Column()
    arrival: Date;

    @Column()
    departure: Date;
}