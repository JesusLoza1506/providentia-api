import { Repository } from 'typeorm';
import { Horario } from './entities/horario.entity';
export declare class HorariosService {
    private readonly repo;
    constructor(repo: Repository<Horario>);
    findAll(): Promise<Horario[]>;
    findByCursoDocenteSeccion(cursoDocenteSeccionId: number): Promise<Horario[]>;
    findByAulaFisica(aulaFisicaId: number): Promise<Horario[]>;
    findOne(id: number): Promise<Horario>;
    create(data: Partial<Horario>): Promise<Horario>;
    update(id: number, data: Partial<Horario>): Promise<Horario>;
    remove(id: number): Promise<void>;
}
