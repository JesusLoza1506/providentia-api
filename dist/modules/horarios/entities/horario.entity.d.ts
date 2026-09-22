import { CursoDocenteSeccion } from '../../curso-docente-seccion/entities/curso-docente-seccion.entity';
import { AulaFisica } from '../../aulas-fisicas/entities/aula-fisica.entity';
export declare class Horario {
    id: number;
    cursoDocenteSeccionId: number;
    cursoDocenteSeccion: CursoDocenteSeccion;
    aulaFisicaId: number;
    aulaFisica: AulaFisica;
    diaSemana: number;
    horaInicio: string;
    horaFin: string;
    createdAt: Date;
    updatedAt: Date;
}
