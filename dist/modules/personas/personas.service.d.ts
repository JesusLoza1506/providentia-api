import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
export declare class PersonasService {
    private readonly personaRepository;
    constructor(personaRepository: Repository<Persona>);
    findAll(): Promise<Persona[]>;
    findOne(id: number): Promise<Persona>;
    findByNumeroDocumento(numeroDocumento: string): Promise<Persona>;
    create(data: Partial<Persona>): Promise<Persona>;
    update(id: number, data: Partial<Persona>): Promise<Persona>;
    remove(id: number): Promise<void>;
}
