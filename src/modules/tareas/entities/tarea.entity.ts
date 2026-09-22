import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';

@Entity('tareas')
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_virtual_id', type: 'int' })
  cursoVirtualId: number;

  @ManyToOne(() => CursoVirtual, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_virtual_id' })
  cursoVirtual: CursoVirtual;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ name: 'fecha_entrega', type: 'timestamp' })
  fechaEntrega: Date;

  @Column({ name: 'puntaje_maximo', type: 'decimal', precision: 5, scale: 2, default: 20.00 })
  puntajeMaximo: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}