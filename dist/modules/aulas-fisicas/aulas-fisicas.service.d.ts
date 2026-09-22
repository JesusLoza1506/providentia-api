import { Repository } from 'typeorm';
import { AulaFisica } from './entities/aula-fisica.entity';
export declare class AulasFisicasService {
    private readonly aulaFisicaRepository;
    constructor(aulaFisicaRepository: Repository<AulaFisica>);
    findAll(): Promise<AulaFisica[]>;
    findOne(id: number): Promise<AulaFisica>;
    create(data: Partial<AulaFisica>): Promise<AulaFisica>;
    update(id: number, data: Partial<AulaFisica>): Promise<AulaFisica>;
    remove(id: number): Promise<void>;
}
