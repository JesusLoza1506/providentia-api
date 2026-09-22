import { ForosService } from './foros.service';
import { Foro } from './entities/foro.entity';
export declare class ForosController {
    private readonly service;
    constructor(service: ForosService);
    findAll(): Promise<Foro[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Foro[]>;
    findOne(id: number): Promise<Foro>;
    create(data: Partial<Foro>): Promise<Foro>;
    update(id: number, data: Partial<Foro>): Promise<Foro>;
    remove(id: number): Promise<void>;
}
