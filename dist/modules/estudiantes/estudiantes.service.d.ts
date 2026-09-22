import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
export declare class EstudiantesService {
    private readonly estudianteRepository;
    constructor(estudianteRepository: Repository<Estudiante>);
    findAll(): Promise<Estudiante[]>;
    findOne(id: number): Promise<Estudiante>;
    findByUsuario(usuarioId: number): Promise<Estudiante>;
    findByCodigo(codigoEstudiante: string): Promise<Estudiante>;
    create(data: Partial<Estudiante>): Promise<Estudiante>;
    update(id: number, data: Partial<Estudiante>): Promise<Estudiante>;
    remove(id: number): Promise<void>;
}
