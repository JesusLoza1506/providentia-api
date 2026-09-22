import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';

@Entity('foros')
export class Foro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'curso_virtual_id', type: 'int' })
  cursoVirtualId: number;

  @ManyToOne(() => CursoVirtual, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'curso_virtual_id' })
  cursoVirtual: CursoVirtual;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}