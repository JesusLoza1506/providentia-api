import { Repository } from 'typeorm';
import { EntregaTarea } from './entities/entrega-tarea.entity';
export declare class EntregasTareasService {
    private readonly repo;
    constructor(repo: Repository<EntregaTarea>);
    findAll(): Promise<EntregaTarea[]>;
    findByTarea(tareaId: number): Promise<EntregaTarea[]>;
    findByEstudiante(estudianteId: number): Promise<EntregaTarea[]>;
    findOne(id: number): Promise<EntregaTarea>;
    create(data: Partial<EntregaTarea>): Promise<EntregaTarea>;
    update(id: number, data: Partial<EntregaTarea>): Promise<EntregaTarea>;
    remove(id: number): Promise<void>;
}
