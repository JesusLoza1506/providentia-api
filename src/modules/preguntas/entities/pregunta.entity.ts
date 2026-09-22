import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Examen } from '../../examenes/entities/examen.entity';

@Entity('preguntas')
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'examen_id', type: 'int' })
  examenId: number;

  @ManyToOne(() => Examen, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'examen_id' })
  examen: Examen;

  @Column({ type: 'text' })
  enunciado: string;

  @Column({ type: 'varchar', length: 20 })
  tipo: string; // opcion_multiple, v_f, desarrollo

  @Column({ type: 'jsonb', nullable: true })
  opciones: any;

  @Column({ name: 'respuesta_correcta', type: 'text', nullable: true })
  respuestaCorrecta: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  puntaje: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}