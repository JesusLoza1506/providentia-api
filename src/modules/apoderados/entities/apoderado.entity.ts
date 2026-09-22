import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Persona } from '../../personas/entities/persona.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('apoderados')
export class Apoderado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'persona_id', type: 'int', unique: true })
  personaId: number;

  @OneToOne(() => Persona, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @Column({ name: 'usuario_id', type: 'int', nullable: true, unique: true })
  usuarioId: number;

  @OneToOne(() => Usuario, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'varchar', length: 100, nullable: true })
  ocupacion: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}