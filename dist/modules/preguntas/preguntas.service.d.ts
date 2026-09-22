import { Repository } from 'typeorm';
import { Pregunta } from './entities/pregunta.entity';
export declare class PreguntasService {
    private readonly repo;
    constructor(repo: Repository<Pregunta>);
    findAll(): Promise<Pregunta[]>;
    findByExamen(examenId: number): Promise<Pregunta[]>;
    findOne(id: number): Promise<Pregunta>;
    create(data: Partial<Pregunta>): Promise<Pregunta>;
    update(id: number, data: Partial<Pregunta>): Promise<Pregunta>;
    remove(id: number): Promise<void>;
}
