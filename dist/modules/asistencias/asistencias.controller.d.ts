import { AsistenciasService } from './asistencias.service';
import { Asistencia } from './entities/asistencia.entity';
export declare class AsistenciasController {
    private readonly service;
    constructor(service: AsistenciasService);
    findAll(): Promise<Asistencia[]>;
    findOne(id: number): Promise<Asistencia>;
    create(data: Partial<Asistencia>): Promise<Asistencia>;
    createBulk(dataList: Partial<Asistencia>[]): Promise<Asistencia[]>;
    update(id: number, data: Partial<Asistencia>): Promise<Asistencia>;
    remove(id: number): Promise<void>;
}
