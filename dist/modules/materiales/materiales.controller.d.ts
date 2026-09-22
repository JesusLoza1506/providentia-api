import { MaterialesService } from './materiales.service';
import { Material } from './entities/material.entity';
export declare class MaterialesController {
    private readonly service;
    constructor(service: MaterialesService);
    findAll(): Promise<Material[]>;
    findByCursoVirtual(cursoVirtualId: number): Promise<Material[]>;
    findOne(id: number): Promise<Material>;
    create(data: Partial<Material>): Promise<Material>;
    update(id: number, data: Partial<Material>): Promise<Material>;
    remove(id: number): Promise<void>;
}
