import { NotasService } from './notas.service';
import { Nota } from './entities/nota.entity';
export declare class NotasController {
    private readonly service;
    constructor(service: NotasService);
    findAll(): Promise<Nota[]>;
    findByMatricula(matriculaId: number): Promise<Nota[]>;
    findByCursoAndPeriodo(cursoId: number, periodoAcademicoId: number): Promise<Nota[]>;
    findOne(id: number): Promise<Nota>;
    create(data: Partial<Nota>): Promise<Nota>;
    update(id: number, data: Partial<Nota>): Promise<Nota>;
    remove(id: number): Promise<void>;
}
