import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Grado } from '../../grados/entities/grado.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';
import { Docente } from '../../docentes/entities/docente.entity';

@Entity('secciones')
@Unique(['gradoId', 'anioEscolarId', 'nombre'])
export class Seccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'grado_id', type: 'int' })
  gradoId: number;

  @ManyToOne(() => Grado, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'grado_id' })
  grado: Grado;

  @Column({ name: 'anio_escolar_id', type: 'int' })
  anioEscolarId: number;

  @ManyToOne(() => AnioEscolar, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'anio_escolar_id' })
  anioEscolar: AnioEscolar;

  @Column({ type: 'varchar', length: 5 })
  nombre: string;

  @Column({ type: 'varchar', length: 15 })
  turno: string;

  @Column({ name: 'capacidad_maxima', type: 'smallint' })
  capacidadMaxima: number;

  @Column({ name: 'tutor_docente_id', type: 'int', nullable: true })
  tutorDocenteId: number;

  @ManyToOne(() => Docente, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'tutor_docente_id' })
  tutorDocente: Docente;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}