import { CursosVirtualesService } from './cursos-virtuales.service';
import { CursoVirtual } from './entities/curso-virtual.entity';
export declare class CursosVirtualesController {
    private readonly service;
    constructor(service: CursosVirtualesService);
    findAll(): Promise<CursoVirtual[]>;
    findOne(id: number): Promise<CursoVirtual>;
    create(data: Partial<CursoVirtual>): Promise<CursoVirtual>;
    update(id: number, data: Partial<CursoVirtual>): Promise<CursoVirtual>;
    remove(id: number): Promise<void>;
}
