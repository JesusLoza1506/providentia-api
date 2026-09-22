import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Tarea } from '../../tareas/entities/tarea.entity';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';

@Entity('entregas_tareas')
@Unique(['tareaId', 'estudianteId'])
export class EntregaTarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tarea_id', type: 'int' })
  tareaId: number;

  @ManyToOne(() => Tarea, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tarea_id' })
  tarea: Tarea;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @Column({ name: 'archivo_url', type: 'varchar', length: 255, nullable: true })
  archivoUrl: string;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @Column({ name: 'fecha_entrega', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaEntrega: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  calificacion: number;

  @Column({ name: 'feedback_docente', type: 'text', nullable: true })
  feedbackDocente: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}