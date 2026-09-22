import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Curso } from '../../cursos/entities/curso.entity';

@Entity('competencias')
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_id', type: 'int' })
  cursoId: number;

  @ManyToOne(() => Curso, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column({ type: 'varchar', length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}