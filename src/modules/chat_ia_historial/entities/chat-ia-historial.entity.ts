import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';

@Entity('chat_ia_historial')
export class ChatIaHistorial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usuario_id', type: 'int' })
  usuarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ name: 'curso_virtual_id', type: 'int', nullable: true })
  cursoVirtualId: number;

  @ManyToOne(() => CursoVirtual, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'curso_virtual_id' })
  cursoVirtual: CursoVirtual;

  @Column({ type: 'text' })
  pregunta: string;

  @Column({ type: 'text' })
  respuesta: string;

  @CreateDateColumn({ name: 'fecha', type: 'timestamp' })
  fecha: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}