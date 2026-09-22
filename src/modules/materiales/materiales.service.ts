import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './entities/material.entity';

@Injectable()
export class MaterialesService {
  constructor(
    @InjectRepository(Material)
    private readonly repo: Repository<Material>,
  ) {}

  async findAll(): Promise<Material[]> {
    return await this.repo.find({
      relations: { cursoVirtual: true },
      order: { fechaPublicacion: 'DESC' },
    });
  }

  async findByCursoVirtual(cursoVirtualId: number): Promise<Material[]> {
    return await this.repo.find({
      where: { cursoVirtualId },
      relations: { cursoVirtual: true },
      order: { fechaPublicacion: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Material> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { cursoVirtual: true },
    });
    if (!item) throw new NotFoundException(`Material con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<Material>): Promise<Material> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Material>): Promise<Material> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}