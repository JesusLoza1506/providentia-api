import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pregunta } from './entities/pregunta.entity';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectRepository(Pregunta)
    private readonly repo: Repository<Pregunta>,
  ) {}

  async findAll(): Promise<Pregunta[]> {
    return await this.repo.find({ relations: { examen: true } });
  }

  async findByExamen(examenId: number): Promise<Pregunta[]> {
    return await this.repo.find({
      where: { examenId },
    });
  }

  async findOne(id: number): Promise<Pregunta> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { examen: true },
    });
    if (!item) throw new NotFoundException(`Pregunta con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Pregunta>): Promise<Pregunta> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Pregunta>): Promise<Pregunta> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}