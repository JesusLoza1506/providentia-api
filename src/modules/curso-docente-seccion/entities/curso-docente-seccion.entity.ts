import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Curso } from '../../cursos/entities/curso.entity';
import { Docente } from '../../docentes/entities/docente.entity';
import { Seccion } from '../../secciones/entities/seccion.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';

@Entity('curso_docente_seccion')
@Unique(['cursoId', 'seccionId', 'anioEscolarId'])
export class CursoDocenteSeccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_id', type: 'int' })
  cursoId: number;

  @ManyToOne(() => Curso, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column({ name: 'docente_id', type: 'int' })
  docenteId: number;

  @ManyToOne(() => Docente, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'docente_id' })
  docente: Docente;

  @Column({ name: 'seccion_id', type: 'int' })
  seccionId: number;

  @ManyToOne(() => Seccion, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'seccion_id' })
  seccion: Seccion;

  @Column({ name: 'anio_escolar_id', type: 'int' })
  anioEscolarId: number;

  @ManyToOne(() => AnioEscolar, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'anio_escolar_id' })
  anioEscolar: AnioEscolar;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}