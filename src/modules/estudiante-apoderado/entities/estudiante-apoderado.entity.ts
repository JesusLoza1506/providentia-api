import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Apoderado } from '../../apoderados/entities/apoderado.entity';

@Entity('estudiante_apoderado')
@Unique(['estudianteId', 'apoderadoId'])
export class EstudianteApoderado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @Column({ name: 'apoderado_id', type: 'int' })
  apoderadoId: number;

  @ManyToOne(() => Apoderado, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'apoderado_id' })
  apoderado: Apoderado;

  @Column({ type: 'varchar', length: 30 })
  parentesco: string;

  @Column({ name: 'es_principal', type: 'boolean', default: false })
  esPrincipal: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}