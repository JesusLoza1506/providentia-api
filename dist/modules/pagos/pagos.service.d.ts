import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
export declare class PagosService {
    private readonly repo;
    constructor(repo: Repository<Pago>);
    findAll(): Promise<Pago[]>;
    findByEstudiante(estudianteId: number): Promise<Pago[]>;
    findByEstado(estado: string): Promise<Pago[]>;
    findOne(id: number): Promise<Pago>;
    create(data: Partial<Pago>): Promise<Pago>;
    update(id: number, data: Partial<Pago>): Promise<Pago>;
    remove(id: number): Promise<void>;
}
