import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Representa la tabla 'aulas_fisicas' segun el diccionario de datos
@Entity('aulas_fisicas')
export class AulaFisica {
  @PrimaryGeneratedColumn()
  id: number;

  // Nombre o codigo del aula (ej. 'AULA-101')
  @Column({ type: 'varchar', length: 30, unique: true })
  nombre: string;

  // Capacidad maxima de alumnos
  @Column({ type: 'smallint', nullable: true })
  capacidad: number;

  // Ubicacion o pabellon del aula
  @Column({ type: 'varchar', length: 30, nullable: true })
  pabellon: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}