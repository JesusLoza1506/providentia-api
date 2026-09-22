import { CursoDocenteSeccionService } from './curso-docente-seccion.service';
import { CursoDocenteSeccion } from './entities/curso-docente-seccion.entity';
export declare class CursoDocenteSeccionController {
    private readonly service;
    constructor(service: CursoDocenteSeccionService);
    findAll(): Promise<CursoDocenteSeccion[]>;
    findOne(id: number): Promise<CursoDocenteSeccion>;
    create(data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion>;
    update(id: number, data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion>;
    remove(id: number): Promise<void>;
}
