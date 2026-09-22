import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { ConceptoPago } from '../../conceptos-pago/entities/concepto-pago.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @Column({ name: 'concepto_pago_id', type: 'int' })
  conceptoPagoId: number;

  @ManyToOne(() => ConceptoPago, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'concepto_pago_id' })
  conceptoPago: ConceptoPago;

  @Column({ name: 'anio_escolar_id', type: 'int' })
  anioEscolarId: number;

  @ManyToOne(() => AnioEscolar, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'anio_escolar_id' })
  anioEscolar: AnioEscolar;

  @Column({ name: 'mes_referencia', type: 'smallint', nullable: true })
  mesReferencia: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  monto: number;

  @Column({ name: 'fecha_vencimiento', type: 'date' })
  fechaVencimiento: Date;

  @Column({ type: 'varchar', length: 15, default: 'pendiente' })
  estado: string; // pendiente, pagado, vencido

  @Column({ name: 'fecha_pago', type: 'timestamp', nullable: true })
  fechaPago: Date;

  @Column({ name: 'referencia_pasarela', type: 'varchar', length: 100, nullable: true })
  referenciaPasarela: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}