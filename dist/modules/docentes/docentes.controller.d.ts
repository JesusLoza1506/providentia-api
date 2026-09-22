import { DocentesService } from './docentes.service';
import { Docente } from './entities/docente.entity';
export declare class DocentesController {
    private readonly docentesService;
    constructor(docentesService: DocentesService);
    findAll(): Promise<Docente[]>;
    findOne(id: number): Promise<Docente>;
    findByUsuario(usuarioId: number): Promise<Docente>;
    create(data: Partial<Docente>): Promise<Docente>;
    update(id: number, data: Partial<Docente>): Promise<Docente>;
    remove(id: number): Promise<void>;
}
