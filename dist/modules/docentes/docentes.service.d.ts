import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';
export declare class DocentesService {
    private readonly docenteRepository;
    constructor(docenteRepository: Repository<Docente>);
    findAll(): Promise<Docente[]>;
    findOne(id: number): Promise<Docente>;
    findByUsuario(usuarioId: number): Promise<Docente>;
    create(data: Partial<Docente>): Promise<Docente>;
    update(id: number, data: Partial<Docente>): Promise<Docente>;
    remove(id: number): Promise<void>;
}
