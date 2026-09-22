import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RespuestaEstudiante } from './entities/respuesta-estudiante.entity';

@Injectable()
export class RespuestasEstudianteService {
  constructor(
    @InjectRepository(RespuestaEstudiante)
    private readonly repo: Repository<RespuestaEstudiante>,
  ) {}

  async findAll(): Promise<RespuestaEstudiante[]> {
    return await this.repo.find({
      relations: { examen: true, pregunta: true, estudiante: true },
    });
  }

  async findByExamenAndEstudiante(examenId: number, estudianteId: number): Promise<RespuestaEstudiante[]> {
    return await this.repo.find({
      where: { examenId, estudianteId },
      relations: { pregunta: true },
    });
  }

  async findOne(id: number): Promise<RespuestaEstudiante> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { examen: true, pregunta: true, estudiante: true },
    });
    if (!item) throw new NotFoundException(`Respuesta de estudiante con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async saveBatch(respuestas: Partial<RespuestaEstudiante>[]): Promise<RespuestaEstudiante[]> {
    const entities = this.repo.create(respuestas);
    return await this.repo.save(entities);
  }

  async update(id: number, data: Partial<RespuestaEstudiante>): Promise<RespuestaEstudiante> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}