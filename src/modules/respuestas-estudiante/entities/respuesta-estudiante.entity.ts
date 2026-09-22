import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Examen } from '../../examenes/entities/examen.entity';
import { Pregunta } from '../../preguntas/entities/pregunta.entity';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';

@Entity('respuestas_estudiante')
@Unique(['preguntaId', 'estudianteId'])
export class RespuestaEstudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'examen_id', type: 'int' })
  examenId: number;

  @ManyToOne(() => Examen, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'examen_id' })
  examen: Examen;

  @Column({ name: 'pregunta_id', type: 'int' })
  preguntaId: number;

  @ManyToOne(() => Pregunta, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pregunta_id' })
  pregunta: Pregunta;

  @Column({ name: 'estudiante_id', type: 'int' })
  estudianteId: number;

  @ManyToOne(() => Estudiante, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @Column({ name: 'respuesta_texto', type: 'text', nullable: true })
  respuestaTexto: string;

  @Column({ name: 'calificacion_ia', type: 'decimal', precision: 5, scale: 2, nullable: true })
  calificacionIa: number;

  @Column({ name: 'calificacion_final', type: 'decimal', precision: 5, scale: 2, nullable: true })
  calificacionFinal: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}