import { ApoderadosService } from './apoderados.service';
import { Apoderado } from './entities/apoderado.entity';
export declare class ApoderadosController {
    private readonly apoderadosService;
    constructor(apoderadosService: ApoderadosService);
    findAll(): Promise<Apoderado[]>;
    findOne(id: number): Promise<Apoderado>;
    create(data: Partial<Apoderado>): Promise<Apoderado>;
    update(id: number, data: Partial<Apoderado>): Promise<Apoderado>;
    remove(id: number): Promise<void>;
}
