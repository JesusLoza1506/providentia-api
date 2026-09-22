import { AlertasIaService } from './alertas-ia.service';
import { AlertaIa } from './entities/alerta-ia.entity';
export declare class AlertasIaController {
    private readonly service;
    constructor(service: AlertasIaService);
    findAll(): Promise<AlertaIa[]>;
    findOne(id: number): Promise<AlertaIa>;
    create(data: Partial<AlertaIa>): Promise<AlertaIa>;
    update(id: number, data: Partial<AlertaIa>): Promise<AlertaIa>;
    remove(id: number): Promise<void>;
}
