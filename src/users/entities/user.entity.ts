import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Category } from './category.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name;

    @Column({ type: 'varchar', length: 255 })
    lastName;

    @Column({ type: 'varchar', length: 255 })
    doc;
}
