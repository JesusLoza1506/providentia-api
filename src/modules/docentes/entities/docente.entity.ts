import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Persona } from '../../personas/entities/persona.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('docentes')
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'persona_id', type: 'int', unique: true })
  personaId: number;

  @OneToOne(() => Persona, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @Column({ name: 'usuario_id', type: 'int', unique: true })
  usuarioId: number;

  @OneToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ name: 'codigo_docente', type: 'varchar', length: 20, unique: true })
  codigoDocente: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  especialidad: string;

  @Column({ name: 'condicion_laboral', type: 'varchar', length: 30, nullable: true })
  condicionLaboral: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}