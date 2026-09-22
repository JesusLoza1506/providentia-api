import { Tarea } from '../../tareas/entities/tarea.entity';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
export declare class EntregaTarea {
    id: number;
    tareaId: number;
    tarea: Tarea;
    estudianteId: number;
    estudiante: Estudiante;
    archivoUrl: string;
    comentario: string;
    fechaEntrega: Date;
    calificacion: number;
    feedbackDocente: string;
    createdAt: Date;
    updatedAt: Date;
}
