import { Repository } from 'typeorm';
import { Asistencia } from './entities/asistencia.entity';
export declare class AsistenciasService {
    private readonly repo;
    constructor(repo: Repository<Asistencia>);
    findAll(): Promise<Asistencia[]>;
    findOne(id: number): Promise<Asistencia>;
    create(data: Partial<Asistencia>): Promise<Asistencia>;
    createBulk(dataList: Partial<Asistencia>[]): Promise<Asistencia[]>;
    update(id: number, data: Partial<Asistencia>): Promise<Asistencia>;
    remove(id: number): Promise<void>;
}
