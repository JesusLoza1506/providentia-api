import { PeriodosAcademicosService } from './periodos-academicos.service';
import { PeriodoAcademico } from './entities/periodo-academico.entity';
export declare class PeriodosAcademicosController {
    private readonly service;
    constructor(service: PeriodosAcademicosService);
    findAll(): Promise<PeriodoAcademico[]>;
    findByAnioEscolar(anioEscolarId: number): Promise<PeriodoAcademico[]>;
    findOne(id: number): Promise<PeriodoAcademico>;
    create(data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico>;
    update(id: number, data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico>;
    remove(id: number): Promise<void>;
}
