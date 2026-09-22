import { CompetenciasService } from './competencias.service';
import { Competencia } from './entities/competencia.entity';
export declare class CompetenciasController {
    private readonly service;
    constructor(service: CompetenciasService);
    findAll(): Promise<Competencia[]>;
    findByCurso(cursoId: number): Promise<Competencia[]>;
    findOne(id: number): Promise<Competencia>;
    create(data: Partial<Competencia>): Promise<Competencia>;
    update(id: number, data: Partial<Competencia>): Promise<Competencia>;
    remove(id: number): Promise<void>;
}
