import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Nivel } from '../../niveles/entities/nivel.entity';

// Tabla 'grados' segun el diccionario de datos
@Entity('grados')
export class Grado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nivel_id', type: 'int' })
  nivelId: number;

  @ManyToOne(() => Nivel, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'nivel_id' })
  nivel: Nivel;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ name: 'numero_orden', type: 'smallint' })
  numeroOrden: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}