import { PersonasService } from './personas.service';
import { Persona } from './entities/persona.entity';
export declare class PersonasController {
    private readonly personasService;
    constructor(personasService: PersonasService);
    findAll(): Promise<Persona[]>;
    findByDocumento(num: string): Promise<Persona>;
    findOne(id: number): Promise<Persona>;
    create(data: Partial<Persona>): Promise<Persona>;
    update(id: number, data: Partial<Persona>): Promise<Persona>;
    remove(id: number): Promise<void>;
}
