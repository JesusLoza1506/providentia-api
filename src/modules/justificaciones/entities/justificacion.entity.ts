import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Asistencia } from '../../asistencias/entities/asistencia.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('justificaciones')
export class Justificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'asistencia_id', type: 'int', unique: true })
  asistenciaId: number;

  @OneToOne(() => Asistencia, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'asistencia_id' })
  asistencia: Asistencia;

  @Column({ type: 'text' })
  motivo: string;

  @Column({ name: 'archivo_url', type: 'varchar', length: 255, nullable: true })
  archivoUrl: string;

  @Column({ name: 'estado_aprobacion', type: 'varchar', length: 15, default: 'pendiente' })
  estadoAprobacion: string; // 'pendiente' | 'aprobado' | 'rechazado'

  @Column({ name: 'aprobado_por', type: 'int', nullable: true })
  aprobadoPor: number;

  @ManyToOne(() => Usuario, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'aprobado_por' })
  usuarioAprobador: Usuario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}