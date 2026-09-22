import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';
export declare class PeriodoAcademico {
    id: number;
    anioEscolarId: number;
    anioEscolar: AnioEscolar;
    nombre: string;
    fechaInicio: string;
    fechaFin: string;
    orden: number;
    createdAt: Date;
    updatedAt: Date;
}
