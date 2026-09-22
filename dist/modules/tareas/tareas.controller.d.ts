import { TareasService } from './tareas.service';
import { Tarea } from './entities/tarea.entity';
export declare class TareasController {
    private readonly service;
    constructor(service: TareasService);
    findAll(): Promise<Tarea[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Tarea[]>;
    findOne(id: number): Promise<Tarea>;
    create(data: Partial<Tarea>): Promise<Tarea>;
    update(id: number, data: Partial<Tarea>): Promise<Tarea>;
    remove(id: number): Promise<void>;
}
