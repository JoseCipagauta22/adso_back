import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Category } from './category.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    tittle;

    @Column({ type: 'boolean' })
    completed: boolean;
}
