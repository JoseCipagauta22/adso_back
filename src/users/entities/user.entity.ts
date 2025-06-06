import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
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

    @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
    texto;

    // @CreateDateColumn({ 
    //     type: 'timestamptz',
    //     default: () => 'CURRENT_TIMESTAMP'
    // })
    // createAt: Date;
}
