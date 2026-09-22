import { PagosService } from './pagos.service';
import { Pago } from './entities/pago.entity';
export declare class PagosController {
    private readonly service;
    constructor(service: PagosService);
    findAll(): Promise<Pago[]>;
    findByEstudiante(estudianteId: number): Promise<Pago[]>;
    findByEstado(estado: string): Promise<Pago[]>;
    findOne(id: number): Promise<Pago>;
    create(data: Partial<Pago>): Promise<Pago>;
    update(id: number, data: Partial<Pago>): Promise<Pago>;
    remove(id: number): Promise<void>;
}
