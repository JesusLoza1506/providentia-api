import { EstudianteApoderadoService } from './estudiante-apoderado.service';
import { EstudianteApoderado } from './entities/estudiante-apoderado.entity';
export declare class EstudianteApoderadoController {
    private readonly service;
    constructor(service: EstudianteApoderadoService);
    findAll(): Promise<EstudianteApoderado[]>;
    findByEstudiante(estudianteId: number): Promise<EstudianteApoderado[]>;
    findByApoderado(apoderadoId: number): Promise<EstudianteApoderado[]>;
    findOne(id: number): Promise<EstudianteApoderado>;
    create(data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado>;
    update(id: number, data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado>;
    remove(id: number): Promise<void>;
}
