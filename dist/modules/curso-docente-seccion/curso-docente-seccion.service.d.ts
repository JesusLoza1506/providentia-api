import { Repository } from 'typeorm';
import { CursoDocenteSeccion } from './entities/curso-docente-seccion.entity';
export declare class CursoDocenteSeccionService {
    private readonly repo;
    constructor(repo: Repository<CursoDocenteSeccion>);
    findAll(): Promise<CursoDocenteSeccion[]>;
    findOne(id: number): Promise<CursoDocenteSeccion>;
    create(data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion>;
    update(id: number, data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion>;
    remove(id: number): Promise<void>;
}
