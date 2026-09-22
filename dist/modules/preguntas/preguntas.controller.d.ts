import { PreguntasService } from './preguntas.service';
import { Pregunta } from './entities/pregunta.entity';
export declare class PreguntasController {
    private readonly service;
    constructor(service: PreguntasService);
    findAll(): Promise<Pregunta[]>;
    findByExamen(examenId: number): Promise<Pregunta[]>;
    findOne(id: number): Promise<Pregunta>;
    create(data: Partial<Pregunta>): Promise<Pregunta>;
    update(id: number, data: Partial<Pregunta>): Promise<Pregunta>;
    remove(id: number): Promise<void>;
}
