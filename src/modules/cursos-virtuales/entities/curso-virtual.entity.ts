import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CursoDocenteSeccion } from '../../curso-docente-seccion/entities/curso-docente-seccion.entity';

@Entity('cursos_virtuales')
export class CursoVirtual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_docente_seccion_id', type: 'int', unique: true })
  cursoDocenteSeccionId: number;

  @OneToOne(() => CursoDocenteSeccion, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_docente_seccion_id' })
  cursoDocenteSeccion: CursoDocenteSeccion;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ name: 'banner_url', type: 'varchar', length: 255, nullable: true })
  bannerUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}