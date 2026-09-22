import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Seccion } from '../../secciones/entities/seccion.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';
export declare class Matricula {
    id: number;
    estudianteId: number;
    estudiante: Estudiante;
    seccionId: number;
    seccion: Seccion;
    anioEscolarId: number;
    anioEscolar: AnioEscolar;
    fechaMatricula: string;
    estado: string;
    tipo: string;
    createdAt: Date;
    updatedAt: Date;
}
