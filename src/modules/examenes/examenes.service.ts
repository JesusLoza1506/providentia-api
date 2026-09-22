import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Examen } from './entities/examen.entity';

@Injectable()
export class ExamenesService {
  constructor(
    @InjectRepository(Examen)
    private readonly repo: Repository<Examen>,
  ) {}

  async findAll(): Promise<Examen[]> {
    return await this.repo.find({ relations: { cursoVirtual: true } });
  }

  async findByCursoVirtual(cursoVirtualId: number): Promise<Examen[]> {
    return await this.repo.find({
      where: { cursoVirtualId },
      relations: { cursoVirtual: true },
      order: { fechaDisponibleDesde: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Examen> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { cursoVirtual: true },
    });
    if (!item) throw new NotFoundException(`Examen con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<Examen>): Promise<Examen> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Examen>): Promise<Examen> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}