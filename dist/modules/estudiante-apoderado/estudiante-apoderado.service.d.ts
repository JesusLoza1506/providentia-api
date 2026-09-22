import { Repository } from 'typeorm';
import { EstudianteApoderado } from './entities/estudiante-apoderado.entity';
export declare class EstudianteApoderadoService {
    private readonly repo;
    constructor(repo: Repository<EstudianteApoderado>);
    findAll(): Promise<EstudianteApoderado[]>;
    findByEstudiante(estudianteId: number): Promise<EstudianteApoderado[]>;
    findByApoderado(apoderadoId: number): Promise<EstudianteApoderado[]>;
    findOne(id: number): Promise<EstudianteApoderado>;
    create(data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado>;
    update(id: number, data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado>;
    remove(id: number): Promise<void>;
}
