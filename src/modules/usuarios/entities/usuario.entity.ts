import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Persona } from '../../personas/entities/persona.entity';
import { Role } from '../../roles/entities/role.entity';

// Representa la tabla 'usuarios' segun el diccionario de datos oficial
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'persona_id', type: 'int', unique: true })
  personaId: number;

  @OneToOne(() => Persona, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @Column({ name: 'rol_id', type: 'int' })
  rolId: number;

  @ManyToOne(() => Role, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'rol_id' })
  rol: Role;

  @Column({ type: 'varchar', length: 120, unique: true })
  email: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 255 })
  passwordHash: string;

  // Estado del usuario: 'activo', 'suspendido', 'inactivo'
  @Column({ type: 'varchar', length: 20, default: 'activo' })
  estado: string;

  @Column({ name: 'mfa_habilitado', type: 'boolean', default: false })
  mfaHabilitado: boolean;

  @Column({ name: 'ultimo_login', type: 'timestamp', nullable: true })
  ultimoLogin: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}