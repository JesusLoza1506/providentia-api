import { Repository } from 'typeorm';
import { AlertaIa } from './entities/alerta-ia.entity';
export declare class AlertasIaService {
    private readonly repo;
    constructor(repo: Repository<AlertaIa>);
    findAll(): Promise<AlertaIa[]>;
    findOne(id: number): Promise<AlertaIa>;
    create(data: Partial<AlertaIa>): Promise<AlertaIa>;
    update(id: number, data: Partial<AlertaIa>): Promise<AlertaIa>;
    remove(id: number): Promise<void>;
}
