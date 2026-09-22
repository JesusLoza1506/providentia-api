import { SeccionesService } from './secciones.service';
import { Seccion } from './entities/seccion.entity';
export declare class SeccionesController {
    private readonly seccionesService;
    constructor(seccionesService: SeccionesService);
    findAll(): Promise<Seccion[]>;
    findByGradoAndAnio(gradoId: number, anioEscolarId: number): Promise<Seccion[]>;
    findByTutor(tutorDocenteId: number): Promise<Seccion[]>;
    findOne(id: number): Promise<Seccion>;
    create(data: Partial<Seccion>): Promise<Seccion>;
    update(id: number, data: Partial<Seccion>): Promise<Seccion>;
    remove(id: number): Promise<void>;
}
