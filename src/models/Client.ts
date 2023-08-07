import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    passport: string;

    @Column()
    phone: string;

    @Column()
    room: string;

    @Column()
    arrival: Date;

    @Column()
    departure: Date;
}