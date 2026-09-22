import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';

@Entity('periodos_academicos')
export class PeriodoAcademico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'anio_escolar_id', type: 'int' })
  anioEscolarId: number;

  @ManyToOne(() => AnioEscolar, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'anio_escolar_id' })
  anioEscolar: AnioEscolar;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ name: 'fecha_inicio', type: 'date' })
  fechaInicio: string;

  @Column({ name: 'fecha_fin', type: 'date' })
  fechaFin: string;

  @Column({ type: 'smallint' })
  orden: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}