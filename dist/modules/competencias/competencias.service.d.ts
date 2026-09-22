import { Repository } from 'typeorm';
import { Competencia } from './entities/competencia.entity';
export declare class CompetenciasService {
    private readonly repo;
    constructor(repo: Repository<Competencia>);
    findAll(): Promise<Competencia[]>;
    findByCurso(cursoId: number): Promise<Competencia[]>;
    findOne(id: number): Promise<Competencia>;
    create(data: Partial<Competencia>): Promise<Competencia>;
    update(id: number, data: Partial<Competencia>): Promise<Competencia>;
    remove(id: number): Promise<void>;
}
