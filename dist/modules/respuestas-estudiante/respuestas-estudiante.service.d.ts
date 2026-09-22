import { Repository } from 'typeorm';
import { RespuestaEstudiante } from './entities/respuesta-estudiante.entity';
export declare class RespuestasEstudianteService {
    private readonly repo;
    constructor(repo: Repository<RespuestaEstudiante>);
    findAll(): Promise<RespuestaEstudiante[]>;
    findByExamenAndEstudiante(examenId: number, estudianteId: number): Promise<RespuestaEstudiante[]>;
    findOne(id: number): Promise<RespuestaEstudiante>;
    create(data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante>;
    saveBatch(respuestas: Partial<RespuestaEstudiante>[]): Promise<RespuestaEstudiante[]>;
    update(id: number, data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante>;
    remove(id: number): Promise<void>;
}
