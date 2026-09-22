import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstudianteApoderado } from './entities/estudiante-apoderado.entity';

@Injectable()
export class EstudianteApoderadoService {
  constructor(
    @InjectRepository(EstudianteApoderado)
    private readonly repo: Repository<EstudianteApoderado>,
  ) {}

  async findAll(): Promise<EstudianteApoderado[]> {
    return await this.repo.find({
      relations: {
        estudiante: { persona: true },
        apoderado: { persona: true },
      },
    });
  }

  async findByEstudiante(estudianteId: number): Promise<EstudianteApoderado[]> {
    return await this.repo.find({
      where: { estudianteId },
      relations: {
        apoderado: { persona: true },
      },
    });
  }

  async findByApoderado(apoderadoId: number): Promise<EstudianteApoderado[]> {
    return await this.repo.find({
      where: { apoderadoId },
      relations: {
        estudiante: { persona: true },
      },
    });
  }

  async findOne(id: number): Promise<EstudianteApoderado> {
    const item = await this.repo.findOne({
      where: { id },
      relations: {
        estudiante: { persona: true },
        apoderado: { persona: true },
      },
    });
    if (!item) {
      throw new NotFoundException(`Relación Estudiante-Apoderado con ID ${id} no encontrada`);
    }
    return item;
  }

  async create(data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<EstudianteApoderado>): Promise<EstudianteApoderado> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}