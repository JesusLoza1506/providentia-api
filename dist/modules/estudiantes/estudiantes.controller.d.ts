import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './entities/estudiante.entity';
export declare class EstudiantesController {
    private readonly estudiantesService;
    constructor(estudiantesService: EstudiantesService);
    findAll(): Promise<Estudiante[]>;
    findByUsuario(usuarioId: number): Promise<Estudiante>;
    findByCodigo(codigo: string): Promise<Estudiante>;
    findOne(id: number): Promise<Estudiante>;
    create(data: Partial<Estudiante>): Promise<Estudiante>;
    update(id: number, data: Partial<Estudiante>): Promise<Estudiante>;
    remove(id: number): Promise<void>;
}
