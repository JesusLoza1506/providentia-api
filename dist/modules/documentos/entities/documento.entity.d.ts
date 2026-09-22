import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
export declare class Documento {
    id: number;
    estudianteId: number;
    estudiante: Estudiante;
    tipoDocumento: string;
    archivoUrl: string;
    fechaCarga: Date;
    createdAt: Date;
    updatedAt: Date;
}
