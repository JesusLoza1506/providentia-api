import { Examen } from '../../examenes/entities/examen.entity';
import { Pregunta } from '../../preguntas/entities/pregunta.entity';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
export declare class RespuestaEstudiante {
    id: number;
    examenId: number;
    examen: Examen;
    preguntaId: number;
    pregunta: Pregunta;
    estudianteId: number;
    estudiante: Estudiante;
    respuestaTexto: string;
    calificacionIa: number;
    calificacionFinal: number;
    createdAt: Date;
    updatedAt: Date;
}
