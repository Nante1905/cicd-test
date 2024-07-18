import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Employe } from "./Employe";

@Entity()
export class Direction extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Employe, (employe) => employe.direction)
  employes: Employe[];
}
