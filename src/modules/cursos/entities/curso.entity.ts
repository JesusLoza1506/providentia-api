import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Nivel } from '../../niveles/entities/nivel.entity';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ name: 'nivel_id', type: 'int' })
  nivelId: number;

  @ManyToOne(() => Nivel, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'nivel_id' })
  nivel: Nivel;

  @Column({ name: 'area_curricular', type: 'varchar', length: 100, nullable: true })
  areaCurricular: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}