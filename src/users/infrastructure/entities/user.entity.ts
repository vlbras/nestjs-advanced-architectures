import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { IndicatorEntity } from './indicator.entity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 255 })
  public email: string;

  @OneToMany(() => IndicatorEntity, indicator => indicator.user, { cascade: true })
  public indicators: IndicatorEntity[];
}
