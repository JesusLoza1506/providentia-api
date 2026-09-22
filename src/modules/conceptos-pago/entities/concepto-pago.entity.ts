import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('conceptos_pago')
export class ConceptoPago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @Column({ name: 'monto_defecto', type: 'decimal', precision: 8, scale: 2, nullable: true })
  montoDefecto: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}