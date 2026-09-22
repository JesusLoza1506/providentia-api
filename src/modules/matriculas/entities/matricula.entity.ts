import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Seccion } from '../../secciones/entities/seccion.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';

@Entity('matriculas')
@Unique(['estudianteId', 'anioEscolarId'])
export class Matricula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

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

  @Column({ name: 'fecha_matricula', type: 'date' })
  fechaMatricula: string;

  @Column({ type: 'varchar', length: 20, default: 'matriculado' })
  estado: string;

  @Column({ type: 'varchar', length: 20 })
  tipo: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}