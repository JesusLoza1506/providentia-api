import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @Column({ name: 'tipo_documento', type: 'varchar', length: 50 })
  tipoDocumento: string; // partida_nacimiento, dni, libreta_anterior, foto

  @Column({ name: 'archivo_url', type: 'varchar', length: 255 })
  archivoUrl: string;

  @CreateDateColumn({ name: 'fecha_carga', type: 'timestamp' })
  fechaCarga: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}