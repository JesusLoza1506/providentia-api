import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Tabla 'roles' segun el diccionario de datos oficial
@Entity('roles')
export class Role {
  // Clave primaria autoincremental (SERIAL en PostgreSQL)
  @PrimaryGeneratedColumn()
  id: number;

  // Nombre unico del rol (admin, director, secretaria, docente, estudiante, apoderado)
  @Column({ type: 'varchar', length: 50, unique: true })
  nombre: string;

  // Descripcion opcional del rol (max 200 caracteres)
  @Column({ type: 'varchar', length: 200, nullable: true })
  descripcion: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}