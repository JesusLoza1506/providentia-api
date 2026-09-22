import { Repository } from 'typeorm';
import { Grado } from './entities/grado.entity';
export declare class GradosService {
    private readonly gradoRepository;
    constructor(gradoRepository: Repository<Grado>);
    findAll(): Promise<Grado[]>;
    findByNivel(nivelId: number): Promise<Grado[]>;
    findOne(id: number): Promise<Grado>;
    create(data: Partial<Grado>): Promise<Grado>;
    update(id: number, data: Partial<Grado>): Promise<Grado>;
    remove(id: number): Promise<void>;
}
