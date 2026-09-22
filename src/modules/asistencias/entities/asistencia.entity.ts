import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Matricula } from '../../matriculas/entities/matricula.entity';
import { CursoDocenteSeccion } from '../../curso-docente-seccion/entities/curso-docente-seccion.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('asistencias')
@Unique(['matriculaId', 'cursoDocenteSeccionId', 'fecha'])
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'matricula_id', type: 'int' })
  matriculaId: number;

  @ManyToOne(() => Matricula, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'matricula_id' })
  matricula: Matricula;

  @Column({ name: 'curso_docente_seccion_id', type: 'int', nullable: true })
  cursoDocenteSeccionId: number;

  @ManyToOne(() => CursoDocenteSeccion, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'curso_docente_seccion_id' })
  cursoDocenteSeccion: CursoDocenteSeccion;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'varchar', length: 15 })
  estado: string; // 'presente' | 'tardanza' | 'falta' | 'justificado'

  @Column({ name: 'hora_registro', type: 'time', nullable: true })
  horaRegistro: string;

  @Column({ name: 'registrado_por', type: 'int', nullable: true })
  registradoPorId: number;

  @ManyToOne(() => Usuario, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'registrado_por' })
  usuario: Usuario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}