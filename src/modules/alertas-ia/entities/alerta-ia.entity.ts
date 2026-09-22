import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('alertas_ia')
export class AlertaIa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @Column({ type: 'varchar', length: 30 })
  tipo: string; // riesgo_academico, asistencia, socioemocional

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ name: 'nivel_severidad', type: 'varchar', length: 10 })
  nivelSeveridad: string; // bajo, medio, alto

  // Se cambia a @Column con default para permitir asignarle fechas manuales si es necesario
  @Column({ name: 'fecha_generacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaGeneracion: Date;

  @Column({ name: 'atendido_por', type: 'int', nullable: true })
  atendidoPorId: number;

  @ManyToOne(() => Usuario, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'atendido_por' })
  atendidoPor: Usuario;

  @Column({ type: 'varchar', length: 15, default: 'pendiente' })
  estado: string; // pendiente, en_revision, atendido

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}