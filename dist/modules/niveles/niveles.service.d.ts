import { Repository } from 'typeorm';
import { Nivel } from './entities/nivel.entity';
export declare class NivelesService {
    private readonly nivelRepository;
    constructor(nivelRepository: Repository<Nivel>);
    findAll(): Promise<Nivel[]>;
    findOne(id: number): Promise<Nivel>;
    create(data: Partial<Nivel>): Promise<Nivel>;
    update(id: number, data: Partial<Nivel>): Promise<Nivel>;
    remove(id: number): Promise<void>;
}
