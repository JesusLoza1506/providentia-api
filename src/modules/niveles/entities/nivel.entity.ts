import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Tabla 'niveles' según el diccionario de datos oficial
@Entity('niveles')
export class Nivel {
  @PrimaryGeneratedColumn()
  id: number; // ID entero según el plan de base de datos

  @Column({ type: 'varchar', length: 20, unique: true })
  nombre: string; // Inicial, Primaria, Secundaria

  // Determina la evaluación por defecto: 'competencia' o 'vigesimal'
  @Column({ name: 'tipo_evaluacion_defecto', type: 'varchar', length: 20 })
  tipoEvaluacionDefecto: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}