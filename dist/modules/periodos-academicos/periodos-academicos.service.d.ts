import { Repository } from 'typeorm';
import { PeriodoAcademico } from './entities/periodo-academico.entity';
export declare class PeriodosAcademicosService {
    private readonly repo;
    constructor(repo: Repository<PeriodoAcademico>);
    findAll(): Promise<PeriodoAcademico[]>;
    findByAnioEscolar(anioEscolarId: number): Promise<PeriodoAcademico[]>;
    findOne(id: number): Promise<PeriodoAcademico>;
    create(data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico>;
    update(id: number, data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico>;
    remove(id: number): Promise<void>;
}
