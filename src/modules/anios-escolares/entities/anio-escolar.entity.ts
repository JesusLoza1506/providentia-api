import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Tabla 'anios_escolares' segun el diccionario de datos
@Entity('anios_escolares')
export class AnioEscolar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })
  anio: number;

  @Column({ name: 'fecha_inicio', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'fecha_fin', type: 'date' })
  fechaFin: Date;

  // Estado del año lectivo: 'planificacion', 'activo', 'cerrado'
  @Column({ type: 'varchar', length: 15, default: 'planificacion' })
  estado: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}