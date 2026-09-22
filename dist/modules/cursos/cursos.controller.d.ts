import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';
export declare class CursosController {
    private readonly service;
    constructor(service: CursosService);
    findAll(): Promise<Curso[]>;
    findByNivel(nivelId: number): Promise<Curso[]>;
    findOne(id: number): Promise<Curso>;
    create(data: Partial<Curso>): Promise<Curso>;
    update(id: number, data: Partial<Curso>): Promise<Curso>;
    remove(id: number): Promise<void>;
}
