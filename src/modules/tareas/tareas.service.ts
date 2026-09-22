import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tarea)
    private readonly repo: Repository<Tarea>,
  ) {}

  async findAll(): Promise<Tarea[]> {
    return await this.repo.find({
      relations: { cursoVirtual: true },
      order: { fechaEntrega: 'ASC' },
    });
  }

  async findByCursoVirtual(cursoVirtualId: number): Promise<Tarea[]> {
    return await this.repo.find({
      where: { cursoVirtualId },
      order: { fechaEntrega: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Tarea> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { cursoVirtual: true },
    });
    if (!item) throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Tarea>): Promise<Tarea> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Tarea>): Promise<Tarea> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}