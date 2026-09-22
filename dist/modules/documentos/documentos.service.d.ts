import { Repository } from 'typeorm';
import { Documento } from './entities/documento.entity';
export declare class DocumentosService {
    private readonly repo;
    constructor(repo: Repository<Documento>);
    findAll(): Promise<Documento[]>;
    findByEstudiante(estudianteId: number): Promise<Documento[]>;
    findOne(id: number): Promise<Documento>;
    create(data: Partial<Documento>): Promise<Documento>;
    update(id: number, data: Partial<Documento>): Promise<Documento>;
    remove(id: number): Promise<void>;
}
