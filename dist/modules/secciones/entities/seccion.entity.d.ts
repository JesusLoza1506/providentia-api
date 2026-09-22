import { Grado } from '../../grados/entities/grado.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';
import { Docente } from '../../docentes/entities/docente.entity';
export declare class Seccion {
    id: number;
    gradoId: number;
    grado: Grado;
    anioEscolarId: number;
    anioEscolar: AnioEscolar;
    nombre: string;
    turno: string;
    capacidadMaxima: number;
    tutorDocenteId: number;
    tutorDocente: Docente;
    createdAt: Date;
    updatedAt: Date;
}
