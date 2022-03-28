import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 5000 })
  description: string;

  @Column({ type: 'decimal', precision: 7, scale: 2 })
  price: number;

  @Column({ type: 'int', default: 0 })
  amount: number;
}
