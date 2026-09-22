import { DocumentosService } from './documentos.service';
import { Documento } from './entities/documento.entity';
export declare class DocumentosController {
    private readonly service;
    constructor(service: DocumentosService);
    findAll(): Promise<Documento[]>;
    findByEstudiante(estudianteId: number): Promise<Documento[]>;
    findOne(id: number): Promise<Documento>;
    create(data: Partial<Documento>): Promise<Documento>;
    update(id: number, data: Partial<Documento>): Promise<Documento>;
    remove(id: number): Promise<void>;
}
