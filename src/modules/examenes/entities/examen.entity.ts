import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';

@Entity('examenes')
export class Examen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_virtual_id', type: 'int' })
  cursoVirtualId: number;

  @ManyToOne(() => CursoVirtual, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_virtual_id' })
  cursoVirtual: CursoVirtual;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'varchar', length: 20 })
  tipo: string; // quiz, examen, práctica

  @Column({ name: 'duracion_minutos', type: 'smallint' })
  duracionMinutos: number;

  @Column({ name: 'fecha_disponible_desde', type: 'timestamp' })
  fechaDisponibleDesde: Date;

  @Column({ name: 'fecha_disponible_hasta', type: 'timestamp' })
  fechaDisponibleHasta: Date;

  @Column({ name: 'puntaje_maximo', type: 'decimal', precision: 5, scale: 2 })
  puntajeMaximo: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}