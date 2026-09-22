import { CursoDocenteSeccion } from '../../curso-docente-seccion/entities/curso-docente-seccion.entity';
export declare class CursoVirtual {
    id: number;
    cursoDocenteSeccionId: number;
    cursoDocenteSeccion: CursoDocenteSeccion;
    descripcion: string;
    bannerUrl: string;
    createdAt: Date;
    updatedAt: Date;
}
