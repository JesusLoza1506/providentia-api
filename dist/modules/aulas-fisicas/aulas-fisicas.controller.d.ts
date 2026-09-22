import { AulasFisicasService } from './aulas-fisicas.service';
import { AulaFisica } from './entities/aula-fisica.entity';
export declare class AulasFisicasController {
    private readonly aulasFisicasService;
    constructor(aulasFisicasService: AulasFisicasService);
    findAll(): Promise<AulaFisica[]>;
    findOne(id: number): Promise<AulaFisica>;
    create(data: Partial<AulaFisica>): Promise<AulaFisica>;
    update(id: number, data: Partial<AulaFisica>): Promise<AulaFisica>;
    remove(id: number): Promise<void>;
}
