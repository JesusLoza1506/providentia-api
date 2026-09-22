import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntregaTarea } from './entities/entrega-tarea.entity';

@Injectable()
export class EntregasTareasService {
  constructor(
    @InjectRepository(EntregaTarea)
    private readonly repo: Repository<EntregaTarea>,
  ) {}

  async findAll(): Promise<EntregaTarea[]> {
    return await this.repo.find({
      relations: {
        tarea: true,
        estudiante: { persona: true },
      },
    });
  }

  async findByTarea(tareaId: number): Promise<EntregaTarea[]> {
    return await this.repo.find({
      where: { tareaId },
      relations: {
        estudiante: { persona: true },
      },
      order: { fechaEntrega: 'ASC' },
    });
  }

  async findByEstudiante(estudianteId: number): Promise<EntregaTarea[]> {
    return await this.repo.find({
      where: { estudianteId },
      relations: { tarea: true },
      order: { fechaEntrega: 'DESC' },
    });
  }

  async findOne(id: number): Promise<EntregaTarea> {
    const item = await this.repo.findOne({
      where: { id },
      relations: {
        tarea: true,
        estudiante: { persona: true },
      },
    });
    if (!item) throw new NotFoundException(`Entrega de tarea con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<EntregaTarea>): Promise<EntregaTarea> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<EntregaTarea>): Promise<EntregaTarea> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}