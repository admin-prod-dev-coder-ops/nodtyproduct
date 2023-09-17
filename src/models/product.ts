import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ITEM' })
export class Item {
    @PrimaryGeneratedColumn({ name: 'ITEM_UID' })
    uid: number;

    @Column({ name: 'ITEM_ID' })
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    weight: number;

    @Column()
    brand: string;

    @Column()
    category: string;
}