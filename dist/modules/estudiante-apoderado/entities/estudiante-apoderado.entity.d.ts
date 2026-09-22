import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Apoderado } from '../../apoderados/entities/apoderado.entity';
export declare class EstudianteApoderado {
    id: number;
    estudianteId: number;
    estudiante: Estudiante;
    apoderadoId: number;
    apoderado: Apoderado;
    parentesco: string;
    esPrincipal: boolean;
    createdAt: Date;
    updatedAt: Date;
}
