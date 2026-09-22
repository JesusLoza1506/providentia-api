import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlertaIa } from './entities/alerta-ia.entity';

@Injectable()
export class AlertasIaService {
  constructor(
    @InjectRepository(AlertaIa)
    private readonly repo: Repository<AlertaIa>,
  ) {}

  async findAll(): Promise<AlertaIa[]> {
    return await this.repo.find({
      relations: { estudiante: true, atendidoPor: true },
      order: { fechaGeneracion: 'DESC' }, // Ordenar siempre por las más recientes primero
    });
  }

  async findOne(id: number): Promise<AlertaIa> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { estudiante: true, atendidoPor: true },
    });
    if (!item) throw new NotFoundException(`Alerta IA con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<AlertaIa>): Promise<AlertaIa> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<AlertaIa>): Promise<AlertaIa> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}