import { Repository } from 'typeorm';
import { Apoderado } from './entities/apoderado.entity';
export declare class ApoderadosService {
    private readonly apoderadoRepository;
    constructor(apoderadoRepository: Repository<Apoderado>);
    findAll(): Promise<Apoderado[]>;
    findOne(id: number): Promise<Apoderado>;
    create(data: Partial<Apoderado>): Promise<Apoderado>;
    update(id: number, data: Partial<Apoderado>): Promise<Apoderado>;
    remove(id: number): Promise<void>;
}
