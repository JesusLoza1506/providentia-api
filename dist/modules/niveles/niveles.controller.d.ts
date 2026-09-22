import { NivelesService } from './niveles.service';
import { Nivel } from './entities/nivel.entity';
export declare class NivelesController {
    private readonly nivelesService;
    constructor(nivelesService: NivelesService);
    findAll(): Promise<Nivel[]>;
    findOne(id: number): Promise<Nivel>;
    create(data: Partial<Nivel>): Promise<Nivel>;
    update(id: number, data: Partial<Nivel>): Promise<Nivel>;
    remove(id: number): Promise<void>;
}
