import { Curso } from '../../cursos/entities/curso.entity';
import { Docente } from '../../docentes/entities/docente.entity';
import { Seccion } from '../../secciones/entities/seccion.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';
export declare class CursoDocenteSeccion {
    id: number;
    cursoId: number;
    curso: Curso;
    docenteId: number;
    docente: Docente;
    seccionId: number;
    seccion: Seccion;
    anioEscolarId: number;
    anioEscolar: AnioEscolar;
    createdAt: Date;
    updatedAt: Date;
}
