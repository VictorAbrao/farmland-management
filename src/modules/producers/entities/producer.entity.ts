import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from '../../properties/entities/property.entity';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  cpfCnpj!: string;

  @Column()
  name!: string;

  @OneToMany(() => Property, (property) => property.producer)
  properties!: Property[];
}
