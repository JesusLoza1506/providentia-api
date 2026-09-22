import { Matricula } from '../../matriculas/entities/matricula.entity';
import { Curso } from '../../cursos/entities/curso.entity';
import { PeriodoAcademico } from '../../periodos-academicos/entities/periodo-academico.entity';
import { Competencia } from '../../competencias/entities/competencia.entity';
import { Docente } from '../../docentes/entities/docente.entity';
export declare class Nota {
    id: number;
    matriculaId: number;
    matricula: Matricula;
    cursoId: number;
    curso: Curso;
    periodoAcademicoId: number;
    periodoAcademico: PeriodoAcademico;
    competenciaId: number;
    competencia: Competencia;
    tipoEvaluacion: string;
    valorLiteral: string;
    valorNumerico: number;
    registradoPor: number;
    docente: Docente;
    fechaRegistro: Date;
    createdAt: Date;
    updatedAt: Date;
}
