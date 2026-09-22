import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('logs_auditoria')
export class LogAuditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usuario_id', type: 'int', nullable: true })
  usuarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'varchar', length: 100 })
  accion: string; // ej. "actualizó nota", "registró pago"

  @Column({ name: 'entidad_afectada', type: 'varchar', length: 50 })
  entidadAfectada: string;

  @Column({ name: 'entidad_id', type: 'int', nullable: true })
  entidadId: number;

  @Column({ name: 'ip_origen', type: 'varchar', length: 45, nullable: true })
  ipOrigen: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecha: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}