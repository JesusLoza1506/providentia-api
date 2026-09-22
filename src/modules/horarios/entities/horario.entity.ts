import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CursoDocenteSeccion } from '../../curso-docente-seccion/entities/curso-docente-seccion.entity';
import { AulaFisica } from '../../aulas-fisicas/entities/aula-fisica.entity';

@Entity('horarios')
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_docente_seccion_id', type: 'int' })
  cursoDocenteSeccionId: number;

  @ManyToOne(() => CursoDocenteSeccion, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_docente_seccion_id' })
  cursoDocenteSeccion: CursoDocenteSeccion;

  @Column({ name: 'aula_fisica_id', type: 'int', nullable: true })
  aulaFisicaId: number;

  @ManyToOne(() => AulaFisica, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'aula_fisica_id' })
  aulaFisica: AulaFisica;

  @Column({ name: 'dia_semana', type: 'smallint' })
  diaSemana: number;

  @Column({ name: 'hora_inicio', type: 'time' })
  horaInicio: string;

  @Column({ name: 'hora_fin', type: 'time' })
  horaFin: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}