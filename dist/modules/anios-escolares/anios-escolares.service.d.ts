import { Repository } from 'typeorm';
import { AnioEscolar } from './entities/anio-escolar.entity';
export declare class AniosEscolaresService {
    private readonly anioEscolarRepository;
    constructor(anioEscolarRepository: Repository<AnioEscolar>);
    findAll(): Promise<AnioEscolar[]>;
    findOne(id: number): Promise<AnioEscolar>;
    create(data: Partial<AnioEscolar>): Promise<AnioEscolar>;
    update(id: number, data: Partial<AnioEscolar>): Promise<AnioEscolar>;
    remove(id: number): Promise<void>;
}
