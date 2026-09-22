import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';

@Entity('materiales')
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_virtual_id', type: 'int' })
  cursoVirtualId: number;

  @ManyToOne(() => CursoVirtual, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_virtual_id' })
  cursoVirtual: CursoVirtual;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'varchar', length: 15 })
  tipo: string; // 'pdf' | 'video' | 'link' | 'imagen'

  @Column({ type: 'varchar', length: 255 })
  url: string;

  @Column({ name: 'fecha_publicacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaPublicacion: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}