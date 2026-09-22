import { MatriculasService } from './matriculas.service';
import { Matricula } from './entities/matricula.entity';
export declare class MatriculasController {
    private readonly service;
    constructor(service: MatriculasService);
    findAll(): Promise<Matricula[]>;
    findByEstudiante(estudianteId: number): Promise<Matricula[]>;
    findBySeccion(seccionId: number, anioEscolarId?: string): Promise<Matricula[]>;
    findOne(id: number): Promise<Matricula>;
    create(data: Partial<Matricula>): Promise<Matricula>;
    update(id: number, data: Partial<Matricula>): Promise<Matricula>;
    remove(id: number): Promise<void>;
}
