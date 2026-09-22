import { Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';
export declare class TareasService {
    private readonly repo;
    constructor(repo: Repository<Tarea>);
    findAll(): Promise<Tarea[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Tarea[]>;
    findOne(id: number): Promise<Tarea>;
    create(data: Partial<Tarea>): Promise<Tarea>;
    update(id: number, data: Partial<Tarea>): Promise<Tarea>;
    remove(id: number): Promise<void>;
}
