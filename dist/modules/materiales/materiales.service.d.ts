import { Repository } from 'typeorm';
import { Material } from './entities/material.entity';
export declare class MaterialesService {
    private readonly repo;
    constructor(repo: Repository<Material>);
    findAll(): Promise<Material[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Material[]>;
    findOne(id: number): Promise<Material>;
    create(data: Partial<Material>): Promise<Material>;
    update(id: number, data: Partial<Material>): Promise<Material>;
    remove(id: number): Promise<void>;
}
