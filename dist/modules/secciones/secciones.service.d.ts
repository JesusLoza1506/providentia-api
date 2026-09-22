import { Repository } from 'typeorm';
import { Seccion } from './entities/seccion.entity';
export declare class SeccionesService {
    private readonly seccionRepository;
    constructor(seccionRepository: Repository<Seccion>);
    findAll(): Promise<Seccion[]>;
    findByGradoAndAnio(gradoId: number, anioEscolarId: number): Promise<Seccion[]>;
    findByTutor(tutorDocenteId: number): Promise<Seccion[]>;
    findOne(id: number): Promise<Seccion>;
    create(data: Partial<Seccion>): Promise<Seccion>;
    update(id: number, data: Partial<Seccion>): Promise<Seccion>;
    remove(id: number): Promise<void>;
}
