import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foro } from './entities/foro.entity';

@Injectable()
export class ForosService {
  constructor(
    @InjectRepository(Foro)
    private readonly repo: Repository<Foro>,
  ) {}

  async findAll(): Promise<Foro[]> {
    return await this.repo.find({
      relations: { cursoVirtual: true },
    });
  }

  async findByCursoVirtual(cursoVirtualId: number): Promise<Foro[]> {
    return await this.repo.find({
      where: { cursoVirtualId },
      relations: { cursoVirtual: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Foro> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { cursoVirtual: true },
    });
    if (!item) throw new NotFoundException(`Foro con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<Foro>): Promise<Foro> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Foro>): Promise<Foro> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}