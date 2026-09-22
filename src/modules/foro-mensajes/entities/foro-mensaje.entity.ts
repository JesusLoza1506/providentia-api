import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Foro } from '../../foros/entities/foro.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('foro_mensajes')
export class ForoMensaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'foro_id', type: 'int' })
  foroId: number;

  @ManyToOne(() => Foro, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'foro_id' })
  foro: Foro;

  @Column({ name: 'usuario_id', type: 'int' })
  usuarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ name: 'mensaje_padre_id', type: 'int', nullable: true })
  mensajePadreId: number;

  @ManyToOne(() => ForoMensaje, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'mensaje_padre_id' })
  mensajePadre: ForoMensaje;

  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}