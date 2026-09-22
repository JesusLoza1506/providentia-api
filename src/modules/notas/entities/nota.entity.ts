import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Matricula } from '../../matriculas/entities/matricula.entity';
import { Curso } from '../../cursos/entities/curso.entity';
import { PeriodoAcademico } from '../../periodos-academicos/entities/periodo-academico.entity';
import { Competencia } from '../../competencias/entities/competencia.entity';
import { Docente } from '../../docentes/entities/docente.entity';

@Entity('notas')
export class Nota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'matricula_id', type: 'int' })
  matriculaId: number;

  @ManyToOne(() => Matricula, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'matricula_id' })
  matricula: Matricula;

  @Column({ name: 'curso_id', type: 'int' })
  cursoId: number;

  @ManyToOne(() => Curso, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column({ name: 'periodo_academico_id', type: 'int' })
  periodoAcademicoId: number;

  @ManyToOne(() => PeriodoAcademico, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'periodo_academico_id' })
  periodoAcademico: PeriodoAcademico;

  @Column({ name: 'competencia_id', type: 'int', nullable: true })
  competenciaId: number;

  @ManyToOne(() => Competencia, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'competencia_id' })
  competencia: Competencia;

  @Column({ name: 'tipo_evaluacion', type: 'varchar', length: 15 })
  tipoEvaluacion: string; // 'competencia' | 'vigesimal'

  @Column({ name: 'valor_literal', type: 'varchar', length: 2, nullable: true })
  valorLiteral: string;

  @Column({ name: 'valor_numerico', type: 'decimal', precision: 4, scale: 2, nullable: true })
  valorNumerico: number;

  @Column({ name: 'registrado_por', type: 'int' })
  registradoPor: number;

  @ManyToOne(() => Docente, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'registrado_por' })
  docente: Docente;

  @CreateDateColumn({ name: 'fecha_registro' })
  fechaRegistro: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}