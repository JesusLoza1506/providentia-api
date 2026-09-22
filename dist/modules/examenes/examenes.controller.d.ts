import { ExamenesService } from './examenes.service';
import { Examen } from './entities/examen.entity';
export declare class ExamenesController {
    private readonly service;
    constructor(service: ExamenesService);
    findAll(): Promise<Examen[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Examen[]>;
    findOne(id: number): Promise<Examen>;
    create(data: Partial<Examen>): Promise<Examen>;
    update(id: number, data: Partial<Examen>): Promise<Examen>;
    remove(id: number): Promise<void>;
}
