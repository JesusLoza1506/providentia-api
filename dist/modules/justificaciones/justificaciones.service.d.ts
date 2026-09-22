import { Repository } from 'typeorm';
import { Justificacion } from './entities/justificacion.entity';
export declare class JustificacionesService {
    private readonly repo;
    constructor(repo: Repository<Justificacion>);
    findAll(): Promise<Justificacion[]>;
    findByAsistencia(asistenciaId: number): Promise<Justificacion>;
    findByEstado(estadoAprobacion: string): Promise<Justificacion[]>;
    findOne(id: number): Promise<Justificacion>;
    create(data: Partial<Justificacion>): Promise<Justificacion>;
    update(id: number, data: Partial<Justificacion>): Promise<Justificacion>;
    remove(id: number): Promise<void>;
}
