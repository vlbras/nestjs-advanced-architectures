import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 255 })
  public email: string;
}
