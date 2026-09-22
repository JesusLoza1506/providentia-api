import { JustificacionesService } from './justificaciones.service';
import { Justificacion } from './entities/justificacion.entity';
export declare class JustificacionesController {
    private readonly service;
    constructor(service: JustificacionesService);
    findAll(): Promise<Justificacion[]>;
    findByAsistencia(asistenciaId: number): Promise<Justificacion>;
    findByEstado(estado: string): Promise<Justificacion[]>;
    findOne(id: number): Promise<Justificacion>;
    create(data: Partial<Justificacion>): Promise<Justificacion>;
    update(id: number, data: Partial<Justificacion>): Promise<Justificacion>;
    remove(id: number): Promise<void>;
}
