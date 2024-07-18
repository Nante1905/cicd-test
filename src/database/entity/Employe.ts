import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Direction } from "./Direction";

@Entity()
export class Employe extends BaseEntity {
  @PrimaryColumn({
    name: "id",
    generatedIdentity: "BY DEFAULT",
  })
  id: number;

  @Column()
  nom: string;

  @Column({
    foreignKeyConstraintName: "fk_direction",
  })
  id_direction: number;

  @Column({
    nullable: true,
  })
  age: number;

  @ManyToOne(() => Direction, (direction) => direction.employes)
  @JoinColumn({ name: "id_direction" })
  direction: Direction;

  constructor() {
    super();
  }
}
