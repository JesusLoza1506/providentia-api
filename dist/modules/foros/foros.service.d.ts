import { Repository } from 'typeorm';
import { Foro } from './entities/foro.entity';
export declare class ForosService {
    private readonly repo;
    constructor(repo: Repository<Foro>);
    findAll(): Promise<Foro[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Foro[]>;
    findOne(id: number): Promise<Foro>;
    create(data: Partial<Foro>): Promise<Foro>;
    update(id: number, data: Partial<Foro>): Promise<Foro>;
    remove(id: number): Promise<void>;
}
