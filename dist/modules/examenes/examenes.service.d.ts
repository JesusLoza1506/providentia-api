import { Repository } from 'typeorm';
import { Examen } from './entities/examen.entity';
export declare class ExamenesService {
    private readonly repo;
    constructor(repo: Repository<Examen>);
    findAll(): Promise<Examen[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Examen[]>;
    findOne(id: number): Promise<Examen>;
    create(data: Partial<Examen>): Promise<Examen>;
    update(id: number, data: Partial<Examen>): Promise<Examen>;
    remove(id: number): Promise<void>;
}
