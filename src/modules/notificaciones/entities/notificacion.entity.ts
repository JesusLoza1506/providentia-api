import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usuario_id', type: 'int' })
  usuarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'varchar', length: 30 })
  tipo: string; // nota, asistencia, pago, tarea, anuncio, alerta_ia

  @Column({ type: 'varchar', length: 255 })
  contenido: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  enlace: string;

  @Column({ type: 'boolean', default: false })
  leido: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}