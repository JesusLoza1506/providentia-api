import { RespuestasEstudianteService } from './respuestas-estudiante.service';
import { RespuestaEstudiante } from './entities/respuesta-estudiante.entity';
export declare class RespuestasEstudianteController {
    private readonly service;
    constructor(service: RespuestasEstudianteService);
    findAll(): Promise<RespuestaEstudiante[]>;
    findByExamenAndEstudiante(examenId: number, estudianteId: number): Promise<RespuestaEstudiante[]>;
    findOne(id: number): Promise<RespuestaEstudiante>;
    create(data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante>;
    saveBatch(data: Partial<RespuestaEstudiante>[]): Promise<RespuestaEstudiante[]>;
    update(id: number, data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante>;
    remove(id: number): Promise<void>;
}
