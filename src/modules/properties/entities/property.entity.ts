import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producer } from '../../producers/entities/producer.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  farmName!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column('float')
  totalArea!: number;

  @Column('float')
  arableArea!: number;

  @Column('float')
  vegetationArea!: number;

  @Column('simple-array')
  harvests!: string[];

  @Column('simple-array')
  crops!: string[];

  @ManyToOne(() => Producer, (producer) => producer.properties)
  producer!: Producer;
}
