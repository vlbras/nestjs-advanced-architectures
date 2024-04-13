import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { UserEntity } from './user.entity';

@Entity('indicators')
export class IndicatorEntity {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 32 })
  public name: string;

  @Column({ type: 'int' })
  public value: number;

  @ManyToOne(() => UserEntity, user => user.indicators)
  public user: UserEntity;
}
