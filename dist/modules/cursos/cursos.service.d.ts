import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
export declare class CursosService {
    private readonly repo;
    constructor(repo: Repository<Curso>);
    findAll(): Promise<Curso[]>;
    findByNivel(nivelId: number): Promise<Curso[]>;
    findOne(id: number): Promise<Curso>;
    create(data: Partial<Curso>): Promise<Curso>;
    update(id: number, data: Partial<Curso>): Promise<Curso>;
    remove(id: number): Promise<void>;
}
