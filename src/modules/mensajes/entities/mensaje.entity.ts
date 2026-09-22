import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('mensajes')
export class Mensaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'remitente_id', type: 'int' })
  remitenteId: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'remitente_id' })
  remitente: Usuario;

  @Column({ name: 'destinatario_id', type: 'int' })
  destinatarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'destinatario_id' })
  destinatario: Usuario;

  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ type: 'boolean', default: false })
  leido: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}