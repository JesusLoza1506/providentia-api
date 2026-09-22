import { GradosService } from './grados.service';
import { Grado } from './entities/grado.entity';
export declare class GradosController {
    private readonly gradosService;
    constructor(gradosService: GradosService);
    findAll(): Promise<Grado[]>;
    findByNivel(nivelId: number): Promise<Grado[]>;
    findOne(id: number): Promise<Grado>;
    create(data: Partial<Grado>): Promise<Grado>;
    update(id: number, data: Partial<Grado>): Promise<Grado>;
    remove(id: number): Promise<void>;
}
