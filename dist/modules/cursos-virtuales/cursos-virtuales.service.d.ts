import { Repository } from 'typeorm';
import { CursoVirtual } from './entities/curso-virtual.entity';
export declare class CursosVirtualesService {
    private readonly repo;
    constructor(repo: Repository<CursoVirtual>);
    findAll(): Promise<CursoVirtual[]>;
    findOne(id: number): Promise<CursoVirtual>;
    create(data: Partial<CursoVirtual>): Promise<CursoVirtual>;
    update(id: number, data: Partial<CursoVirtual>): Promise<CursoVirtual>;
    remove(id: number): Promise<void>;
}
