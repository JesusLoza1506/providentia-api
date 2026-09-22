import { Repository } from 'typeorm';
import { Matricula } from './entities/matricula.entity';
export declare class MatriculasService {
    private readonly repo;
    constructor(repo: Repository<Matricula>);
    findAll(): Promise<Matricula[]>;
    findByEstudiante(estudianteId: number): Promise<Matricula[]>;
    findBySeccion(seccionId: number, anioEscolarId?: number): Promise<Matricula[]>;
    findOne(id: number): Promise<Matricula>;
    create(data: Partial<Matricula>): Promise<Matricula>;
    update(id: number, data: Partial<Matricula>): Promise<Matricula>;
    remove(id: number): Promise<void>;
}
