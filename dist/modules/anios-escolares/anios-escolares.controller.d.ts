import { AniosEscolaresService } from './anios-escolares.service';
import { AnioEscolar } from './entities/anio-escolar.entity';
export declare class AniosEscolaresController {
    private readonly aniosEscolaresService;
    constructor(aniosEscolaresService: AniosEscolaresService);
    findAll(): Promise<AnioEscolar[]>;
    findOne(id: number): Promise<AnioEscolar>;
    create(data: Partial<AnioEscolar>): Promise<AnioEscolar>;
    update(id: number, data: Partial<AnioEscolar>): Promise<AnioEscolar>;
    remove(id: number): Promise<void>;
}
